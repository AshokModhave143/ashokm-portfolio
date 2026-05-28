import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ResumeChat } from "@/components/resume-chat";

export const metadata: Metadata = {
  title: "Ask",
  description:
    "Ask an AI assistant grounded in Ashok Modhave's real experience, projects, and stack.",
};

export default function AskPage() {
  const enabled = !!process.env.AI_GATEWAY_API_KEY;

  return (
    <Section
      eyebrow="Ask"
      title="Ask my résumé."
      intro="A small demo of the work I'm doing — a chat assistant grounded in my actual experience, built with the Vercel AI SDK and Claude. No vector DB; the answers come straight from the structured data behind this site."
    >
      {!enabled && (
        <p className="mb-4 text-sm text-muted">
          The live assistant is being wired up — try the suggested questions to
          see the kinds of things you can ask.
        </p>
      )}
      <ResumeChat enabled={enabled} />
    </Section>
  );
}
