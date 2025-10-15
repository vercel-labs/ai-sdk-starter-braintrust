import Link from "next/link";

export const DeployButton = () => (
  <Link
    href={`https://vercel.com/new/clone?project-name=Vercel+x+Braintrust+Chatbot&repository-name=ai-sdk-starter-braintrust&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-starter-braintrust&demo-title=Vercel+x+Braintrust+Agent&demo-url=https%3A%2F%2Fai-sdk-starter-braintrust.labs.vercel.dev%2F&demo-description=A+simple+AI+agent+built+with+Next.js+that+uses+Braintrust+via+the+AI+SDK+and+the+Vercel+Marketplace&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22ai%22%2C%22productSlug%22%3A%22api-key%22%2C%22integrationSlug%22%3A%22braintrust%22%7D%5D`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 ml-2 bg-black text-white text-sm px-3 py-1.5 rounded-md hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
  >
    <svg
      data-testid="geist-icon"
      height={14}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={14}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
    Deploy
  </Link>
);
