import React from 'react';
import Link from 'next/link';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import styles from './styles.module.scss';

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

type BoicotePropTypes = {
  boicote: BoicoteType;
  boicoteUnico: boolean;
}

const Boicote: React.FC<BoicotePropTypes> = ({ boicote, boicoteUnico }) => (

  <div className={`${styles.card_boicote} card`}>

    <div className={styles.boicote_left_div}>
      <button type="button" className="vote-btn voted">
        <FaArrowUp />
      </button>
      <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
      <button type="button" className="vote-btn">
        <FaArrowDown />
      </button>
    </div>

    <div className={styles.boicote_right_div}>
      <header>

        <div className={styles.header_boicote_left}>
          <small>
            {'# '}
            {boicote.tags.map((tag, key) => (
              `${tag}${boicote.tags.length !== key + 1 ? ',' : ''} `
            ))}
          </small>
          <h3>
            <Link href={`/boicotes/${boicote.id}`}>
              {boicote.titulo}
            </Link>
          </h3>
          <small className={styles.posted_by}>
            {'Postado por '}
            {boicote.autor}
            {' em '}
            {boicote.createdAt}
          </small>
        </div>

        <div className={styles.header_boicote_right}>
          <p className="font-size-small">
            {boicote.marca}
          </p>
          <img src="/assets/images/angry.svg" alt="Emoji bravo" />
        </div>

      </header>
      <hr />
      <p className={styles.p_boicote_text}>
        {boicoteUnico ? boicote.texto : `${boicote.texto.substr(0, 275)}...`}
      </p>
      <hr />
      <footer className={styles.footer_boicote}>
        <div className={styles.div_boicote_footer_mobile_left}>
          <button type="button" className="vote-btn voted">
            <FaArrowUp />
          </button>
          <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
          <button type="button" className="vote-btn">
            <FaArrowDown />
          </button>
        </div>
        <div className={styles.div_boicote_footer_mobile_right}>
          <div>
            <img src="/assets/images/comment.svg" alt="Comentários" />
            <span className="font-size-small">
              {' '}
              {boicote.comentariosCount}
              {boicote.comentariosCount === 1 ? ' comentário' : ' comentários'}
            </span>
          </div>
          <Link href={`/boicotes/${boicote.id}`}>
            <button type="button" className="btn-sm">Ver tudo</button>
          </Link>
        </div>
      </footer>
    </div>

  </div>

);

export default Boicote;
