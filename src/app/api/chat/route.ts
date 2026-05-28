import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { buildResumeContext } from "@/lib/resume-context";

export const maxDuration = 30;

const MODEL = process.env.CHAT_MODEL ?? "gemini-2.0-flash";

const systemPrompt = `You are the assistant on Ashok Modhave's portfolio site. You answer questions from recruiters, hiring managers, and engineers about Ashok's background, experience, and skills.

Rules:
- Answer ONLY from the context below. If something isn't covered, say you don't have that detail and suggest contacting Ashok directly.
- Be concise and concrete. Lead with the answer, then a supporting detail or metric.
- Speak about Ashok in the third person ("Ashok led...", "He shipped...").
- When relevant, cite specific projects, companies, or metrics from the context.
- Never invent employers, dates, numbers, or technologies that aren't in the context.
- Keep responses to a few short sentences unless asked for depth.

--- CONTEXT ---
${buildResumeContext()}
--- END CONTEXT ---`;

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      {
        error:
          "Chat is not configured: GOOGLE_GENERATIVE_AI_API_KEY is not set.",
      },
      { status: 503 },
    );
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google(MODEL),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
