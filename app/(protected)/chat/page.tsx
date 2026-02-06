"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageThread } from "@/components/features/chat/MessageThread";
import { ChatInput } from "@/components/features/chat/ChatInput";
import { ActiveContext } from "@/components/features/chat/ActiveContext";
import { ContextSidebar } from "@/components/layout/ContextSidebar";
import { createChatSession, getDocumentsForReference } from "@/app/actions/chat";
import { uploadDocument } from "@/app/actions/upload";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VoiceRecorder } from "@/components/features/journal/VoiceRecorder";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import { toast } from "sonner";

export default function ChatPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sources, setSources] = useState<string[]>([]);
  const [showVoiceDialog, setShowVoiceDialog] = useState(false);
  const [showReferencePicker, setShowReferencePicker] = useState(false);
  const [referenceDocumentIds, setReferenceDocumentIds] = useState<string[]>([]);
  const [referenceDocs, setReferenceDocs] = useState<{ id: string; fileName: string }[]>([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isUploadingDrop, setIsUploadingDrop] = useState(false);
  const refContextIds = useRef<string[]>([]);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `/api/chat/${sessionId ?? "pending"}`,
        fetch: async (url, options) => {
          const res = await fetch(url, options);
          const raw = res.headers.get("X-Chat-Sources");
          if (raw) {
            try {
              const decoded = JSON.parse(atob(raw)) as {
                id: string;
                label: string;
              }[];
              setSources(decoded.map((s) => s.label));
            } catch {
              // ignore
            }
          }
          return res;
        },
        prepareSendMessagesRequest: async (opts) => {
          const ids = refContextIds.current;
          return {
            api: opts.api,
            headers: opts.headers,
            credentials: opts.credentials,
            body: {
              ...opts.body,
              id: opts.id,
              messages: opts.messages,
              ...(ids.length > 0 && { contextDocumentIds: ids }),
            },
          };
        },
      }),
    [sessionId]
  );

  const { messages, sendMessage, status } = useChat({
    id: sessionId ?? "pending",
    transport,
  });

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const session = await createChatSession();
        setSessionId(session.id);
      } catch (error) {
        console.error("Failed to create session:", error);
      }
    };

    initializeSession();
  }, []);

  const handleNewChat = async () => {
    try {
      const session = await createChatSession();
      setSessionId(session.id);
      setSources([]);
      setReferenceDocumentIds([]);
      refContextIds.current = [];
    } catch (error) {
      console.error("Failed to create new session:", error);
    }
  };

  const openReferencePicker = async () => {
    setShowReferencePicker(true);
    try {
      const docs = await getDocumentsForReference();
      setReferenceDocs(docs);
    } catch {
      toast.error("Failed to load documents");
      setShowReferencePicker(false);
    }
  };

  const toggleReferenceDoc = (docId: string, checked: boolean) => {
    const next = checked
      ? [...referenceDocumentIds, docId]
      : referenceDocumentIds.filter((id) => id !== docId);
    setReferenceDocumentIds(next);
    refContextIds.current = next;
  };

  const closeReferencePicker = () => {
    setShowReferencePicker(false);
    if (referenceDocumentIds.length > 0) {
      toast.success(
        `${referenceDocumentIds.length} document(s) will be used for your next message`
      );
    }
  };

  const clearReferences = () => {
    refContextIds.current = [];
    setReferenceDocumentIds([]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.types.includes("Files")) setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const files = e.dataTransfer.files;
    if (!files?.length) return;

    setIsUploadingDrop(true);
    try {
      const addedIds: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.set("file", file);
        const result = await uploadDocument(formData);
        if (result?.documentId) addedIds.push(result.documentId);
      }
      if (addedIds.length > 0) {
        const next = [...referenceDocumentIds, ...addedIds];
        setReferenceDocumentIds(next);
        refContextIds.current = next;
        toast.success(
          `${addedIds.length} file(s) uploaded and added to context for your next message`
        );
      }
    } catch {
      toast.error("Failed to upload file(s)");
    } finally {
      setIsUploadingDrop(false);
    }
  };

  if (!sessionId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full">
      <div
        className="flex-1 flex flex-col relative"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDraggingOver && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 border-2 border-dashed border-primary rounded-lg m-2">
            <p className="text-sm font-medium">Drop file(s) to add to context</p>
          </div>
        )}
        {isUploadingDrop && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80">
            <p className="text-sm text-muted-foreground">Uploading…</p>
          </div>
        )}
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold">Chat</h1>
          <Button onClick={handleNewChat} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        </div>
        <MessageThread
          messages={messages}
          status={status}
          latestSources={sources}
          onSourceClick={() =>
            document.getElementById("context-sidebar")?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <ChatInput
          sendMessage={sendMessage}
          status={status}
          onSlashJournal={() => setShowVoiceDialog(true)}
          onSlashReference={openReferencePicker}
          onAfterSend={clearReferences}
          showVoiceHint={showVoiceDialog}
        />
      </div>
      <ContextSidebar title="Active Context" id="context-sidebar">
        {referenceDocumentIds.length > 0 && (
          <p className="text-xs text-muted-foreground mb-2">
            Referencing for next message: {referenceDocumentIds.length} doc(s)
          </p>
        )}
        <ActiveContext sources={sources} />
      </ContextSidebar>

      <Dialog open={showVoiceDialog} onOpenChange={setShowVoiceDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Voice journal</DialogTitle>
          </DialogHeader>
          <VoiceRecorder />
        </DialogContent>
      </Dialog>

      <Dialog open={showReferencePicker} onOpenChange={setShowReferencePicker}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cite a document</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mb-2">
            Select documents to include in context for your next message.
          </p>
          <ScrollArea className="max-h-64 rounded border p-2">
            <div className="space-y-1">
              {referenceDocs.length === 0 ? (
                <p className="text-sm text-muted-foreground p-2">
                  No documents yet. Upload files in the Vault.
                </p>
              ) : (
                referenceDocs.map((doc) => (
                <label
                  key={doc.id}
                  className="flex items-center gap-2 p-2 rounded hover:bg-muted cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={referenceDocumentIds.includes(doc.id)}
                    onChange={(e) =>
                      toggleReferenceDoc(doc.id, e.target.checked)
                    }
                  />
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm truncate">{doc.fileName}</span>
                </label>
              ))
              )}
            </div>
          </ScrollArea>
          <div className="flex justify-end mt-2">
            <Button onClick={closeReferencePicker}>Done</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}