import "@/lib/braintrust"; // Ensures initLogger runs
import { model, modelID } from "@/ai/providers";
import { weatherTool } from "@/ai/tools";
import { convertToModelMessages, stepCountIs, UIMessage } from "ai";
import { wrapAISDK } from "braintrust";
import * as ai from "ai";

const { streamText } = wrapAISDK(ai);

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
  }: { messages: UIMessage[]; selectedModel: modelID } = await req.json();

  const result = streamText({
    model: model.languageModel(selectedModel),
    system: "You are a helpful assistant.",
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(5), // enable multi-step agentic flow
    tools: {
      getWeather: weatherTool,
    },
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
    onError: (error) => {
      if (error instanceof Error) {
        if (error.message.includes("Rate limit")) {
          return "Rate limit exceeded. Please try again later.";
        }
      }
      console.error(error);
      return "An error occurred.";
    },
  });
}
