import React, { useEffect, useRef } from 'react';
import { gsap, TimelineLite } from 'gsap';
import TweetsPanel from '../TweetsPanel';
import { GetTweetsType } from '../../utils/getTweets';

import styles from './styles.module.scss';
import BoicotarForm from '../BoicotarForm';

gsap.registerPlugin(TimelineLite);

type BoicotarSectionType = {
  tweetsData: GetTweetsType;
}

const BoicotarSection: React.FC<BoicotarSectionType> = ({ tweetsData }) => {
  const headingsBoicotarRef = useRef<HTMLDivElement>();
  const formRef = useRef<HTMLDivElement>();

  const timeline = new TimelineLite();

  useEffect(() => {
    headingsBoicotarRef.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0.2,
        delay: 0.2,
      });
    });

    timeline.to(formRef.current, {
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  return (

    <section className={`${styles.boicotar_section} container`}>

      <div className={styles.content_flex}>

        <div className={styles.boicotar_form}>

          <div className={styles.headings} ref={headingsBoicotarRef}>
            <h2 className="heading">Boicotar</h2>
            <p className="sub-heading">
              Preencha o formulário abaixo com as informações do novo boicote.
            </p>
          </div>
          <div className={styles.form} id="last-boicotes" ref={formRef}>
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
