import React from 'react';
import Boicote from '../Boicote';
import TweetsPanel from '../TweetsPanel';

import styles from './styles.module.scss';

type BoicoteType = {
  id: string;
  titulo: string;
  marca: string;
  texto: string;
  tags: string[];
  createdAt: string;
  cimaVotos: number;
  baixoVotos: number;
  comentariosCount: number;
  autor: string;
}

type VotoType = {
  boicoteId: string;
  cima: boolean;
}

type AuthorType = {
  id: string;
  name: string;
  userName: string;
  profileImageUrl: string;
};

type PublicMetricsType = {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
};

type TweetsType = {
  id: string;
  text: string;
  createdAt: string;
  author: AuthorType;
  publicMetrics: PublicMetricsType;
}

type UltimosBoicotesType = {
  boicotes: BoicoteType[];
  votos: VotoType[];
  tweets: TweetsType[];
}

const UltimosBoicotesSection: React.FC<UltimosBoicotesType> = ({ boicotes, votos, tweets }) => {
  const teste = null;

  return (

    <section className={`${styles.last_boicotes_section} container full-vh`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.last_boicotes}>

          <div className={styles.headings}>
            <h2 className="heading">Últimos boicotes</h2>
            <p className="sub-heading">Veja os últimos boicotes cadastrados. Veja todos aqui.</p>
          </div>

          <div className={styles.last_boicotes_content}>

            {boicotes?.map((boicote) => (

              <Boicote
                key={boicote.id}
                boicote={boicote}
                compact
                singleBoicote={false}
                voto={votos.findIndex((voto) => voto.boicoteId === boicote.id) !== -1
                  ? Number(votos[votos.findIndex((voto) => voto.boicoteId === boicote.id)].cima)
                  : null}
              />

            ))}

          </div>

          <p>Ver todos boicotes</p>

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweets={tweets} />
        </div>

      </div>

    </section>

  );
};

export default UltimosBoicotesSection;
