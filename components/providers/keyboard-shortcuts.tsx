"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function KeyboardShortcutsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+U: Upload file
      if ((e.metaKey || e.ctrlKey) && e.key === "u") {
        e.preventDefault();
        router.push("/vault");
      }

      // Space: Hold to record (would need to be implemented in voice recorder)
      // This is handled in the VoiceRecorder component
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return <>{children}</>;
}