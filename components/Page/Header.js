import Head from "next/head";
import { website } from "../../fluff.config";

export default function Header({}) {
  return (
    <Head>
      <title>{website.title + " - " + website.description}</title>
      <meta name='description' content={website.description} />
      <meta charSet='UTF-8' />
      <meta name='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href='/icon.png' />
    </Head>
  );
}
