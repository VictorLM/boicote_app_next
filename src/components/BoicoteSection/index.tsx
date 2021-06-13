import React, { useState } from 'react';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';
import { BoicoteType } from '../../utils/getBoicote';
import { GetVisitanteVotosType, VisitanteVotoType } from '../../utils/getVisitanteVotos';
import { ComentarioType } from '../../utils/getComentarios';

import styles from './styles.module.scss';
import ComentarForm from '../ComentarForm';
import Comentario from '../Comentario';
import DenunciarModal from '../DenunciarModal';

type BoicoteSectionType = {
  boicote: BoicoteType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
  comentarios: ComentarioType[];
}

const BoicoteSection: React.FC<BoicoteSectionType> = ({
  boicote,
  visitanteVotos,
  tweetsData,
  comentarios,
}) => {
  const [comentariosState, setComentariosState] = useState(comentarios);
  //
  const [toggleDenunciarModal, setToggleDenunciarModal] = useState(false);
  const [denunciarComentarioId, setDenunciarComentarioId] = useState('');

  return (

    <section className={`${styles.boicote_section} container`}>

      <div className={styles.content_flex}>

        <div className={styles.boicote}>

          <div className={styles.headings}>
            <h2 className="heading">Boicote</h2>
            <p className="sub-heading">&nbsp;</p>
          </div>

          <div className={styles.boicote_content}>

            <Boicote
              boicote={boicote}
              compact={false}
              singleBoicote
              visitanteVoto={
                visitanteVotos.votos.findIndex(
                  (voto: VisitanteVotoType) => voto.boicoteId === boicote.id,
                ) !== -1
                  ? Number(visitanteVotos.votos[
                    visitanteVotos.votos.findIndex(
                      (voto: VisitanteVotoType) => voto.boicoteId === boicote.id,
                    )
                  ].cima)
                  : null
              }
            />

          </div>

          <p className={styles.disclaimer}>
            Informações cadastradas sob responsabilidade dos usuários.
            O Boicote.App não se responsabiliza por qualquer tipo de informações cadastradas.
            Caso não esteja de acordo com alguma informação,
            denuncie o boicote ou comentário que a contém para que analisemos.
          </p>

          <ComentarForm
            boicoteId={boicote.id}
            comentarios={comentariosState}
            setComentarios={setComentariosState}
          />

          <div className={styles.comentarios_headings}>
            <h3 className="heading" id="comentarios-header">Comentários</h3>
          </div>

          {comentariosState.length > 0 ? (
            comentariosState.map((comentario, index) => (
              <Comentario
                key={comentario.id}
                comentario={comentario}
                index={index + 1}
                setToggleDenunciarModal={setToggleDenunciarModal}
                setDenunciarComentarioId={setDenunciarComentarioId}
              />
            ))
          ) : (
            <h3>Nenhum comentário. Seja o(a) primeiro(a) a comentar!</h3>
          )}

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweetsData={tweetsData} />
        </div>

      </div>

      <DenunciarModal
        tipo="comentario"
        id={denunciarComentarioId}
        toggle={toggleDenunciarModal}
        setToggle={setToggleDenunciarModal}
      />

    </section>

  );
};

export default BoicoteSection;
