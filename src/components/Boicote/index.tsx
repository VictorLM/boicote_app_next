import React from 'react';
import Link from 'next/link';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import styles from './styles.module.scss';

const Boicote: React.FC = () => (

  <div className={`${styles.card_boicote} card`}>

    <div className={styles.boicote_left_div}>
      <FaArrowUp className={styles.voted} />
      <span>0</span>
      <FaArrowDown />
    </div>

    <div className={styles.boicote_right_div}>
      <header>

        <div>
          <small> # Carrefour, Defesa Animal, Violência Animal</small>
          <h3>
            <Link href="/boicotes/id">
              Cachorro abandonado é envenenado e espancado por
              funcionário de Carrefour em Osasco
            </Link>
          </h3>
          <small>
            Postado por Victor Meireles em 06/04/2021 10:47
          </small>
        </div>

        <div className={styles.header_boicote_right}>
          <img src="/assets/images/angry.svg" alt="Emoji bravo" />
          <p className="font-size-small">Carrefour do Brasil Ltda.</p>
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
        <div>
          <img src="/assets/images/comment.svg" alt="Comentários" />
          <span className="font-size-small"> 1 comentário</span>
        </div>
        <Link href="/boicotes/id">
          <button type="button" className="btn-sm">Ver tudo</button>
        </Link>
      </footer>
    </div>

  </div>

);

export default Boicote;
