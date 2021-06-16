import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, TweenLite } from 'gsap';

import styles from './styles.module.scss';

gsap.registerPlugin(TweenLite);

const TopBar: React.FC = ({ children }) => {
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    divRef.current.childNodes.forEach((el) => {
      TweenLite.fromTo(el, { y: -100 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
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
