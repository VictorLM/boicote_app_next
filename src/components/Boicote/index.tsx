import React, { useState } from 'react';

import {
  FaArrowUp, FaArrowDown, FaRegCommentAlt,
} from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import votar from './methods';
import { BoicoteType } from '../../utils/getBoicotes';

import styles from './styles.module.scss';

type BoicotePropTypes = {
  boicote: BoicoteType;
  compact: boolean;
  singleBoicote: boolean;
  visitanteVoto: number | null;
}

const Boicote: React.FC<BoicotePropTypes> = ({
  boicote, singleBoicote, compact, visitanteVoto,
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
              visitanteVote,
              setVisitanteVote,
              boicoteVotosCount,
              setBoicoteVotosCount,
            )}
          >
            <FaArrowDown title="Votar para baixo" />
          </button>

          {singleBoicote && (
            <span className={`${styles.comments_count} ${styles.comments_count_left}`}>
              <FaRegCommentAlt title="Comentários" />
              &nbsp;&nbsp;
              {boicote.comentariosCount}
            </span>
          )}

        </div>

        <div className={styles.left_line_div} style={{ display: compact && 'none' }} />

        <span className={styles.gamb_padding_left} style={{ display: !singleBoicote && 'none' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>

        <p className={styles.flex}>

          {singleBoicote ? (
            <>
              <button type="button" className={`btn-white ${styles.left_btns}`}>Comentar</button>
              <button type="button" className={`btn-white ${styles.left_btns}`}>Compartilhar</button>
              <button type="button" className={`btn-white ${styles.left_btns}`}>Denunciar</button>
            </>
          ) : (
            <>
              <span className={styles.comments_count}>
                <FaRegCommentAlt title="Comentários" />
                &nbsp;&nbsp;
                {boicote.comentariosCount}
                &nbsp;
                <span className={styles.comentario_text}>
                  {` ${boicote.comentariosCount === 1 ? ' Comentário' : ' Comentários'}`}
                </span>
              </span>

              <Link href={`/boicotes/${boicote.id}`}>
                <button className={`btn-white ${styles.ver_tudo_btn}`} type="button">Ver tudo</button>
              </Link>
            </>
          )}

        </p>

      </div>

      <div className={styles.boicote_right}>

        <header className={styles.boicote_header}>

          <div className={styles.smalls}>
            <small>
              {'# '}
              {boicote.tags?.map((tag, key) => (
                <span key={tag}>
                  {tag}
                  {boicote.tags.length !== key + 1 ? ', ' : ''}
                </span>
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
              {compact && <small>Ver tudo</small>}
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
              : `${boicote.texto.substr(0, 155)}...`}

            <Link href={`/boicotes/${boicote.id}`}>
              <a style={{ display: singleBoicote && 'none' }}>
                <small> Ver tudo &#8594;</small>
              </a>
            </Link>
          </p>

        </div>
        )}
        {singleBoicote && <hr />}
        {/* TODO LINK CONFIAVÉL - AJUSTAR API PRIMEIRO  */}
        {singleBoicote && (
        <div className={styles.links}>
          {boicote.links?.map((link) => (
            <a href={link.link} key={link.link.substr(0, 80)} target="_blank" rel="noreferrer">
              {link.link.substr(0, 80)}
              ...
            </a>
          ))}
        </div>
        )}

        {singleBoicote && (
          <footer className={styles.footer}>
            <div className={styles.footer_comments_count}>
              <FaRegCommentAlt title="Comentários" />
              <span style={{ display: 'contents' }}>
                &nbsp;&nbsp;
                {boicote.comentariosCount}
                &nbsp;
                <span className={styles.comment_text}>
                  {boicote.comentariosCount === 1 ? ' comentário' : ' comentários'}
                </span>
              </span>
            </div>

            <div className={styles.footer_btns}>
              <button className="btn-white" type="button">Comentar</button>
              <button className="btn-white" type="button">Compartilhar</button>
              <button className="btn-white" type="button">Denunciar</button>
            </div>
          </footer>
        )}

      </div>

    </div>

  );
};

export default Boicote;
