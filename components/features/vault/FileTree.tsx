"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Folder,
  ChevronDown,
  ChevronRight,
  Trash2,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  getDocumentsForVault,
  deleteDocumentFromVault,
  type VaultDocument,
  type DocumentCategory,
} from "@/app/actions/vault";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface FileTreeProps {
  onDocumentOpen?: (
    documentId: string,
    type: string,
    fileUrl: string | null
  ) => void;
}

const statusStyles: Record<
  string,
  { text: string; bg: string; label: string }
> = {
  completed: {
    text: "text-primary",
    bg: "bg-muted",
    label: "completed",
  },
  processing: {
    text: "text-primary",
    bg: "bg-muted",
    label: "processing",
  },
  error: {
    text: "text-destructive",
    bg: "bg-destructive/10",
    label: "error",
  },
};

export function FileTree({ onDocumentOpen }: FileTreeProps) {
  const t = useTranslations("vault.fileTree");
  const tCommon = useTranslations("common");
  const [documents, setDocuments] = useState<VaultDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    DocumentCategory | "all"
  >("all");
  const [expandedFolders, setExpandedFolders] = useState<
    Set<DocumentCategory>
  >(new Set(["personality", "intelligence", "strengths", "wellness", "astrology", "career", "journal"]));

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    const data = await getDocumentsForVault();
    setDocuments(data);
  };

  const toggleFolder = (category: DocumentCategory) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const deleteDocument = async (id: string) => {
    const result = await deleteDocumentFromVault(id);
    if (!result.ok) {
      toast.error(result.error ?? t("deleteFailed"));
      return;
    }
    toast.success(t("documentDeleted"));
    loadDocuments();
  };

  const categories: { key: DocumentCategory; label: string }[] = [
    { key: "personality", label: t("personality") },
    { key: "intelligence", label: t("intelligence") },
    { key: "strengths", label: t("strengths") },
    { key: "wellness", label: t("wellness") },
    { key: "astrology", label: t("astrology") },
    { key: "career", label: t("career") },
    { key: "journal", label: t("journal") },
  ];

  const filterOptions = ["all", ...categories.map((c) => c.key)];
  const filterLabels: Record<string, string> = {
    all: t("all"),
    ...Object.fromEntries(categories.map((c) => [c.key, c.label])),
  };

  const filteredDocuments =
    selectedCategory === "all"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  const documentsByCategory = categories.reduce(
    (acc, category) => {
      acc[category.key] = filteredDocuments.filter(
        (doc) => doc.category === category.key
      );
      return acc;
    },
    {} as Record<DocumentCategory, VaultDocument[]>
  );

  // When a specific category is selected, show only that folder (not all four with empty counts)
  const categoriesToShow =
    selectedCategory === "all"
      ? categories
      : categories.filter((c) => c.key === selectedCategory);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelectedCategory(filter as DocumentCategory | "all")}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              selectedCategory === filter
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      {/* File categories — only the selected folder when a filter is active */}
      <div className="flex flex-col gap-1">
        {categoriesToShow.map((category) => {
          const categoryDocs = documentsByCategory[category.key];
          const isExpanded = expandedFolders.has(category.key);

          return (
            <div key={category.key}>
              {/* Category header */}
              <button
                type="button"
                onClick={() => toggleFolder(category.key)}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-muted/50 transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
                <Folder className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm font-semibold text-foreground">
                  {category.label}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  ({categoryDocs.length})
                </span>
              </button>

              {/* Files list */}
              {isExpanded && (
                <div className="ml-9 flex flex-col gap-0.5">
                  {categoryDocs.length === 0 ? (
                    <p className="py-2 px-3 text-sm text-muted-foreground">
                      No files
                    </p>
                  ) : (
                    categoryDocs.map((doc) => {
                      const style = statusStyles[doc.status] ?? statusStyles.error;
                      return (
                        <div
                          key={doc.id}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-muted/30 transition-colors group cursor-pointer"
                          onClick={() =>
                            onDocumentOpen?.(doc.id, doc.type, doc.fileUrl)
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              onDocumentOpen?.(doc.id, doc.type, doc.fileUrl);
                            }
                          }}
                        >
                          <FileText className="h-4 w-4 text-muted-foreground/60 shrink-0" />
                          <span className="flex-1 text-sm text-foreground truncate min-w-0">
                            {doc.fileName}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-semibold px-2 py-0.5 rounded-md shrink-0",
                              style.text,
                              style.bg
                            )}
                          >
                            {style.label}
                          </span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100 shrink-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="h-3.5 w-3.5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteDocument(doc.id);
                                }}
                                className="text-destructive"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                {tCommon("delete")}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
