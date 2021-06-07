import React, { useState } from 'react';

import {
  FaArrowUp, FaArrowDown, FaRegCommentAlt,
} from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import votar from './methods';
import { BoicoteType } from '../../utils/getBoicotes';

import styles from './styles.module.scss';

type BoicotePropTypes = {
  boicote: BoicoteType;
  compact: boolean;
  singleBoicote: boolean;
  visitanteVoto: number | null;
  visitanteCookie: string;
}

const Boicote: React.FC<BoicotePropTypes> = ({
  boicote, singleBoicote, compact, visitanteVoto, visitanteCookie,
}) => {
  //
  const [visitanteVote, setVisitanteVote] = useState(visitanteVoto);
  const [boicoteVotosCount, setBoicoteVotosCount] = useState(boicote.votos);

  return (

    <div className={`${styles.card_boicote} card`}>

      <div className={`card-left ${styles.boicote_left}`}>
        <div className={styles.left_vote}>
          <button
            type="button"
            className={`${styles.vote_btn} ${visitanteVote ? styles.voted : ''}`}
            onClick={() => votar(
              boicote.id,
              1,
              visitanteCookie,
              visitanteVote,
              setVisitanteVote,
              boicoteVotosCount,
              setBoicoteVotosCount,
            )}
          >
            <FaArrowUp title="Votar para cima" />
          </button>
          <span>{boicoteVotosCount}</span>
          <button
            type="button"
            className={`${styles.vote_btn} ${visitanteVote === 0 ? styles.voted : ''}`}
            onClick={() => votar(
              boicote.id,
              0,
              visitanteCookie,
              visitanteVote,
              setVisitanteVote,
              boicoteVotosCount,
              setBoicoteVotosCount,
            )}
          >
            <FaArrowDown title="Votar para baixo" />
          </button>
        </div>
        <div style={compact ? { display: 'none ' } : {}} />
        <span className={styles.comments_count} style={compact ? { display: 'flex ' } : {}}>
          <FaRegCommentAlt title="Comentários" />
          {' '}
          {boicote.comentariosCount}
        </span>
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
              {' '}
              <small>Ver tudo</small>
            </a>
          </h3>

          <div className={styles.marca}>
            <BsArrowRight />
            <small>{boicote.marca}</small>
            <BsArrowLeft />
          </div>

        </header>

        <hr style={compact ? { display: 'none' } : {}} />

        {!compact && (
        <div className={styles.boicote_body}>
          <p className={styles.text}>
            {singleBoicote
              ? boicote.texto
              : `${boicote.texto.substr(0, 200)}...`}
          </p>

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
        )}

        <footer className={`${styles.footer} ${compact ? styles.footer_compact : ''}`}>

          <div className={styles.footer_vote}>
            <button
              type="button"
              className={`${styles.vote_btn} ${visitanteVote ? styles.voted : ''}`}
              onClick={() => votar(
                boicote.id,
                1,
                visitanteCookie,
                visitanteVote,
                setVisitanteVote,
                boicoteVotosCount,
                setBoicoteVotosCount,
              )}
            >
              <FaArrowUp title="Votar para cima" />
            </button>
            <span>{boicoteVotosCount}</span>
            <button
              type="button"
              className={`${styles.vote_btn} ${visitanteVote === 0 ? styles.voted : ''}`}
              onClick={() => votar(
                boicote.id,
                0,
                visitanteCookie,
                visitanteVote,
                setVisitanteVote,
                boicoteVotosCount,
                setBoicoteVotosCount,
              )}
            >
              <FaArrowDown title="Votar para baixo" />
            </button>
          </div>

          <div className={`${styles.footer_right} ${compact ? styles.footer_right_compact : ''}`}>

            {!compact
              ? (
                <>
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
                </>

              ) : (
                <>
                  <div className={styles.footer_comments_count}>
                    <FaRegCommentAlt title="Comentários" />
                    <span>
                      {boicote.comentariosCount}
                      {boicote.comentariosCount === 1 ? ' comentário' : ' comentários'}
                    </span>
                  </div>

                  <div className={styles.footer_btns}>
                    <button type="button">Ver tudo</button>
                  </div>
                </>
              )}

          </div>

        </footer>

      </div>

    </div>

  );
};

export default Boicote;
