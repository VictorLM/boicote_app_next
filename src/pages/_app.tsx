import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>
);

export default MyApp;
