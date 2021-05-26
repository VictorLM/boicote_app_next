import React, { useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { format, parseISO } from 'date-fns';

import api from '../services/api';

import visitanteCheck from '../middlewares/visitanteCheck';
import HeroSection from '../components/HeroSection';
import EntendaSection from '../components/EntendaSection';
import SobreSection from '../components/SobreSection';
import UltimosBoicotesSection from '../components/UltimosBoicotesSection';
import getTweets from '../utils/getTweets';

type BoicoteType = {
  id: string;
  titulo: string;
  marca: string;
  texto: string;
  tags: string[];
  createdAt: string;
  cimaVotos: number;
  baixoVotos: number;
  comentariosCount: number;
  autor: string;
}

type VisitanteVotosType = {
  boicoteId: string;
  cima: boolean;
}

type AuthorType = {
  id: string;
  name: string;
  userName: string;
  profileImageUrl: string;
};

type PublicMetricsType = {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
};

type TweetsType = {
  id: string;
  text: string;
  createdAt: string;
  author: AuthorType;
  publicMetrics: PublicMetricsType;
}

type HomePropsType = {
  boicotes: BoicoteType[];
  boicotesTotalCount: number;
  visitanteVotos: VisitanteVotosType[];
  tweets: TweetsType[];
}

const Home: React.FC<HomePropsType> = ({
  boicotes, boicotesTotalCount, visitanteVotos, tweets,
}) => {
  useEffect(() => {
    const visitantesCheckMiddleware = async () => {
      // CHECA COOKIE VISITANTEID
      await visitanteCheck();
    };
    visitantesCheckMiddleware();
  }, []);

  return (
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
        boicotes={boicotes}
        votos={visitanteVotos}
        tweets={tweets}
      />
    </>
  );
};

// Não estou usando SSR por conta dos votos
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data } = await api.get('/boicotes', {
      params: {
        limite: 3,
      },
    });

    const boicotes = data.boicotes.map((boicote) => ({
      id: boicote.id,
      titulo: boicote.titulo,
      marca: boicote.marca,
      texto: boicote.texto,
      tags: boicote.tags,
      createdAt: format(parseISO(boicote.createdAt), 'dd/MM/yyyy'),
      cimaVotos: Number(boicote.cimaVotos),
      baixoVotos: Number(boicote.baixoVotos),
      comentariosCount: Number(boicote.comentariosCount),
      autor: boicote.autor.nome,
      // links: boicote.links,
    }));

    const boicotesTotalCount = Number(data.boicotesTotalCount);

    const dataVisitanteVotos = await api.get('/visitantes/votos', {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    const visitanteVotos = dataVisitanteVotos.data;

    const tweets = await getTweets('boicote,boicotem,boicotar');

    return {
      props: {
        boicotes, boicotesTotalCount, visitanteVotos, tweets,
      },
    };

    // setVotos(response.data);
  } catch (err) {
    console.log(err); // TODO - MENSAGENS ERROS
    // setLoadingVotos(false);
    if (err.response) {
      // HOUVE RESPOSTA COM ERROR CODE
      const errors = err.response.data ?? []; // NÃO PEGA ERRO UNIQUE DO SEQUELIZE

      if (errors.length > 0 && typeof errors === 'object') { // PARA STRING NÃO DAR FATAL NO MAP
        // errors.map((error) => toast.error(error.message));
      } else {
        // toast.error(`Erro ao carregar seus votos... Code: ${err.response.status}.`);
      }
    } else if (err.request) {
      // NÃO HOUVE RESPOSTA
      // toast.error('Nossos servidores não estão respondendo. Tente novamente mais tarde.');
    }
    // console.error(err);
    return { props: {} };
  }
};

export default Home;
