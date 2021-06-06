import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import visitanteCheck from '../middlewares/visitanteCheck';
import VisitanteIdContext from '../contexts/VisitanteIdContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  // const [visitanteId, setVisitanteId] = useState(pageProps.checkVisitanteId);
  // setVisitanteId(pageProps.checkVisitanteId);
  // Está dando infinity loop usando o setter da forma acima

  return (
    pageProps.visitanteId === 'error' ? (
      <>
        <h1>Erro! Vefifique se os cookies do seu navegador estão ligados.</h1>
        <h2>Tente recarregar a página. Isso pode resolver o problema.</h2>
      </>
    ) : (
      <>
        <Header />
        <VisitanteIdContext.Provider value={{ visitanteId: pageProps.visitanteId }}>
          <Component {...pageProps} />
        </VisitanteIdContext.Provider>
        <Footer />
      </>
    )

  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const visitanteId = await visitanteCheck();

  return {
    pageProps: {
      ...appProps.pageProps,
      visitanteId,
    },
  };
};

export default MyApp;
