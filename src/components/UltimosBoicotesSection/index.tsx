import React from 'react';
import Boicote from '../Boicote';

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

type UltimosBoicotesType = {
  boicotes: BoicoteType[];
  tweets: any; // TODO
}

const UltimosBoicotesSection: React.FC<UltimosBoicotesType> = ({ boicotes, tweets }) => {
  const teste = null;
  // console.log(boicotes);
  return (

    <section className={`${styles.last_boicotes_section} container full-vh`} id="ultimos-boicotes">

      <div className={styles.content_flex}>

        <div className={styles.last_boicotes}>

          <div className={styles.headings}>
            <h2 className="heading">Últimos boicotes</h2>
            <p className="sub-heading">Veja os últimos boicotes cadastrados. Veja todos aqui.</p>
          </div>

          <div className={styles.last_boicotes_content}>
            {/* {JSON.stringify(boicotes)} */}
            <Boicote
              boicote={boicotes[2]}
              compact={false}
              singleBoicote
              voto={1} /* TODO */
            />
          </div>

        </div>

        <div className={styles.tweets}>

          <div className={styles.headings}>
            <h2 className="heading">Tweets</h2>
            <p className="sub-heading">Veja o que está acontecendo no Twitter.</p>
          </div>

          <div className={`card ${styles.tweets_content}`}>
            Teste
          </div>

        </div>

      </div>

    </section>

  );
};

export default UltimosBoicotesSection;
