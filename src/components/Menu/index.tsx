/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gsap, TimelineLite } from 'gsap';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './styles.module.scss';
import SocialIcons from '../SocialIcons';

gsap.registerPlugin(TimelineLite);

type MenuProps = {
  toggleMenu: boolean,
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

const Menu : React.FC<MenuProps> = ({ toggleMenu, setToggleMenu }) => {
  const [tlMenu, setTlMenu] = useState(new TimelineLite({ paused: true }));

  const navRef = useRef<HTMLInputElement>();
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    tlMenu.to(navRef.current, {x: 0, duration: 0.4});

    containerRef.current.childNodes.forEach((el) => {
      tlMenu.fromTo(el, { opacity: 0, x: 100 }, {
        opacity: 1,
        x: 0,
        duration: 0.2,
      });
    });
  }, []);

  useEffect(() => {
    if(toggleMenu) {
      tlMenu.play();
    } else {
      tlMenu.reverse();
    }
  }, [toggleMenu]);

  return (

    <nav className={`${styles.nav}`} ref={navRef}>

      <div className={`container ${styles.container}`} ref={containerRef}>

        <header className={styles.header}>
          <button type="button" className={styles.menu_btn} onClick={() => setToggleMenu(false)}>
            <VscChromeClose />
          </button>
        </header>

        <div className={styles.content}>

          <ul className={styles.nav_items}>
            <li className={useRouter().asPath === '/' ? styles.active : ''}>
              <Link href="/">
                <a onClick={() => setToggleMenu(false)}>Home</a>
              </Link>
            </li>
            <li className={useRouter().asPath === '/#entenda' ? styles.active : ''}>
              <Link href="/#entenda">
                <a onClick={() => setToggleMenu(false)}>Entenda</a>
              </Link>
            </li>
            <li className={useRouter().asPath === '/boicotes' ? styles.active : ''}>
              <Link href="/boicotes">
                <a onClick={() => setToggleMenu(false)}>Boicotes</a>
              </Link>
            </li>
            <li className={useRouter().asPath === '/boicotar' ? styles.active : ''}>
              <Link href="/boicotar">
                <a onClick={() => setToggleMenu(false)}>Boicotar</a>
              </Link>
            </li>
            <li className={useRouter().asPath === '/#sobre' ? styles.active : ''}>
              <Link href="/#sobre">
                <a onClick={() => setToggleMenu(false)}>Sobre</a>
                </Link>
            </li>
          </ul>

        </div>

        <div className={styles.footer}>
          <SocialIcons />
        </div>

      </div>
    </nav>

  );
}

export default Menu;
