import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export default function HeadComponent({ title, description }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="all" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="theme-color" content="#fff" />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
