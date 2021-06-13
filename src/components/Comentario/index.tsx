import React from 'react';
import { ComentarioType } from '../../utils/getComentarios';

import styles from './styles.module.scss';

type ComentarioPropTypes = {
  comentario: ComentarioType;
  index: number;
  setToggleDenunciarModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDenunciarComentarioId: React.Dispatch<React.SetStateAction<string>>;
}

const Comentario: React.FC<ComentarioPropTypes> = ({
  comentario,
  index,
  setToggleDenunciarModal,
  setDenunciarComentarioId,

}) => {
  function setupDenuncia() {
    setToggleDenunciarModal(true);
    setDenunciarComentarioId(String(comentario.id));
  }

  return (

    <div className={`card ${styles.card}`} id={`comentario-${comentario.id}`}>
      <div className={`card-left ${styles.card_left}`}>
        <span>{`#${index}`}</span>
        <div />
      </div>
      <div className={styles.card_right}>

        <header className={styles.header}>
          <span>
            {comentario.autor}
          </span>
          <small>
            {`Postado em ${comentario.createdAt}`}
          </small>
        </header>

        <p className={styles.texto}>
          {comentario.comentario}
        </p>

        <div className={styles.btn_div}>
          <button
            type="button"
            className="btn-black"
            onClick={() => setupDenuncia()}
          >
            Denunciar
          </button>
        </div>

      </div>
    </div>

  );
};

export default Comentario;
