import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Boicote.App | Consumir é um ato político</title>
      {/* meta tags - TODO */}
    </Head>

    <section className="hero">

      <div className="container">

        <div className="left-col">
          <h1>
            Consumir é um
            <span>ato político!</span>
          </h1>
          <p className="sub-header-hero">Pratique o consumo consciente</p>

          <a href="/criar-boicote" className="hero-cta-link">
            <button type="button" className="btn-orange">Criar Boicote</button>
          </a>

        </div>

        <img src="assets/images/illustration.svg" className="hero-img" alt="Illustration" />

      </div>

    </section>

    <section className="how-works">

      <div className="container">

        <h2>Como funciona?</h2>
        <p>Aqui você encontra e organiza seus boicotes</p>

        <div className="card card-how-works">
          <img src="/assets/images/like.svg" alt="Joinha" />
          <h3>Interaja</h3>
          <p>
            Interaja com a comunidade votando e comentando nos boicotes.
            Use as setas ao lado esquerdo do título. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className="card card-how-works">
          <img src="/assets/images/like.svg" alt="Curtir" />
          <h3>Interaja</h3>
          <p>
            Interaja com a comunidade votando e comentando nos boicotes.
            Use as setas ao lado esquerdo do título. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className="card card-how-works">
          <img src="/assets/images/like.svg" alt="Curtir" />
          <h3>Interaja</h3>
          <p>
            Interaja com a comunidade votando e comentando nos boicotes.
            Use as setas ao lado esquerdo do título. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className="card card-how-works">
          <img src="/assets/images/like.svg" alt="Curtir" />
          <h3>Interaja</h3>
          <p>
            Interaja com a comunidade votando e comentando nos boicotes.
            Use as setas ao lado esquerdo do título. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <p>
          Boicote empresas e marcas com seu poder de compra.
          Não de lucros para quem apoia, pratica ou corrobora
          com atos e ideias nocivas, fake news, discurso de ódio, etc.
          Pratique o consumo consciente.
        </p>

      </div>

    </section>

    <section className="boicotes">

      <div className="container">

        <h2>Boicotes recentes</h2>
        <p>
          Veja abaixo os últimos Boicotes cadastrados. Para visualizar todos,
          <a href="/boicotes">clique aqui.</a>
        </p>

        <div className="card card-boicote">

          <div className="card-boicote-left">
            <img src="/assets/images/up.svg" alt="Seta para cima" />
            <span>0</span>
            <img src="/assets/images/down.svg" alt="Seta para baixo" />
          </div>

          <div className="card-boicote-right">
            <header>

              <div className="header-boicote-left">
                <small>Carrefour, Defesa Animal, Violência Animal</small>
                <h3>
                  Cachorro abandonado é envenenado e espancado por
                  funcionário de Carrefour em Osasco
                </h3>
                <small>Postado por Victor Meireles em 06/04/2021 10:47</small>
              </div>

            </header>
            <hr />
            <p>
              Um cachorro abandonado morreu após ser envenenado e espancado por um
              funcionário de uma loja da rede do supermercado Carrefour, em Osasco,
              na Grande São Paulo, no dia 30/11/2018, segundo relato de ativistas...
            </p>
            <hr />
            <footer>
              <div className="comment-count">
                <img src="/assets/images/comment.svg" alt="Balão de conversa" />
                <span>1 comentário</span>
              </div>
              <a href="/boicotes/id">
                <button type="button">Ver tudo</button>
              </a>
            </footer>
          </div>

        </div>

      </div>

    </section>
  </>
);

export default Home;
