import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, TimelineLite } from 'gsap';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';
import { GetBoicotesType } from '../../utils/getBoicotes';
import { GetVisitanteVotosType, VisitanteVotoType } from '../../utils/getVisitanteVotos';

import styles from './styles.module.scss';
import BoicotesPagination from '../BoicotesPagination';

gsap.registerPlugin(TimelineLite);

type BoicotesSectionType = {
  boicotesData: GetBoicotesType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
  pagina: number;
  boicotesPorPagina: number;
  ordenarMaisVotados: boolean;
}

const BoicotesSection: React.FC<BoicotesSectionType> = ({
  boicotesData,
  visitanteVotos,
  tweetsData,
  pagina,
  boicotesPorPagina,
  ordenarMaisVotados,
}) => {
  const headingsBoicotesRef = useRef<HTMLDivElement>();
  const boicotesRef = useRef<HTMLDivElement>();

  const timeline = new TimelineLite();

  useEffect(() => {
    headingsBoicotesRef.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0.3,
        delay: 0.4,
      });
    });

    boicotesRef.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0.2,
      });
    });
  }, [boicotesData]);

  return (

    <section className={`${styles.boicotes_section} container`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.boicotes}>

          <div className={styles.headings} ref={headingsBoicotesRef}>
            <h2 className={`${styles.h2} heading`}>Boicotes</h2>
            <div className={styles.top_btns}>
              <button className={!ordenarMaisVotados ? styles.active : ''} type="button">
                <Link href="/boicotes">
                  <a>Mais recentes</a>
                </Link>
              </button>
              {/* TODO - QUERY ORDENAR MAIS VOTADOS SE PERDE QUANDO TROCA PÁGINA */}
              <button className={ordenarMaisVotados ? styles.active : ''} type="button">
                <Link href={{
                  pathname: '/boicotes',
                  query: { ordenar: 'mais_votados' },
                }}
                >
                  <a>Mais votados</a>
                </Link>
              </button>

              {boicotesData.boicotesTotalCount > boicotesPorPagina && (
                <BoicotesPagination
                  boicotesTotalCount={boicotesData.boicotesTotalCount}
                  boicotesPorPagina={boicotesPorPagina}
                  pagina={pagina}
                />
              )}

            </div>
          </div>

          <div className={styles.last_boicotes_content} id="last-boicotes" ref={boicotesRef}>

            {boicotesData.boicotes.map((boicote) => (

              <Boicote
                key={boicote.id}
                boicote={boicote}
                compact={false}
                singleBoicote={false}
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

            ))}

          </div>

          <div>
            {boicotesData.boicotesTotalCount > boicotesPorPagina && (
              <BoicotesPagination
                boicotesTotalCount={boicotesData.boicotesTotalCount}
                boicotesPorPagina={boicotesPorPagina}
                pagina={pagina}
              />
            )}
          </div>

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweetsData={tweetsData} />
        </div>

      </div>

    </section>

  );
};

export default BoicotesSection;
