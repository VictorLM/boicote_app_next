/* eslint-disable */
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap" rel="stylesheet" />
          <link rel="icon" href="/images/logo-red.svg" />
          <meta name="description" content="Aqui você encontra e organiza seus boicotes online" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="content-language" content="pt-br" />
          <link rel="canonical" href="https://boicote.app/" />
          {/* Open Graph */}
          <meta property="og:image" content="https://boicote.app/images/logo-red.svg" />
          <meta property="og:site_name" content="Boicote.App" />
          <meta property="og:locale" content="pt_BR" />
          {/* Twitter Cards */}
          <meta name="twitter:card" content="https://boicote.app/images/logo-red.svg"/>
          <meta name="twitter:site" content="@boicoteapp"/>
          <meta name="twitter:image" content="https://boicote.app/images/logo-red.svg"/>
          <meta name="twitter:creator" content="@boicoteapp"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Analytics */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-8JPKNRGQBB" />
              <script
                dangerouslySetInnerHTML={{
                  __html:
                    `window.dataLayer = window.dataLayer || [];`+
                    `function gtag(){dataLayer.push(arguments);}`+
                    `gtag('js', new Date());`+
                    `gtag('config', 'G-8JPKNRGQBB');`
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
