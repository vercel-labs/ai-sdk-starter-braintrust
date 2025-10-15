<a href="https://ai-sdk-starter-braintrust.vercel.app">
  <h1 align="center">Vercel x Braintrust Agent</h1>
</a>

<p align="center">
  An open-source AI Agent template built with Next.js, the AI SDK by Vercel, Vercel AI Gateway, and Braintrust.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- **AI Gateway Integration**: Models are accessed through [Vercel AI Gateway](https://vercel.com/ai-gateway) for unified AI provider management and monitoring.
- **Braintrust Tracing**: Complete observability and tracing powered by [Braintrust](https://braintrust.dev) for debugging and optimizing AI agent behavior.
- Agent built with [AI SDK 5](https://ai-sdk.dev/docs).
- Built-in tool integration for extending AI capabilities (demonstrated with a weather tool example).
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=Vercel+x+Braintrust+Agent&repository-name=ai-sdk-braintrust&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-braintrust&demo-title=Vercel+x+Braintrust+Agent&demo-url=https%3A%2F%2Fai-sdk-starter-braintrust.vercel.app%2F&demo-description=An+AI+agent+with+Vercel+AI+Gateway+and+Braintrust+tracing)

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   pnpm install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   pnpm install -g vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables, including:
   - `BRAINTRUST_API_KEY`: Your Braintrust API key for tracing
   - AI Gateway configuration for model access

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your AI agent application.

## Configuration

This project uses:

- **Vercel AI Gateway** to route requests to various AI providers through a unified interface
- **Braintrust** to trace and monitor all AI interactions, providing detailed logs and performance metrics

Visit the [Braintrust dashboard](https://braintrust.dev) to view traces and analyze your agent's behavior.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors.

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
