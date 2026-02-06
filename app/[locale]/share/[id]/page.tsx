import { getSharedMessage } from "@/app/actions/feedback";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getTranslations } from "next-intl/server";

export default async function SharedMessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shared = await getSharedMessage(id);
  const t = await getTranslations("share");

  if (!shared) {
    notFound();
  }

  const date = new Date(shared.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
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
            <a href="/" className="underline hover:text-foreground">
              The Vault
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
