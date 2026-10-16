import { createServerFn } from "@tanstack/react-start";

const MAX_GOALS_LENGTH = 2000;

export const generateBrief = createServerFn({ method: "POST" })
  .inputValidator((input: { goals?: unknown }) => {
    const goals = typeof input?.goals === "string" ? input.goals.trim() : "";
    if (goals.length < 10) {
      throw new Error("Tell us a little more about your goals (at least a sentence).");
    }
    return { goals: goals.slice(0, MAX_GOALS_LENGTH) };
  })
  .handler(async ({ data }) => {
    const { generateProjectBrief } = await import("./brief.server");
    try {
      const brief = await generateProjectBrief(data.goals);
      return { brief };
    } catch (error) {
      console.error(error);
      throw new Error(
        "We couldn’t create your brief just now. Please try again in a moment.",
      );
    }
  });
