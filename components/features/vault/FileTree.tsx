"use client";

import { useState, useEffect } from "react";
import { File, Folder, FolderOpen, Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getDocumentsForVault, deleteDocumentFromVault, type VaultDocument, type DocumentCategory } from "@/app/actions/vault";
import { toast } from "sonner";

export function FileTree() {
  const [documents, setDocuments] = useState<VaultDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory | "all">("all");
  const [expandedFolders, setExpandedFolders] = useState<Set<DocumentCategory>>(
    new Set(["psyche", "cognitive", "esoteric", "journal"])
  );

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
      toast.error(result.error ?? "Failed to delete document");
      return;
    }
    toast.success("Document deleted");
    loadDocuments();
  };

  const categories: { key: DocumentCategory; label: string }[] = [
    { key: "psyche", label: "Psyche" },
    { key: "cognitive", label: "Cognitive" },
    { key: "esoteric", label: "Esoteric" },
    { key: "journal", label: "Journal" },
  ];

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

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("all")}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* File Tree */}
      <ScrollArea className="h-[600px]">
        <div className="space-y-1">
          {categories.map((category) => {
            const categoryDocs = documentsByCategory[category.key];
            const isExpanded = expandedFolders.has(category.key);

            return (
              <div key={category.key}>
                <button
                  onClick={() => toggleFolder(category.key)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm font-medium"
                >
                  {isExpanded ? (
                    <FolderOpen className="h-4 w-4" />
                  ) : (
                    <Folder className="h-4 w-4" />
                  )}
                  <span>{category.label}</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    ({categoryDocs.length})
                  </span>
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {categoryDocs.length === 0 ? (
                      <p className="text-xs text-muted-foreground px-2 py-1">
                        No files
                      </p>
                    ) : (
                      categoryDocs.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center gap-2 px-2 py-1 hover:bg-muted rounded group"
                        >
                          <File className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs flex-1 truncate">
                            {doc.fileName}
                          </span>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded ${
                              doc.status === "completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : doc.status === "processing"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                            }`}
                          >
                            {doc.status}
                          </span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100"
                              >
                                <MoreVertical className="h-3 w-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => deleteDocument(doc.id)}
                                className="text-destructive"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}