"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mic, Image, FileIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getDocumentDetail, type VaultDocumentDetail } from "@/app/actions/vault";
import { useTranslations } from "next-intl";

interface DocumentDetailProps {
  documentId: string | null;
  onClose: () => void;
}

function typeIcon(type: string) {
  switch (type) {
    case "audio":
      return <Mic className="h-4 w-4" />;
    case "image":
      return <Image className="h-4 w-4" />;
    case "pdf":
      return <FileText className="h-4 w-4" />;
    default:
      return <FileIcon className="h-4 w-4" />;
  }
}

export function DocumentDetail({ documentId, onClose }: DocumentDetailProps) {
  const t = useTranslations("vault.documentDetail");
  const tCommon = useTranslations("common");
  const [doc, setDoc] = useState<VaultDocumentDetail | null>(null);
  const [loading, setLoading] = useState(false);

  const categoryLabel = (category: string): string => {
    if (category === "journal") return t("voiceJournal");
    if (category === "personality" || category === "psyche") return t("personality");
    if (category === "intelligence" || category === "cognitive") return t("intelligence");
    if (category === "strengths") return t("strengths");
    if (category === "wellness") return t("wellness");
    if (category === "astrology" || category === "esoteric") return t("astrology");
    if (category === "career") return t("career");
    return t("document");
  };

  useEffect(() => {
    if (!documentId) {
      setDoc(null);
      return;
    }

    setLoading(true);
    getDocumentDetail(documentId)
      .then((data) => setDoc(data))
      .finally(() => setLoading(false));
  }, [documentId]);

  const isOpen = !!documentId;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-2 rounded-lg bg-muted">
              {doc ? typeIcon(doc.type) : <FileIcon className="h-4 w-4" />}
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-base font-semibold truncate">
                {loading ? tCommon("loading") : doc?.fileName || t("document")}
              </DialogTitle>
              {doc && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {categoryLabel(doc.category)}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(doc.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                      doc.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                        : doc.status === "processing"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6 py-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
            </div>
          ) : !doc ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              Document not found.
            </div>
          ) : doc.contentText ? (
            <div className="chat-response">
              <ReactMarkdown>{doc.contentText}</ReactMarkdown>
            </div>
          ) : (
            <div className="text-center py-12 text-sm text-muted-foreground">
              No extracted text available for this document.
            </div>
          )}
        </ScrollArea>

        {doc?.fileUrl && (
          <div className="px-6 py-3 border-t shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open(doc.fileUrl!, "_blank")}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {t("openOriginalFile")}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
