import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const HeroSection: React.FC = () => (

  <section>

    <div className={`content ninety-height-landscape  ${styles.content_hero}`}>

      <div className={styles.left}>
        <h1 className="zoom-hover">
          Consumir é um
          {' '}
          <span>ato político!</span>
        </h1>
        <p className="font-size-2">Pratique o consumo consciente</p>

        <Link href="/criar-boicote">
          <button type="button" className="btn-cta shadow font-size-2">
            <img src="assets/images/megaphone-rotated.svg" alt="Megaphone" />
            <text>Criar Boicote</text>
          </button>
        </Link>
      </div>

      <div className={styles.right}>
        <img
          className={`hero-illustration zoom-hover ${styles.illustration}`}
          src="assets/images/illustration.png"
          alt="Ilustração"
        />
        <img
          className={`hero-illustration illustration-animation ${styles.illustration_animation}`}
          src="assets/images/illustration_animation.png"
          alt="Animação ilustração"
        />
      </div>

    </div>

  </section>

);

export default HeroSection;
