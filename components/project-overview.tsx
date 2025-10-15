import NextLink from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">Vercel x Braintrust Agent</h1>
      <p className="text-center">
        This starter project uses the{" "}
        <Link href="https://ai-sdk.dev/docs">AI SDK</Link> with{" "}
        <Link href="https://vercel.com/ai-gateway">Vercel AI Gateway</Link>,
        traced with <Link href="https://braintrust.dev/">Braintrust</Link> via
        the{" "}
        <Link href="https://vercel.com/marketplace/braintrust">
          Vercel Marketplace
        </Link>
        .
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};
