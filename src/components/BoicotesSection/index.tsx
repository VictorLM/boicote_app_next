import React from 'react';
import Link from 'next/link';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';
import { GetBoicotesType } from '../../utils/getBoicotes';
import { GetVisitanteVotosType, VisitanteVotoType } from '../../utils/getVisitanteVotos';

import styles from './styles.module.scss';
import BoicotesPagination from '../BoicotesPagination';

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
  const teste = 'teste';

  return (

    <section className={`${styles.boicotes_section} container full-vh`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.boicotes}>

          <div className={styles.headings}>
            <h2 className="heading">Boicotes</h2>
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

          <div className={styles.last_boicotes_content} id="last-boicotes">

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
