import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import BoicotarSection from '../components/BoicotarSection';

import getTweets, { GetTweetsType } from '../utils/getTweets';

type BoicotarPropsType = {
  tweetsData: GetTweetsType;
}

const Boicotar: React.FC<BoicotarPropsType> = ({ tweetsData }) => (
  <>
    <Head>
      <title>Boicotar | Boicote.App | Consumir é um ato político</title>
      {/* Open Graph */}
      <meta property="og:title" content="Boicotar | Boicote.App | Consumir é um ato político" />
      <meta property="og:description" content="Aqui você encontra e organiza seus boicotes online" />
      <meta property="og:url" content="https://boicote.app/boicotar" />
      <meta property="og:type" content="website" />
      {/* Twitter Cards */}
      <meta name="twitter:title" content="Boicotar | Boicote.App | Consumir é um ato político" />
      <meta name="twitter:description" content="Aqui você encontra e organiza seus boicotes online" />
    </Head>
    <BoicotarSection
      tweetsData={tweetsData}
    />
  </>
);

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async () => {
  const tweetsData = await getTweets('boicotem,boicote,boicotar');

  return {
    props: {
      tweetsData,
    },
  };
};

export default Boicotar;
