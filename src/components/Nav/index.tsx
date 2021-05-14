/* eslint-disable */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import SocialIcons from '../SocialIcons';

type NavProps = {
  setToggleMenu: (state: boolean) => void,
}

const Nav : React.FC<NavProps> = ({ setToggleMenu }) => {
  const defaultIllustration = 'images/menu-lg.svg';
  const [illustration, setIllustration] = useState(defaultIllustration);

  return (

    <nav className={styles.nav}>

      <div /> {/*Só para o content-align da nav centralizar */}

      <div className={styles.content}>

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

    </nav>

  );
}

export default Nav;
