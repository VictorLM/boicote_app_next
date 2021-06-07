import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import { ToastContainer } from 'react-toastify';
import visitanteCheck from '../middlewares/visitanteCheck';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    pageProps.visitanteId === 'error' ? (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <h1>Erro! Verifique se os cookies do seu navegador estão ligados.</h1>
        <h2>Tente recarregar a página. Isso poderá resolver o problema.</h2>
      </div>
    ) : (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </>
    )

  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const visitanteId = await visitanteCheck(appContext.ctx.req, appContext.ctx.res);

  return {
    pageProps: {
      ...appProps.pageProps,
      visitanteId,
    },
  };
};

export default MyApp;
