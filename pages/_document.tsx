import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="hu">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta name="description" content="Fedezd fel a zene új dimenzióját a MuzsikAI segítségével, ahol mesterséges intelligencia fordítja dallammá a szövegeidet. Írj szöveget, és hagyd, hogy az AI varázslatos zenét alkoss belőle." />
          <meta name="keywords" content="mesterséges intelligencia, személyre szabott zene, zenei platform, AI zene, egyedi zene rendelés" />
          <link rel="alternate" href="https://www.muzsikai.com" hrefLang="hu" />
          <title>MuzsikAI - Személyre szabott mesterséges intelligencia által készített zenék</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
