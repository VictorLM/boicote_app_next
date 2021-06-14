import React from 'react';
import TweetsPanel from '../TweetsPanel';

import { GetTweetsType } from '../../utils/getTweets';

import styles from './styles.module.scss';
import BoicotarForm from '../BoicotarForm';

type BoicotarSectionType = {
  tweetsData: GetTweetsType;
}

const BoicotarSection: React.FC<BoicotarSectionType> = ({ tweetsData }) => {
  const teste = 'teste';
  return (

    <section className={`${styles.boicote_section} container`}>

      <div className={styles.content_flex}>

        <div className={styles.boicotar_form}>

          <div className={styles.headings}>
            <h2 className="heading">Boicotar</h2>
            <p className="sub-heading">
              Preencha o formulário abaixo com as informações do novo boicote.
            </p>
          </div>
          <div id="last-boicotes">
            <BoicotarForm />
          </div>

        </div>

        <div className={styles.tweets}>
          <TweetsPanel tweetsData={tweetsData} />
        </div>

      </div>

    </section>

  );
};

export default BoicotarSection;
