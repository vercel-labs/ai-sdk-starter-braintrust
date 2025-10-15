import { customProvider, gateway } from "ai";

const languageModels = {
  "haiku-4.5": gateway("anthropic/claude-haiku-4.5"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "haiku-4.5";
