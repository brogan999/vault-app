"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Square, Waves } from "lucide-react";
import { submitVoiceJournal } from "@/app/actions/journal";
import { toast } from "sonner";

export function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("Failed to start recording. Please check microphone permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!audioBlob) return;

    setIsProcessing(true);
    try {
      await submitVoiceJournal(audioBlob);
      toast.success("Voice journal submitted successfully");
      setAudioBlob(null);
      setAudioUrl(null);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    } catch (error) {
      console.error("Error submitting journal:", error);
      toast.error("Failed to submit voice journal");
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [audioUrl]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-4">
        {!isRecording ? (
          <Button
            onClick={startRecording}
            size="lg"
            className="rounded-full h-20 w-20"
          >
            <Mic className="h-8 w-8" />
          </Button>
        ) : (
          <Button
            onClick={stopRecording}
            size="lg"
            variant="destructive"
            className="rounded-full h-20 w-20"
          >
            <Square className="h-8 w-8" />
          </Button>
        )}
      </div>

      {isRecording && (
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Waves className="h-4 w-4 animate-pulse" />
          <span className="text-sm">Recording...</span>
        </div>
      )}

      {audioUrl && !isRecording && (
        <div className="space-y-2">
          <audio src={audioUrl} controls className="w-full" />
          <div className="flex gap-2">
            <Button onClick={handleSubmit} disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Submit Journal"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setAudioBlob(null);
                setAudioUrl(null);
                if (audioUrl) {
                  URL.revokeObjectURL(audioUrl);
                }
              }}
            >
              Discard
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}