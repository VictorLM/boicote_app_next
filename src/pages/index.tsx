import React, { useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

// import visitanteCheck from '../middlewares/visitanteCheck';
import HeroSection from '../components/HeroSection';
import EntendaSection from '../components/EntendaSection';
import SobreSection from '../components/SobreSection';
import UltimosBoicotesSection from '../components/UltimosBoicotesSection';

import getTweets, { GetTweetsType } from '../utils/getTweets';
import getBoicotes, { GetBoicotesType } from '../utils/getBoicotes';
import getVisitanteVotos, { GetVisitanteVotosType } from '../utils/getVisitanteVotos';
import VisitanteIdContext from '../contexts/VisitanteIdContext';

type HomePropsType = {
  boicotesData: GetBoicotesType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
}

const Home: React.FC<HomePropsType> = ({
  boicotesData, visitanteVotos, tweetsData,
}) => {
  // useEffect(() => {
  //   const visitantesCheckMiddleware = async () => {
  //     // CHECA COOKIE VISITANTEID
  //     await visitanteCheck();
  //   };
  //   visitantesCheckMiddleware();
  // }, []);

  const context = useContext(VisitanteIdContext);

  return (
    <>
      <Head>
        <title>Boicote.App | Consumir é um ato político</title>
        {/* meta tags - TODO */}
        {/* Google Analytics - TODO */}
      </Head>
      <h1>{context.visitanteId}</h1>
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
};

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const boicotesData = await getBoicotes(4, null);
  const tweetsData = await getTweets('boicote,boicotem,boicotar');
  const visitanteVotos = await getVisitanteVotos(ctx);

  return {
    props: {
      boicotesData, visitanteVotos, tweetsData,
    },
  };
};

export default Home;
