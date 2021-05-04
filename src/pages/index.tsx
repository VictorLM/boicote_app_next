import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Boicote from '../components/Boicote';
import HeroSection from '../components/HeroSection';
import HowWorksSection from '../components/HowWorksSection';

const Home: React.FC = () => (
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
        <Boicote />
        <Boicote />
        <Boicote />
      </div>
    </section>
  </>
);

export default Home;
