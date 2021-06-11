import React from 'react';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';
import { BoicoteType } from '../../utils/getBoicote';
import { GetVisitanteVotosType, VisitanteVotoType } from '../../utils/getVisitanteVotos';

import styles from './styles.module.scss';

type BoicoteSectionType = {
  boicote: BoicoteType;
  visitanteVotos: GetVisitanteVotosType;
  tweetsData: GetTweetsType;
}

const BoicoteSection: React.FC<BoicoteSectionType> = ({
  boicote,
  visitanteVotos,
  tweetsData,
}) => {
  const teste = 'teste';

  return (

    <section className={`${styles.boicote_section} container`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.boicote}>

          <div className={styles.headings}>
            <h2 className="heading">Boicote</h2>
            <p className="sub-heading">&nbsp;</p>
          </div>

          <div className={styles.last_boicotes_content} id="last-boicotes">

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

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweetsData={tweetsData} />
        </div>

      </div>

    </section>

  );
};

export default BoicoteSection;
