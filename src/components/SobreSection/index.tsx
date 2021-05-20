import React, { useRef, useState } from 'react';

import { FaInfo, FaBook } from 'react-icons/fa';
import SocialIcons from '../SocialIcons';

import styles from './styles.module.scss';

const EntendaSection: React.FC = () => {
  const ulRefs = useRef<HTMLUListElement>();

  return (

    <section className={`${styles.sobre} container full-vh`} id="sobre">

      <div className={styles.headings}>
        <h2 className="heading">Sobre</h2>
        <p className={`sub-heading ${styles.sub_heading}`}>Conheça um pouco mais sobre o projeto.</p>
      </div>

      <div className={styles.content_flex}>

        <div className={`card ${styles.card}`}>
          <div className={`card-left ${styles.card_left}`}>
            <FaInfo />
            <div />
          </div>
          <div className={styles.card_right}>
            <p>
              O Boicote.App foi desenvolvido com o objetivo de centralizar os boicotes na internet.
              Com o sistema de votos, a comunidade pode validar cada boicote e também interagir
              nos comentários. Também há um sistema de denúncias, para manter a comunidade mais
              saudável e as informações filtradas.
            </p>
            <br />
            <p>
              Consumir é um ato político. Pratique o consumo consciente.
            </p>
            <br />
            <p>
              Desenvolvido e mantido por mim, Victor Meireles.
              Você pode me encontrar no Twitter em
              {' '}
              <a href="https://twitter.com/IAmDinamite/" target="_blank" rel="noreferrer">@IAmDinamite</a>
              {', '}
              ou através do e-mail
              {' '}
              <a href="mailto:boicoteapp@gmail.com">boicoteapp@gmail.com</a>
            </p>
            <br />
            <p>
              Esse é meu primeiro projeto desenvolvido em Java Script.
              Back-end em NodeJS + Express e front-end em NextsJS / React.
            </p>
            <br />
            <p>
              Boicote.App é um projeto independente e sem fins lucrativos. Por favor, não quebre-o.
            </p>
            <br />
            <p>
              Nos acompanhe nas redes sociais:
            </p>
            <br />
            <div className={styles.social}>
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className={`card ${styles.card} ${styles.card_dic}`}>
          <div className={`card-left ${styles.card_left}`}>
            <FaBook />
            <div />
          </div>
          <div className={styles.card_right}>
            <h3>
              <a href="https://www.google.com/search?q=dicion%C3%A1rio&oq=dici&ie=UTF-8#dobs=boicote" target="_blank" rel="noreferrer">boi·co·te</a>
            </h3>
            <p>substantivo masculino</p>
            <p>
              1.  recusa coletiva de trabalho para determinada indústria
              ou estabelecimento comercial, ou inibição de transações com eles.
            </p>
            <br />
            <p>
              2.  veto a quaisquer relações com indivíduo ou grupo a que(m)
              se queira punir ou constranger a algo.
            </p>
            <br />
            <p>
              3.  esquiva coletiva ou individual a qualquer atividade a
              que se tenha sido convidado.
            </p>
            <br />
            <p>
              4.  POLÍTICA (CIÊNCIA POLÍTICA • IDEOLOGIA)
            </p>
            <p>
              recusa de um grupo a participar de determinado ato ou manifestação pública.
            </p>
            <br />
            <p>
              Origem: ⊙ ETIM ing.
              {' '}
              <i>boycott</i>
              {' '}
              &apos;ato ou efeito de recusar-se a trabalhar ou cooperar&apos;,
              do antr.
              {' '}
              <a href="https://pt.wikipedia.org/wiki/Charles_Boycott" target="_blank" rel="noreferrer">Charles C. Boycott</a>
              {' '}
              (1832-1897).
            </p>
            <br />
            <p>
              <a href="https://languages.oup.com/google-dictionary-pt/" target="_blank" rel="noreferrer">Definições de Oxford Languages</a>
            </p>
          </div>
        </div>

      </div>

    </section>

  );
};

export default EntendaSection;

/*
    <div className={`content full-height-landscape ${styles.content_how_works}`}>

      <div className={styles.cards}>

        <div className={`${styles.headers} zoom-hover`}>
          <h2 className="headers zoom-hover">Como funciona?</h2>
          <p className={`sub-headers ${styles.p_sub_header}`}>
            Aqui você encontra e organiza seus boicotes
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegThumbsUp title="Joinha" />
            </div>
            <h3>Interaja</h3>
          </header>
          <p className="font-size-small">
            Interaja com a comunidade votando e comentando nos
            {' '}
            <Link href="/boicotes">boicotes</Link>
            . Para votar, use as setas ao lado esquerdo dos títulos. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegPlusSquare title="Adicionar" />
            </div>
            <h3>Crie</h3>
          </header>
          <p className="font-size-small">
            Você também pode criar seu próprio boicote e interagir
            com a comunidade. É só preencher
            {' '}
            <Link href="/boicotes">esse formulário</Link>
            {' '}
            , confirmar por e-mail e pronto! Seu boicote já estará online.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaBullhorn title="Megafone" />
            </div>
            <h3>Compartilhe</h3>
          </header>
          <p className="font-size-small">
            Compartilhe os boicotes nas redes sociais para ter um maior alcance e engajamento.
            Utilize o link Compartilhar, localizado à direita do rodapé dos boicotes.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegFlag title="Bandeira" />
            </div>
            <h3>Denuncie</h3>
          </header>
          <p className="font-size-small">
            Denuncie boicotes e comentários inapropriados utilizando o link Denunciar,
            localizado à direita do rodapé tanto dos boicotes quanto dos comentários.
            Sua ajuda será  muito bem-vinda.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegCheckSquare title="Bandeira" />
            </div>
            <h3>Pratique</h3>
          </header>
          <p className="font-size-small">
            Boicote marcas com seu poder de compra.
            Não de lucros para quem apoia, pratica ou corrobora
            com atos e ideias nocivas, fake news, discurso de ódio, etc.
            Pratique o consumo consciente.
          </p>
        </div>

      </div>

    </div>
    */
