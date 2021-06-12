import React from 'react';
import { ComentarioType } from '../../utils/getComentarios';

import styles from './styles.module.scss';

type ComentarioPropTypes = {
  comentario: ComentarioType;
  index: number;
}

const Comentario: React.FC<ComentarioPropTypes> = ({ comentario, index }) => {
  const teste = 'teste';

  return (

    <div className={`card ${styles.card}`}>
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
          {/* onClick={() => denunciar()} */}
          <button type="button" className="btn-black">Denunciar</button>
        </div>

      </div>
    </div>

  );
};

export default Comentario;
