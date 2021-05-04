import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { format, parseISO } from 'date-fns';

import api from '../services/api';

import Boicote from '../components/Boicote';
import HeroSection from '../components/HeroSection';
import HowWorksSection from '../components/HowWorksSection';

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

type HomePropsType = {
  boicotes: BoicoteType[];
}

const Home: React.FC<HomePropsType> = ({ boicotes }) => (
  <>
    <Head>
      <title>Boicote.App | Consumir é um ato político</title>
      {/* meta tags - TODO */}
    </Head>

    <HeroSection />

    <HowWorksSection />

    <section>
      <div className="content">
        <h2 className="headers">Boicotes recentes</h2>
        <p className="sub-headers">
          Veja abaixo os últimos Boicotes cadastrados. Para visualizar todos,
          {' '}
          <Link href="/boicotes">
            clique aqui.
          </Link>
        </p>

        {boicotes.map((boicote) => (
          <Boicote
            key={String(boicote.id)}
            boicote={boicote}
            boicoteUnico={false}
          />
        ))}

      </div>
    </section>
  </>
);

// Não estou usando SSR por conta dos votos
export const getServerSideProps: GetServerSideProps = async () => {
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
    createdAt: format(parseISO(boicote.createdAt), 'dd/MM/yyyy HH:MM'),
    cimaVotos: Number(boicote.cimaVotos),
    baixoVotos: Number(boicote.baixoVotos),
    comentariosCount: Number(boicote.comentariosCount),
    autor: boicote.autor.nome,
  }));

  const dataVisitanteVotos = await api.get('/boicotes');

  const votosVisitante = dataVisitanteVotos.data;

  return { props: { boicotes, votosVisitante } };
};

export default Home;
