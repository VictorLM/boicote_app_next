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

type HomePropsType = {
  boicotes: BoicoteType[];
  boicotesTotalCount: number;
  visitanteVotos: VisitanteVotosType[];
}

const Home: React.FC<HomePropsType> = ({ boicotes, boicotesTotalCount, visitanteVotos }) => {
  const tweets = [
    {
      name: 'Boicote.App',
      photo: 'url to photo',
      postedAt: '21/05/2021',
      tweet: 'Teste de tweet. Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.',
      comments: 5,
      likes: 12,
      shares: 3,
    },
    {
      name: 'Boicote.App',
      photo: 'url to photo',
      postedAt: '21/05/2021',
      tweet: 'Teste de tweet. Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.',
      comments: 5,
      likes: 12,
      shares: 3,
    },
    {
      name: 'Boicote.App',
      photo: 'url to photo',
      postedAt: '21/05/2021',
      tweet: 'Teste de tweet. Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.Teste de tweet.',
      comments: 5,
      likes: 12,
      shares: 3,
    },
  ];

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
        tweets={tweets}
      />

      {/* <HeroSection timeline={timeline} />

      <HowWorksSection />

      <section>
        <div className="content">
          <div className="zoom-hover">
            <h2 className="headers">Boicotes recentes</h2>
            <p className="sub-headers">
              Veja abaixo os últimos Boicotes cadastrados. Para visualizar todos,
              {' '}
              <Link href="/boicotes">
                clique aqui.
              </Link>
            </p>
          </div>

          {boicotes?.map((boicote) => ( // TODO CHECAR SE VAZIO
            <Boicote
              key={String(boicote.id)}
              boicote={boicote}
              boicoteUnico={false}
              voto={visitanteVotos.findIndex((voto) => voto.boicoteId === boicote.id) !== -1
                ? Number(
                  visitanteVotos[
                    visitanteVotos.findIndex((voto) => voto.boicoteId === boicote.id)
                  ].cima,
                )
                : null}
            />
          ))}

          <p>
            <Link href="/boicotes">Ver todos os boicotes &#8594;</Link>
          </p>
        </div>
      </section> */}
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

    // console.log(ctx.req.headers.cookie);

    return { props: { boicotes, boicotesTotalCount, visitanteVotos } };

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
