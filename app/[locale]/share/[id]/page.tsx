import { getSharedMessage } from "@/app/actions/feedback";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Archive } from "lucide-react";

export default async function SharedMessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shared = await getSharedMessage(id);
  const t = await getTranslations("share");
  const tc = await getTranslations("common");

  if (!shared) {
    notFound();
  }

  const date = new Date(shared.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg shrink-0">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Archive className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground font-serif">
              {tc("theVault")}
            </span>
          </Link>
        </div>
      </header>
      <div className="max-w-2xl mx-auto w-full flex-1 px-6 py-12">
        {/* Content header */}
        <div className="mb-8 pb-6 border-b">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {t("sharedFrom")}
          </p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>

        {/* Prompt */}
        <div className="flex justify-end mb-6">
          <div className="bg-primary/15 text-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
            <p className="text-sm whitespace-pre-wrap leading-[1.7]">
              {shared.promptContent}
            </p>
          </div>
        </div>

        {/* Response */}
        <div className="chat-response">
          <ReactMarkdown>{shared.responseContent}</ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            {t("poweredBy")}{" "}
            <Link href="/" className="underline hover:text-foreground">
              {tc("theVault")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
