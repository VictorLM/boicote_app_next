import React from 'react';

import styles from './styles.module.scss';

const Header: React.FC = () => (

  <header className={styles.header}>

    <div className="container">

      <a href="/" className="zoom-hover">
        <span className="font-size-2">
          boicote.
          <span>app</span>
        </span>
      </a>

      <nav>
        {/* <img
        id="mobile-exit"
        className="mobile-menu-exit"
        src="images/exit.svg"
        alt="Close Navigation"
      > */}
        <ul>
          <li className="menu-active"><a href="/">Home</a></li>
          <li><a href="/boicotes">Boicotes</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li>
            <a href="/criar-boicote" className="link-btn">
              <button type="button" className="btn-orange">Criar Boicote</button>
            </a>
          </li>
        </ul>
      </nav>

      <div className="social-header">
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
