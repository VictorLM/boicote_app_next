import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
// import { TimelineLite } from 'gsap';

import { FaBullhorn } from 'react-icons/fa';
import styles from './styles.module.scss';

type TimelineType = {
  timeline: any, // TODO
};

const HeroSection: React.FC<TimelineType> = ({ timeline }) => {
  const divRef = useRef<HTMLInputElement>();
  // const tl = new TimelineLite();

  useEffect(() => {
    divRef.current.childNodes.forEach((el) => {
      timeline.from([el], {
        opacity: 0,
        y: -100,
        duration: 1,
        // ease: Power3.easeOut,
        // immediateRender: false,
      });
    });
  }, []);

  return (

    <section>

      <div
        className={`content ninety-height-landscape  ${styles.content_hero}`}
        ref={divRef}
      >

        <div className={styles.left}>
          <h1 className="zoom-hover">
            {'Consumir é um '}
            <p>
              {'ato '}
              <span>político!</span>
            </p>
          </h1>
          <p className="font-size-2">Pratique o consumo consciente</p>

          <Link href="/criar-boicote">
            <button type="button" className="btn-cta shadow font-size-2">
              <FaBullhorn title="Megafone" />
              <span>Criar Boicote</span>
            </button>
          </Link>
        </div>

        <div className={styles.right}>
          <img
            className={`hero-illustration ${styles.illustration_animation}`}
            src="assets/images/illustration_animation.svg"
            alt="Animação ilustração"
          />
          <img
            className="hero-illustration"
            src="assets/images/illustration.svg"
            alt="Ilustração"
          />
        </div>

      </div>

    </section>

  );
};

export default HeroSection;
