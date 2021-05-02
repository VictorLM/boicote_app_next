import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const HeroSection: React.FC = () => (

  <section>

    <div className={`content ${styles.content_hero}`}>

      <div>
        <h1>
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

      <img src="assets/images/illustration.png" alt="Illustration" />

    </div>

  </section>

);

export default HeroSection;
