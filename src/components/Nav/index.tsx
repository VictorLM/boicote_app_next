import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { VscChromeClose } from 'react-icons/vsc';
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

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
      <li className={useRouter().asPath === '/' ? styles.menu_active : ''}>
        <Link href="/">Home</Link>
      </li>
      <li className={useRouter().asPath === '/boicotes' ? styles.menu_active : ''}>
        <Link href="/boicotes">Boicotes</Link>
      </li>
      <li className={useRouter().asPath === '/sobre' ? styles.menu_active : ''}>
        <Link href="/sobre">Sobre Nós</Link>
      </li>
      <li className={useRouter().asPath === '/criar-boicote' ? styles.menu_active_cta : ''}>
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
        <FaTwitterSquare className="social-icons twitter" title="Twitter" />
      </a>
      <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
        <FaInstagramSquare className="social-icons instagram" title="Instagram" />
      </a>
      <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
        <FaFacebookSquare className="social-icons facebook" title="Facebook" />
      </a>
    </div>

  </nav>

);

export default Nav;
