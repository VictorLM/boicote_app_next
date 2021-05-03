import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Nav from '../Nav';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (

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

        <button type="button" className={styles.mobile_menu_btn} onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
          <AiOutlineMenu />
        </button>

        <Nav
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />

        <div className={styles.social_div}>
          <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img className="social-icons" src="/assets/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img className="social-icons" src="/assets/images/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img className="social-icons" src="/assets/images/facebook.svg" alt="Facebook" />
          </a>
        </div>

      </div>

    </header>
  );
};

export default Header;
