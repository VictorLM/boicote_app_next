import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <div className="container">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
