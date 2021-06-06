import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import HeroSection from '../components/HeroSection';
import EntendaSection from '../components/EntendaSection';
import SobreSection from '../components/SobreSection';
import UltimosBoicotesSection from '../components/UltimosBoicotesSection';

import getTweets, { GetTweetsType } from '../utils/getTweets';
import getBoicotes, { GetBoicotesType } from '../utils/getBoicotes';
import getVisitanteVotos, { GetVisitanteVotosType } from '../utils/getVisitanteVotos';

type HomePropsType = {
  boicotesData: GetBoicotesType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
}

const Home: React.FC<HomePropsType> = ({
  boicotesData, visitanteVotos, tweetsData,
}) => (
  <>
    <Head>
      <title>Boicote.App | Consumir é um ato político</title>
      {/* meta tags - TODO */}
      {/* Google Analytics - TODO */}
    </Head>
    <HeroSection />
    <EntendaSection />
    <SobreSection />
    <UltimosBoicotesSection
      boicotesData={boicotesData}
      visitanteVotos={visitanteVotos}
      tweetsData={tweetsData}
    />
  </>
);

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const boicotesData = await getBoicotes(4, null);
  const tweetsData = await getTweets('boicotem,boicote,boicotar');
  const visitanteVotos = await getVisitanteVotos(ctx.req.headers.cookie);

  return {
    props: {
      boicotesData, visitanteVotos, tweetsData,
    },
  };
};

export default Home;
