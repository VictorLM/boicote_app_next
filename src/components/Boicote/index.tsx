import React from 'react';
import Link from 'next/link';

import {
  FaArrowUp, FaArrowDown, FaRegCommentAlt,
} from 'react-icons/fa';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import styles from './styles.module.scss';

type LinkType = {
  link: string;
  confiavel: boolean | null;
}

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
  links?: LinkType[];
}

type BoicotePropTypes = {
  boicote: BoicoteType;
  compact: boolean;
  singleBoicote: boolean;
  voto: number | null;
}

const Boicote: React.FC<BoicotePropTypes> = ({
  boicote, singleBoicote, compact, voto,
}) => (

  <div className={`${styles.card_boicote} card`}>

    <div className={styles.boicote_left}>
      <button type="button" className={`${styles.vote_btn} ${voto ? styles.voted : ''}`}>
        <FaArrowUp title="Votor para cima" />
      </button>
      <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
      <button type="button" className={`${styles.vote_btn} ${voto === 0 ? styles.voted : ''}`}>
        <FaArrowDown title="Votor para baixo" />
      </button>
    </div>

    <div className={styles.boicote_right}>

      <header className={styles.boicote_header}>

        <div className={styles.smalls}>
          <small>
            {'# '}
            {boicote.tags.map((tag, key) => (
              `${tag}${boicote.tags.length !== key + 1 ? ',' : ''} `
            ))}
          </small>
          <small className={styles.posted_by}>
            {singleBoicote
              ? (`Postado por ${boicote.autor} em ${boicote.createdAt}`)
              : (`Postado em ${boicote.createdAt}`)}
          </small>
        </div>

        <h3>
          <a href={`/boicotes/${boicote.id}`}>
            {boicote.titulo}
            <small> Ver tudo</small>
          </a>
        </h3>

        <div className={styles.marca}>
          <BsArrowRight />
          <small>{boicote.marca}</small>
          <BsArrowLeft />
        </div>

      </header>

      <div className={styles.boicote_body}>

        {!compact && (
        <>
          <hr />
          <p className={styles.text}>
            {singleBoicote
              ? boicote.texto
              : `${boicote.texto.substr(0, 200)}...`}
          </p>
        </>
        )}

        {/* TODO LINK CONFIAVÉL - AJUSTAR API PRIMEIRO  */}
        {singleBoicote && (
          boicote.links?.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer">
              {link.link.substr(0, 100)}
              ...
            </a>
          ))

        )}

      </div>

      <footer className={styles.footer}>

        <div className={styles.footer_vote}>
          <button type="button" className={`${styles.vote_btn} ${voto ? styles.voted : ''}`}>
            <FaArrowUp title="Votor para cima" />
          </button>
          <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
          <button type="button" className={`${styles.vote_btn} ${voto === 0 ? styles.voted : ''}`}>
            <FaArrowDown title="Votor para baixo" />
          </button>
        </div>

        <div className={styles.footer_right}>

          <div className={styles.footer_comments_count}>
            <FaRegCommentAlt title="Comentários" />
            <span>
              {' '}
              {boicote.comentariosCount}
              {boicote.comentariosCount === 1 ? ' comentário' : ' comentários'}
            </span>
          </div>

          <div className={styles.footer_btns}>
            <button type="button">Comentar</button>
            <button type="button">Compartilhar</button>
            <button type="button">Denunciar</button>
          </div>

        </div>

      </footer>

    </div>

  </div>

);

export default Boicote;

/*
const Boicote: React.FC<BoicotePropTypes> = ({ boicote, boicoteUnico, voto }) => (

  <div className={`${styles.card_boicote} card`}>

    <div className={styles.boicote_left_div}>
      <button type="button" className={`vote-btn ${voto ? 'voted' : ''}`}>
        <FaArrowUp title="Votor para cima" />
      </button>
      <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
      <button type="button" className={`vote-btn ${voto === 0 ? 'voted' : ''}`}>
        <FaArrowDown title="Votor para baixo" />
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
          <FaAngry title="Emoji bravo" />
          <p className="font-size-small">
            {boicote.marca}
          </p>
        </div>

      </header>
      <hr />
      <p className={styles.p_boicote_text}>
        {boicoteUnico ? boicote.texto : `${boicote.texto.substr(0, 275)}...`}
      </p>
      <hr />
      <footer className={styles.footer_boicote}>
        <div className={styles.div_boicote_footer_mobile_left}>
          <button type="button" className={`vote-btn ${voto ? 'voted' : ''}`}>
            <FaArrowUp title="Votor para cima" />
          </button>
          <span>{boicote.cimaVotos - boicote.baixoVotos}</span>
          <button type="button" className={`vote-btn ${voto === 0 ? 'voted' : ''}`}>
            <FaArrowDown title="Votor para baixo" />
          </button>
        </div>
        <div className={styles.div_boicote_footer_mobile_right}>
          <div>
            <FaRegCommentAlt title="Comentários" />
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
*/
