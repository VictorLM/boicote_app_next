import React, { useEffect } from 'react';
import Link from 'next/link';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';
import { GetBoicotesType } from '../../utils/getBoicotes';
import { GetVisitanteVotosType, VisitanteVotoType } from '../../utils/getVisitanteVotos';

import styles from './styles.module.scss';

type UltimosBoicotesType = {
  boicotesData: GetBoicotesType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
}

const UltimosBoicotesSection: React.FC<UltimosBoicotesType> = ({
  boicotesData, visitanteVotos, tweetsData,
}) => {
  useEffect(() => {
    const boicotes = Array.from(document.getElementsByClassName('boicote') as HTMLCollectionOf<HTMLElement>);
    for (let i = 0; i < boicotes.length; i += 1) {
      boicotes[i].style.opacity = '1';
    }
  }, []);

  return (

    <section className={`${styles.last_boicotes_section} container full-vh`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.last_boicotes}>

          <div className={styles.headings}>
            <h2 className="heading">Últimos boicotes</h2>
            <p className="sub-heading">
              Veja os últimos boicotes cadastrados.
              {' '}
              <Link href="/boicotes">
                Ver todos
              </Link>
              .
            </p>
          </div>

          <div className={styles.last_boicotes_content} id="last-boicotes">

            {boicotesData.boicotes.map((boicote) => (

              <Boicote
                key={boicote.id}
                boicote={boicote}
                compact
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

          <p>
            <Link href="/boicotes">
              <a>Ver todos &#8594;</a>
            </Link>
          </p>

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweetsData={tweetsData} />
        </div>

      </div>

    </section>

  );
};

export default UltimosBoicotesSection;
