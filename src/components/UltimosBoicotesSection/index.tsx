import React from 'react';
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
  const teste = null;
  // console.log(visitanteVotos);

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
                voto={
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

          <p className={styles.footer_link}>
            <Link href="/boicotes">
              Ver todos &#8594;
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
