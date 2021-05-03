import Link from 'next/link';
import React from 'react';

import { VscChromeClose } from 'react-icons/vsc';
import styles from './styles.module.scss';

type NavProps = {
  mobileMenuIsOpen: boolean,
  setMobileMenuIsOpen: (state: boolean) => void,
}

const Nav : React.FC<NavProps> = ({ mobileMenuIsOpen, setMobileMenuIsOpen }) => (

  <nav className={`${styles.nav} ${mobileMenuIsOpen ? styles.open_menu_mobile : styles.close_menu_mobile}`}>

    <button type="button" className={styles.mobile_menu_exit_btn} onClick={() => setMobileMenuIsOpen(false)}>
      <VscChromeClose />
    </button>

    <ul>
      <hr />
      <li className={styles.menu_active}>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/boicotes">Boicotes</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre Nós</Link>
      </li>
      <li>
        <Link href="/criar-boicote">
          <button type="button" className="btn-cta">
            <img src="assets/images/megaphone-rotated.svg" alt="Megafone" />
            <text>Criar Boicote</text>
          </button>
        </Link>
      </li>
      <hr />
    </ul>
    <div className={styles.social_div_mobile}>
      <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
        <img src="/assets/images/twitter-white.svg" className="zoom-hover" alt="Twitter" />
      </a>
      <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
        <img src="/assets/images/instagram-white.svg" className="zoom-hover" alt="Instagram" />
      </a>
      <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
        <img src="/assets/images/facebook-white.svg" className="zoom-hover" alt="Facebook" />
      </a>
    </div>

  </nav>

);

export default Nav;
