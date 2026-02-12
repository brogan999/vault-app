"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Upload, FileText, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { uploadDocument } from "@/app/actions/upload";
import { toast } from "sonner";
import { trackDocumentUploaded } from "@/lib/analytics";

interface UploadedFile {
  name: string;
  size: number;
  status: "uploading" | "completed" | "error";
}

export function DropZone() {
  const t = useTranslations("vault.dropZone");
  const tc = useTranslations("common");
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(async (fileList: FileList) => {
    const incoming = Array.from(fileList);

    // Add files in "uploading" state
    const newEntries: UploadedFile[] = incoming.map((f) => ({
      name: f.name,
      size: f.size,
      status: "uploading" as const,
    }));
    setFiles((prev) => [...prev, ...newEntries]);

    // Upload each file
    for (const file of incoming) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const result = await uploadDocument(formData);

        if (result.success) {
          const ext = file.name.split(".").pop() ?? "unknown";
          trackDocumentUploaded(ext, file.size);
          setFiles((prev) =>
            prev.map((f) =>
              f.name === file.name && f.status === "uploading"
                ? { ...f, status: "completed" }
                : f
            )
          );
          toast.success(t("uploadSuccess", { name: file.name }));
        } else {
          setFiles((prev) =>
            prev.map((f) =>
              f.name === file.name && f.status === "uploading"
                ? { ...f, status: "error" }
                : f
            )
          );
          toast.error(result.error || t("uploadFailed", { name: file.name }));
        }
      } catch (error) {
        console.error("Upload error:", error);
        setFiles((prev) =>
          prev.map((f) =>
            f.name === file.name && f.status === "uploading"
              ? { ...f, status: "error" }
              : f
          )
        );
        toast.error(t("uploadFailed", { name: file.name }));
      }
    }
  }, [t]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files?.length) {
        processFiles(e.dataTransfer.files);
      }
    },
    [processFiles]
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      processFiles(e.target.files);
    }
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      {/* Drop zone */}
      <button
        type="button"
        className={cn(
          "w-full rounded-2xl border-2 border-dashed transition-colors cursor-pointer flex flex-col items-center justify-center py-12 px-6 text-center",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-card hover:border-primary/40 hover:bg-primary/[0.02]"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        aria-label="Upload files by drag and drop or click to browse"
      >
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-colors",
            isDragging ? "bg-primary/10" : "bg-muted"
          )}
        >
          <Upload
            className={cn(
              "h-6 w-6 transition-colors",
              isDragging ? "text-primary" : "text-muted-foreground"
            )}
          />
        </div>
        <p className="text-base font-semibold text-foreground">
          {t("dragAndDrop")}
        </p>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
          {t("orClickToBrowse")}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-3">
          {t("maxFileSize")}
        </p>
      </button>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.txt,.md,.csv,.json,.mp3,.wav,.webm,.m4a,.ogg,.png,.jpg,.jpeg,.gif,.webp"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Uploading / recently uploaded files */}
      {files.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center gap-3 rounded-xl bg-card px-4 py-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatSize(file.size)}
                </p>
              </div>
              {file.status === "uploading" ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary shrink-0" />
              ) : file.status === "completed" ? (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md text-primary bg-muted">
                  {tc("completed")}
                </span>
              ) : (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md text-destructive bg-destructive/10">
                  {tc("error")}
                </span>
              )}
              <button
                type="button"
                onClick={() => removeFile(file.name)}
                className="shrink-0 p-1 rounded-md hover:bg-muted transition-colors"
                aria-label={`Remove ${file.name}`}
              >
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
