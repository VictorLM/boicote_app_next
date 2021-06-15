import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, TimelineLite } from 'gsap';

import styles from './styles.module.scss';

gsap.registerPlugin(TimelineLite);

const TopBar: React.FC = ({ children }) => {
  const divRef = useRef<HTMLDivElement>();

  const timeline = new TimelineLite();

  useEffect(() => {
    divRef.current.childNodes.forEach((el) => {
      timeline.fromTo(el, { y: -100 }, {
        opacity: 1,
        y: 0,
        duration: 0.2,
      });
    });
  }, []);

  return (
    <div className={styles.icons} ref={divRef}>
      <Link href="/">
        <a>
          <img src="/images/logo-bw.svg" className="logo" alt="Logo" />
        </a>
      </Link>
      {children}
    </div>
  );
};

export default TopBar;
