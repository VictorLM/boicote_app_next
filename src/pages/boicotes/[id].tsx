import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import BoicoteSection from '../../components/BoicoteSection';

import getTweets, { GetTweetsType } from '../../utils/getTweets';
import getBoicote, { GetBoicoteType } from '../../utils/getBoicote';
import getVisitanteVotos, { GetVisitanteVotosType } from '../../utils/getVisitanteVotos';
import getComentarios, { GetComentariosType } from '../../utils/getComentarios';

type BoicotesPropsType = {
  boicoteData: GetBoicoteType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
  comentariosData: GetComentariosType;
}

const Boicotes: React.FC<BoicotesPropsType> = ({
  boicoteData,
  visitanteVotos,
  tweetsData,
  comentariosData,
}) => (
  <>
    <Head>
      <title>
        {boicoteData.boicote.titulo}
        {' '}
        | Boicote.App
      </title>
      {/* Open Graph */}
      <meta property="og:title" content={`${boicoteData.boicote.titulo} | Boicote.App`} />
      <meta property="og:description" content={`Boicote | ${boicoteData.boicote.titulo} | Boicote.App`} />
      <meta property="og:url" content={`https://boicote.app/boicotes/${boicoteData.boicote.id}`} />
      <meta property="og:type" content="article" />
      {/* Twitter Cards */}
      <meta name="twitter:title" content={`${boicoteData.boicote.titulo} | Boicote.App`} />
      <meta name="twitter:description" content={`Boicote | ${boicoteData.boicote.titulo} | Boicote.App`} />
    </Head>
    <BoicoteSection
      boicote={boicoteData.boicote}
      visitanteVotos={visitanteVotos}
      tweetsData={tweetsData}
      comentarios={comentariosData.comentarios}
    />
  </>
);

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const boicoteData = await getBoicote(String(ctx.params.id));
  // Enviando como query somente a primeira palavra do nome da marca
  const tweetsData = await getTweets(boicoteData.boicote.marca.split(' ')[0]);
  const visitanteVotos = await getVisitanteVotos(ctx.req?.headers.cookie);
  const comentariosData = await getComentarios(boicoteData.boicote.id);

  return {
    props: {
      boicoteData,
      visitanteVotos,
      tweetsData,
      comentariosData,
    },
  };
};

export default Boicotes;
