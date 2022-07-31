import { Html, Head, Main, NextScript } from "next/document";

/* change the theme here */
export default function Document() {
  return (
    <Html className='theme-fluff bg'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Lora:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
