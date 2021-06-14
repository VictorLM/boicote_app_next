import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import BoicotesSection from '../components/BoicotesSection';

import getTweets, { GetTweetsType } from '../utils/getTweets';
import getBoicotes, { GetBoicotesType } from '../utils/getBoicotes';
import getVisitanteVotos, { GetVisitanteVotosType } from '../utils/getVisitanteVotos';

type BoicotesPropsType = {
  boicotesData: GetBoicotesType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
  pagina: number;
  boicotesPorPagina: number;
  ordenarMaisVotados: boolean;
}

const Boicotes: React.FC<BoicotesPropsType> = ({
  boicotesData,
  visitanteVotos,
  tweetsData,
  pagina,
  boicotesPorPagina,
  ordenarMaisVotados,
}) => (
  <>
    <Head>
      <title>Boicotes | Boicote.App | Consumir é um ato político</title>
      {/* Open Graph */}
      <meta property="og:title" content="Boicotes | Boicote.App | Consumir é um ato político" />
      <meta property="og:description" content="Aqui você encontra e organiza seus boicotes online" />
      <meta property="og:url" content="https://boicote.app/boicotes" />
      <meta property="og:type" content="website" />
      {/* Twitter Cards */}
      <meta name="twitter:title" content="Boicotes | Boicote.App | Consumir é um ato político" />
      <meta name="twitter:description" content="Aqui você encontra e organiza seus boicotes online" />
    </Head>
    <BoicotesSection
      boicotesData={boicotesData}
      visitanteVotos={visitanteVotos}
      tweetsData={tweetsData}
      pagina={pagina}
      boicotesPorPagina={boicotesPorPagina}
      ordenarMaisVotados={ordenarMaisVotados}
    />
  </>
);

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pagina = ctx.query.pagina ? Number(ctx.query.pagina) : 1;
  const ordenarMaisVotados = ctx.query?.ordenar === 'mais_votados';
  const boicotesPorPagina = 5; // LIMITE DE BOICOTES POR PÁGINA

  const boicotesData = await getBoicotes(null, pagina, ordenarMaisVotados);
  const tweetsData = await getTweets('boicotem,boicote,boicotar');
  const visitanteVotos = await getVisitanteVotos(ctx.req?.headers.cookie);

  return {
    props: {
      boicotesData,
      visitanteVotos,
      tweetsData,
      pagina,
      boicotesPorPagina,
      ordenarMaisVotados,
    },
  };
};

export default Boicotes;
