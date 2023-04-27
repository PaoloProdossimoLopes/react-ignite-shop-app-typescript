import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />  
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main /> {/* Indica onde sera renderizado os compnentes */}

        <NextScript /> {/* Colocar sempre no final do tag body (recomendado pela doc) */}
      </body>
    </Html>
  )
}