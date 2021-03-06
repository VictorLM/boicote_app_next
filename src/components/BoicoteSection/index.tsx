import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, TimelineLite } from 'gsap';
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

gsap.registerPlugin(TimelineLite);

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

  const headingsBoicoteRef = useRef<HTMLDivElement>();
  const boicoteRef = useRef<HTMLDivElement>();
  const disclaimerRef = useRef<HTMLParagraphElement>();

  const timeline = new TimelineLite();

  useEffect(() => {
    headingsBoicoteRef.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0.2,
        delay: 0.2,
      });
    });

    boicoteRef.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0.2,
      });
    });

    timeline.to(disclaimerRef.current, {
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  return (

    <section className={`${styles.boicote_section} container`}>

      <div className={styles.content_flex}>

        <div className={styles.boicote}>

          <div className={styles.headings} ref={headingsBoicoteRef}>
            <h2 className="heading">Boicote</h2>
            <p className="sub-heading">
              <Link href="/boicotes">
                <a>&#8592; Voltar</a>
              </Link>
            </p>
          </div>

          <div className={styles.boicote_content} ref={boicoteRef}>

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

          <p className={styles.disclaimer} ref={disclaimerRef}>
            Informa????es cadastradas sob responsabilidade dos usu??rios.
            O Boicote.App n??o se responsabiliza por qualquer tipo de informa????es cadastradas.
            Caso n??o esteja de acordo com alguma informa????o,
            denuncie o boicote ou coment??rio que a cont??m para que analisemos.
          </p>

          <ComentarForm
            boicoteId={boicote.id}
            comentarios={comentariosState}
            setComentarios={setComentariosState}
          />

          <div className={styles.comentarios_headings}>
            <h3 className="heading" id="comentarios-header">Coment??rios</h3>
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
            <h3>Nenhum coment??rio. Seja o(a) primeiro(a) a comentar!</h3>
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
