/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TimelineLite } from 'gsap';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './styles.module.scss';
import SocialIcons from '../SocialIcons';
import TopBar from '../TopBar';

type MenuProps = {
  toggleMenu: boolean,
  setToggleMenu: (boolean) => void,
}

const Menu : React.FC<MenuProps> = ({ toggleMenu, setToggleMenu }) => {
  const defaultIllustration = 'images/menu-lg.svg';
  const [illustration, setIllustration] = useState(defaultIllustration);
  const [tlMenu, setTlMenu] = useState(new TimelineLite({ paused: true }));

  const navRef = useRef<HTMLInputElement>();
  const contentRef = useRef<HTMLInputElement>();

  useEffect(() => {
    tlMenu.to(navRef.current, {y: 0, duration: 0.5});

    contentRef.current.childNodes.forEach((el) => {
      tlMenu.fromTo(el, { opacity: 0, x: 100 }, {
        opacity: 1,
        x: 0,
        duration: 0.3,
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

      <div className={`container ${styles.container}`}>

        <header className={styles.header}>
          <TopBar>
            <button type="button" className={styles.menu_btn} onClick={() => setToggleMenu(false)}>
              <VscChromeClose />
            </button>
          </TopBar>
        </header>

        <div className={styles.content} ref={contentRef}>

          <div className={styles.illustrations}>
            <img src={illustration} alt="menu" />
          </div>

          <ul className={styles.nav_items}>
            <li
              className={useRouter().asPath === '/' ? styles.active : ''}
              onMouseEnter={() => setIllustration('images/home-lg.svg')}
              onMouseLeave={() => setIllustration(defaultIllustration)}
            >
              <Link href="/">
                <a onClick={() => setToggleMenu(false)}>Home</a>
              </Link>
            </li>
            <li
              className={useRouter().asPath === '/#entenda' ? styles.active : ''}
              onMouseEnter={() => setIllustration('images/entenda-lg.svg')}
              onMouseLeave={() => setIllustration(defaultIllustration)}
            >
              <Link href="/#entenda">
                <a onClick={() => setToggleMenu(false)}>Entenda</a>
              </Link>
            </li>
            <li
              className={useRouter().asPath === '/boicotes' ? styles.active : ''}
              onMouseEnter={() => setIllustration('images/boicotes-lg.svg')}
              onMouseLeave={() => setIllustration(defaultIllustration)}
            >
              <Link href="/boicotes">
                <a onClick={() => setToggleMenu(false)}>Boicotes</a>
              </Link>
            </li>
            <li
              className={useRouter().asPath === '/boicotar' ? styles.active : ''}
              onMouseEnter={() => setIllustration('images/boicotar-lg.svg')}
              onMouseLeave={() => setIllustration(defaultIllustration)}
            >
              <Link href="/boicotar">
                <a onClick={() => setToggleMenu(false)}>Boicotar</a>
              </Link>
            </li>
            <li
              className={useRouter().asPath === '/#sobre' ? styles.active : ''}
              onMouseEnter={() => setIllustration('images/sobre-lg.svg')}
              onMouseLeave={() => setIllustration(defaultIllustration)}
            >
              <Link href="/#sobre">
                <a onClick={() => setToggleMenu(false)}>Sobre</a>
                </Link>
            </li>
          </ul>

        </div>

        <div className={styles.footer}>
          <div className={styles.red_line} />
          <SocialIcons />
        </div>

      </div>
    </nav>

  );
}

export default Menu;
