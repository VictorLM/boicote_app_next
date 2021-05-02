import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const Header: React.FC = () => (

  <header className={`shadow ${styles.header}`}>

    <div className={`content ${styles.content_header}`}>

      <div className={styles.logo_div}>
        <a href="/" className="zoom-hover">
          <span className="logo font-size-2">
            boicote.
            <span>app</span>
          </span>
        </a>
      </div>

      <nav>
        {/* <img
          id="mobile-exit"
          className="mobile-menu-exit"
          src="images/exit.svg"
          alt="Close Navigation"
        > */}
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/boicotes">Boicotes</Link></li>
          <li><Link href="/sobre">Sobre Nós</Link></li>
          <li>
            <Link href="/criar-boicote">
              <button type="button" className="btn-cta">
                <img src="assets/images/megaphone-rotated.svg" alt="Megaphone" />
                <text>Criar Boicote</text>
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.social_div}>
        <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
          <img className="social-icon" src="/assets/images/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
          <img className="social-icon" src="/assets/images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
          <img className="social-icon" src="/assets/images/facebook.svg" alt="Facebook" />
        </a>
      </div>

    </div>

  </header>
);

export default Header;
