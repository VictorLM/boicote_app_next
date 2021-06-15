import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { gsap, TimelineLite } from 'gsap';

import styles from './styles.module.scss';

gsap.registerPlugin(TimelineLite);

const HeroSection: React.FC = () => {
  const redDivRef = useRef<HTMLDivElement>();
  const textH1Ref = useRef<HTMLHeadingElement>();
  const footerRef = useRef<HTMLDivElement>();

  const timeline = new TimelineLite();

  useEffect(() => {
    timeline.fromTo(redDivRef.current, { y: -100 }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: 0.6,
    });

    textH1Ref.current.childNodes.forEach((el) => {
      timeline.to(el, {
        opacity: 1,
        duration: 0,
        ease: 'none',
        delay: 0.3,
      });
    });

    footerRef.current.childNodes.forEach((el) => {
      timeline.fromTo(el, { y: -100 }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      });
    });
  }, []);

  return (

    <section className={`container ninety-vh ${styles.hero}`}>

      <div className={styles.hide_landscape} />
      {/* Só para o content-align da section centralizar */}

      <div className={styles.red} ref={redDivRef}>
        <h1 className={styles.text} ref={textH1Ref}>
          <span>Consumir</span>
          <span>é um ato</span>
          <span>político!</span>
        </h1>
      </div>

      <div className={styles.footer} ref={footerRef}>
        <div className={styles.red_line} />
        <Link href="/#entenda">
          <a className={styles.link_footer}>
            <HiOutlineArrowDown className={styles.arrow_down} />
          </a>
        </Link>
      </div>

    </section>

  );
};

export default HeroSection;
