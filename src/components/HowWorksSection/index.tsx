import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const HowWorksSection: React.FC = () => (

  <section className={styles.how_works}>

    <div className={`content ${styles.content_how_works}`}>

      <div className={styles.headers}>
        <h2 className="headers">Como funciona?</h2>
        <p className="sub-headers">Aqui você encontra e organiza seus boicotes</p>
      </div>

      <div className={styles.cards}>

        <div className={`card ${styles.card}`}>
          <header>
            <img src="/assets/images/like.svg" alt="Joinha" />
            <h3>Interaja</h3>
          </header>
          <p className="font-size-small">
            Interaja com a comunidade votando e comentando nos
            {' '}
            <Link href="/boicotes">boicotes</Link>
            . Use as setas ao lado esquerdo do título. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className={`card ${styles.card}`}>
          <header>
            <img src="/assets/images/plus.svg" alt="Adicionar" />
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

        <div className={`card ${styles.card}`}>
          <header>
            <img src="/assets/images/megaphone.svg" alt="Megafone" />
            <h3>Compartilhe</h3>
          </header>
          <p className="font-size-small">
            Compartilhe os boicotes nas redes sociais para ter um maior alcance e engajamento.
            Utilize o link Compartilhar, localizado à direita do rodapé dos boicotes.
          </p>
        </div>

        <div className={`card ${styles.card}`}>
          <header>
            <img src="/assets/images/flag.svg" alt="Bandeira" />
            <h3>Denuncie</h3>
          </header>
          <p className="font-size-small">
            Denuncie boicotes e comentários inapropriados utilizando o link Denunciar,
            localizado à direita do rodapé tanto dos boicotes quanto dos comentários.
            Sua ajuda será  muito bem-vinda.
          </p>
        </div>

      </div>

      <p className={`font-size-small ${styles.p_footer}`}>
        Boicote empresas e marcas com seu poder de compra.
        Não de lucros para quem apoia, pratica ou corrobora
        com atos e ideias nocivas, fake news, discurso de ódio, etc.
        Pratique o consumo consciente.
      </p>

    </div>

  </section>

);

export default HowWorksSection;
