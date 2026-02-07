"use client";

import { useEffect, useState, useRef } from "react";
import {
  getChatSessions,
  renameChatSession,
  deleteChatSession,
  pinChatSession,
  archiveChatSession,
} from "@/app/actions/chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  MoreHorizontal,
  Share,
  Pencil,
  Pin,
  PinOff,
  Archive,
  ArchiveRestore,
  Trash2,
  PanelLeftClose,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  lastMessagePreview: string;
  pinned: boolean;
  archived: boolean;
}

interface ChatHistoryProps {
  currentSessionId: string | null;
  onSelectSession: (sessionId: string) => void;
  onNewChat: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatHistory({
  currentSessionId,
  onSelectSession,
  onNewChat,
  isOpen,
  onToggle,
}: ChatHistoryProps) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const renameInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations("chat.history");

  useEffect(() => {
    loadSessions();
  }, [currentSessionId]);

  useEffect(() => {
    if (renamingId && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [renamingId]);

  const loadSessions = async () => {
    try {
      const data = await getChatSessions();
      setSessions(data);
    } catch (error) {
      console.error("Failed to load chat sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRename = async (sessionId: string) => {
    const trimmed = renameValue.trim();
    if (!trimmed) {
      setRenamingId(null);
      return;
    }
    try {
      await renameChatSession(sessionId, trimmed);
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, title: trimmed, lastMessagePreview: s.lastMessagePreview } : s))
      );
      toast.success("Chat renamed");
    } catch {
      toast.error("Failed to rename");
    }
    setRenamingId(null);
  };

  const handleDelete = async (sessionId: string) => {
    const result = await deleteChatSession(sessionId);
    if (result.success) {
      setSessions((prev) => prev.filter((s) => s.id !== sessionId));
      if (sessionId === currentSessionId) {
        onNewChat();
      }
      toast.success(t("chatDeleted"));
    } else {
      toast.error(t("deleteFailed"));
    }
  };

  const handlePin = async (sessionId: string, pinned: boolean) => {
    const result = await pinChatSession(sessionId, pinned);
    if (result.success) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, pinned } : s))
      );
      toast.success(pinned ? t("chatPinned") : t("chatUnpinned"));
    } else {
      toast.error(t("updateFailed"));
    }
  };

  const handleArchive = async (sessionId: string, archived: boolean) => {
    const result = await archiveChatSession(sessionId, archived);
    if (result.success) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, archived } : s))
      );
      if (archived && sessionId === currentSessionId) {
        onNewChat();
      }
      toast.success(archived ? t("chatArchived") : t("chatUnarchived"));
    } else {
      toast.error(t("updateFailed"));
    }
  };

  const handleShare = async (sessionId: string) => {
    const url = `${window.location.origin}/chat?session=${sessionId}`;
    await navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard");
  };

  // Filter by search, split pinned / archived / normal
  const filtered = search.trim()
    ? sessions.filter(
        (s) =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.lastMessagePreview.toLowerCase().includes(search.toLowerCase())
      )
    : sessions;

  const pinned = filtered.filter((s) => s.pinned && !s.archived);
  const active = filtered.filter((s) => !s.pinned && !s.archived);
  const archived = filtered.filter((s) => s.archived);

  const dateLabels: Record<string, string> = {
    today: t("today"),
    yesterday: t("yesterday"),
    thisWeek: t("thisWeek"),
    thisMonth: t("thisMonth"),
    older: t("older"),
  };
  const activeGrouped = groupSessionsByDate(active);

  return (
    <div
      className={cn(
        "flex flex-col h-full border-r border-border bg-card transition-all duration-200 ease-in-out overflow-hidden shrink-0",
        isOpen ? "w-[260px]" : "w-0"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 pb-2">
        <button
          type="button"
          onClick={onNewChat}
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>{t("newChat")}</span>
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Close chat history"
        >
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 pb-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("searchChats")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border-0 bg-muted/60 py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      {/* Sessions list */}
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        {loading ? (
          <div className="px-3 py-8 text-center">
            <p className="text-xs text-muted-foreground">Loading...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-3 py-8 text-center">
            <p className="text-xs text-muted-foreground">
              {search ? "No matching chats" : "No conversations yet"}
            </p>
          </div>
        ) : (
          <>
            {/* Pinned section */}
            {pinned.length > 0 && (
              <SessionGroup label={t("pinned")}>
                {pinned.map((session) => (
                  <SessionRow
                    key={session.id}
                    session={session}
                    isActive={session.id === currentSessionId}
                    isRenaming={renamingId === session.id}
                    renameValue={renameValue}
                    renameInputRef={renamingId === session.id ? renameInputRef : undefined}
                    onSelect={() => onSelectSession(session.id)}
                    onStartRename={() => {
                      setRenamingId(session.id);
                      setRenameValue(session.lastMessagePreview || session.title);
                    }}
                    onRenameChange={setRenameValue}
                    onRenameSubmit={() => handleRename(session.id)}
                    onRenameCancel={() => setRenamingId(null)}
                    onShare={() => handleShare(session.id)}
                    onPin={() => handlePin(session.id, !session.pinned)}
                    onArchive={() => handleArchive(session.id, !session.archived)}
                    onDelete={() => handleDelete(session.id)}
                  />
                ))}
              </SessionGroup>
            )}

            {/* Active sessions grouped by date */}
            {Object.entries(activeGrouped).map(([key, items]) => (
              <SessionGroup key={key} label={dateLabels[key] || key}>
                {items.map((session) => (
                  <SessionRow
                    key={session.id}
                    session={session}
                    isActive={session.id === currentSessionId}
                    isRenaming={renamingId === session.id}
                    renameValue={renameValue}
                    renameInputRef={renamingId === session.id ? renameInputRef : undefined}
                    onSelect={() => onSelectSession(session.id)}
                    onStartRename={() => {
                      setRenamingId(session.id);
                      setRenameValue(session.lastMessagePreview || session.title);
                    }}
                    onRenameChange={setRenameValue}
                    onRenameSubmit={() => handleRename(session.id)}
                    onRenameCancel={() => setRenamingId(null)}
                    onShare={() => handleShare(session.id)}
                    onPin={() => handlePin(session.id, !session.pinned)}
                    onArchive={() => handleArchive(session.id, !session.archived)}
                    onDelete={() => handleDelete(session.id)}
                  />
                ))}
              </SessionGroup>
            ))}

            {/* Archived toggle */}
            {archived.length > 0 && (
              <div className="mt-3">
                <button
                  onClick={() => setShowArchived(!showArchived)}
                  className="px-2 py-1 text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  {t("archived")} ({archived.length}) {showArchived ? "▾" : "▸"}
                </button>
                {showArchived && (
                  <div className="space-y-px mt-1">
                    {archived.map((session) => (
                      <SessionRow
                        key={session.id}
                        session={session}
                        isActive={session.id === currentSessionId}
                        isRenaming={renamingId === session.id}
                        renameValue={renameValue}
                        renameInputRef={renamingId === session.id ? renameInputRef : undefined}
                        onSelect={() => onSelectSession(session.id)}
                        onStartRename={() => {
                          setRenamingId(session.id);
                          setRenameValue(session.lastMessagePreview || session.title);
                        }}
                        onRenameChange={setRenameValue}
                        onRenameSubmit={() => handleRename(session.id)}
                        onRenameCancel={() => setRenamingId(null)}
                        onShare={() => handleShare(session.id)}
                        onPin={() => handlePin(session.id, !session.pinned)}
                        onArchive={() => handleArchive(session.id, !session.archived)}
                        onDelete={() => handleDelete(session.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────── */

function SessionGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
        {label}
      </p>
      <ul className="flex flex-col gap-0.5">{children}</ul>
    </div>
  );
}

function SessionRow({
  session,
  isActive,
  isRenaming,
  renameValue,
  renameInputRef,
  onSelect,
  onStartRename,
  onRenameChange,
  onRenameSubmit,
  onRenameCancel,
  onShare,
  onPin,
  onArchive,
  onDelete,
}: {
  session: ChatSession;
  isActive: boolean;
  isRenaming: boolean;
  renameValue: string;
  renameInputRef?: React.RefObject<HTMLInputElement | null>;
  onSelect: () => void;
  onStartRename: () => void;
  onRenameChange: (v: string) => void;
  onRenameSubmit: () => void;
  onRenameCancel: () => void;
  onShare: () => void;
  onPin: () => void;
  onArchive: () => void;
  onDelete: () => void;
}) {
  const t = useTranslations("chat.history");
  const preview = session.lastMessagePreview || session.title;

  if (isRenaming) {
    return (
      <div className="px-1">
        <input
          ref={renameInputRef}
          value={renameValue}
          onChange={(e) => onRenameChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onRenameSubmit();
            if (e.key === "Escape") onRenameCancel();
          }}
          onBlur={onRenameSubmit}
          className="w-full bg-background border rounded-lg px-2.5 py-1.5 text-[13px] focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex items-center rounded-lg transition-colors",
        isActive
          ? "bg-sidebar-accent text-foreground"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      <button
        onClick={onSelect}
        className={cn(
          "flex-1 text-left px-2 py-1.5 text-[13px] truncate min-w-0",
          isActive ? "font-semibold" : ""
        )}
        title={preview}
      >
        <span className="flex items-center gap-2 truncate">
          {session.pinned && <Pin className="h-3 w-3 shrink-0 text-primary" />}
          <span className="truncate">{preview || t("newChatDefault")}</span>
        </span>
      </button>

      {/* Three-dot menu — visible on hover or when active */}
      <div className={cn(
        "shrink-0 pr-1 opacity-0 group-hover:opacity-100 transition-opacity",
        isActive && "opacity-100"
      )}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted-foreground/10">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom" className="w-44">
            <DropdownMenuItem onClick={onShare}>
              <Share className="h-4 w-4 mr-2" />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onStartRename}>
              <Pencil className="h-4 w-4 mr-2" />
              {t("rename")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onPin}>
              {session.pinned ? (
                <>
                  <PinOff className="h-4 w-4 mr-2" />
                  {t("unpinChat")}
                </>
              ) : (
                <>
                  <Pin className="h-4 w-4 mr-2" />
                  {t("pinChat")}
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onArchive}>
              {session.archived ? (
                <>
                  <ArchiveRestore className="h-4 w-4 mr-2" />
                  {t("unarchive")}
                </>
              ) : (
                <>
                  <Archive className="h-4 w-4 mr-2" />
                  {t("archive")}
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={onDelete}
              className="text-destructive focus:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────── */

function groupSessionsByDate(
  sessions: ChatSession[]
): Record<string, ChatSession[]> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 86400000);
  const weekAgo = new Date(today.getTime() - 7 * 86400000);
  const monthAgo = new Date(today.getTime() - 30 * 86400000);

  const groups: Record<string, ChatSession[]> = {};

  for (const session of sessions) {
    const date = new Date(session.createdAt);
    let label: string;

    if (date >= today) {
      label = "today";
    } else if (date >= yesterday) {
      label = "yesterday";
    } else if (date >= weekAgo) {
      label = "thisWeek";
    } else if (date >= monthAgo) {
      label = "thisMonth";
    } else {
      label = "older";
    }

    if (!groups[label]) groups[label] = [];
    groups[label].push(session);
  }

  return groups;
}
