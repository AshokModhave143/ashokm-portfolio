"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { ArrowUp, Sparkles } from "lucide-react";

const suggestions = [
  "What GenAI work has Ashok shipped?",
  "Tell me about his payments / PCI experience.",
  "Why is he a good fit for a senior full-stack role?",
  "What's he learning right now?",
];

export function ResumeChat({ enabled }: { enabled: boolean }) {
  const { messages, sendMessage, status, error } = useChat();
  const [input, setInput] = useState("");
  const busy = status === "submitted" || status === "streaming";

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/40">
      {/* Messages */}
      <div className="min-h-[18rem] space-y-5 p-5 md:p-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-start gap-4 pt-2">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              <Sparkles size={13} /> Ask my résumé
            </span>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              An AI assistant grounded in my actual experience — projects,
              stack, and the work behind them. Ask anything, or start with one of
              these:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled={!enabled}
                  onClick={() => submit(s)}
                  className="chip chip-brand cursor-pointer transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  m.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-white"
                    : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-2.5 text-sm leading-relaxed text-foreground/90"
                }
              >
                {m.parts.map((part, i) =>
                  part.type === "text" ? <span key={i}>{part.text}</span> : null,
                )}
              </div>
            </div>
          ))
        )}
        {busy && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-2.5 text-sm text-muted">
              <span className="inline-flex gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        )}
        {error && (
          <p className="text-sm text-amber">
            Couldn&rsquo;t reach the assistant. Try again in a moment.
          </p>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!enabled || busy}
          placeholder={enabled ? "Ask about my experience…" : "Chat coming online soon"}
          className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!enabled || busy || !input.trim()}
          aria-label="Send"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition hover:opacity-90 disabled:opacity-40"
        >
          <ArrowUp size={16} />
        </button>
      </form>
    </div>
  );
}
