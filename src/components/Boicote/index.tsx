import React from 'react';
import Link from 'next/link';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import styles from './styles.module.scss';

const Boicote: React.FC = () => (

  <div className={`${styles.card_boicote} card`}>

    <div className={styles.boicote_left_div}>
      <button type="button" className="vote-btn voted">
        <FaArrowUp />
      </button>
      <span>0</span>
      <button type="button" className="vote-btn">
        <FaArrowDown />
      </button>
    </div>

    <div className={styles.boicote_right_div}>
      <header>

        <div className={styles.header_boicote_left}>
          <small> # Carrefour, Defesa Animal, Violência Animal</small>
          <h3>
            <Link href="/boicotes/id">
              Cachorro abandonado é envenenado e espancado por
              funcionário de Carrefour em Osasco
            </Link>
          </h3>
          <small className={styles.posted_by}>
            Postado por Victor Meireles em 06/04/2021 10:47
          </small>
        </div>

        <div className={styles.header_boicote_right}>
          <img src="/assets/images/angry.svg" alt="Emoji bravo" />
          <p className="font-size-small">Carrefour do Brasil Ltda.</p>
        </div>

      </header>
      <hr />
      <p className={styles.p_boicote_text}>
        Um cachorro abandonado morreu após ser envenenado e espancado por um
        funcionário de uma loja da rede do supermercado Carrefour, em Osasco,
        na Grande São Paulo, no dia 30/11/2018, segundo relato de ativistas...
      </p>
      <hr />
      <footer className={styles.footer_boicote}>
        <div className={styles.div_boicote_footer_mobile_left}>
          <button type="button" className="vote-btn voted">
            <FaArrowUp />
          </button>
          <span>0</span>
          <button type="button" className="vote-btn">
            <FaArrowDown />
          </button>
        </div>
        <div className={styles.div_boicote_footer_mobile_right}>
          <div>
            <img src="/assets/images/comment.svg" alt="Comentários" />
            <span className="font-size-small"> 1 comentário</span>
          </div>
          <Link href="/boicotes/id">
            <button type="button" className="btn-sm">Ver tudo</button>
          </Link>
        </div>
      </footer>
    </div>

  </div>

);

export default Boicote;
