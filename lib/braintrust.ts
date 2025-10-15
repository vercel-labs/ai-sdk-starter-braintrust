import { initLogger } from "braintrust";

// Initialize once when the module is first imported
export const logger = initLogger({
  projectName: process.env.BRAINTRUST_PROJECT_NAME,
  apiKey: process.env.BRAINTRUST_API_KEY,
});