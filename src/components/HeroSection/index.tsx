import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';

import styles from './styles.module.scss';

type TimelineType = {
  timeline: any, // TODO
};

const HeroSection: React.FC<TimelineType> = ({ timeline }) => {
  const sectionRef = useRef<HTMLInputElement>();

  useEffect(() => {
    sectionRef.current.childNodes.forEach((el) => {
      timeline.from([el], {
        opacity: 0,
        y: -100,
        duration: 0.1,
      });
    });
  }, []);

  return (

    <section className={styles.hero} ref={sectionRef}>

      <div className={styles.hide_landscape} />
      {/* Só para o content-align da section centralizar */}

      <div className={styles.red}>
        <h1 className={styles.text}>
          <span>Consumir</span>
          <span>é um ato</span>
          <span>político!</span>
        </h1>
      </div>

      <div className={styles.footer}>
        <div className={styles.red_line} />
        <Link href="/#entenda">
          <FaArrowDown className={styles.arrow_down} />
        </Link>
      </div>

    </section>

  );
};

export default HeroSection;
