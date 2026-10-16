import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { createLovableAiGatewayRunIdFetch } from "./run-id";

const GATEWAY_BASE_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

const SYSTEM_PROMPT = `You are the project brief assistant for Delaware Creative, a small design agency offering brand & creative direction, website & digital design, and web development.

A prospective client will describe their business and website goals. Write a tailored project brief in Markdown with exactly these sections:

## Project summary
Two or three sentences capturing their business, audience, and what success looks like.

## Recommended services
A short bullet list choosing from: Brand & creative direction, Website & digital design, Web development. For each, one line on why it fits their goals.

## Suggested approach
Three to five bullets describing how the project could unfold (discovery, design, build, launch), tailored to what they described.

## Next steps
Two or three concrete, friendly next steps, ending with an invitation to start a conversation with the agency.

Tone: warm, professional, human. No jargon, no pricing, no invented timelines. Keep the whole brief under 350 words.`;

export async function generateProjectBrief(goals: string): Promise<string> {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) {
    throw new Error("AI brief generation is not configured yet.");
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: GATEWAY_BASE_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses(MODEL),
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: goals }],
    maxRetries: 0,
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  const text = (await result.text).trim();
  if (!text) {
    throw new Error("The brief came back empty. Please try again.");
  }
  return text;
}
