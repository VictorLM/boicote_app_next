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
