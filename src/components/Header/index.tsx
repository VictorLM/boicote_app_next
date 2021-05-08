import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

import Nav from '../Nav';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (

    <header className={styles.header}>

      <div className={`content ten-height-landscape ${styles.content_header}`}>

        <div className={styles.logo_div}>
          <a href="/" className="zoom-hover">
            <span className="logo">
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
            <FaTwitter className="social-icons twitter" title="Twitter" />
          </a>
          <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icons instagram" title="Instagram" />
          </a>
          <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
            <FaFacebookF className="social-icons facebook" title="Facebook" />
          </a>
        </div>

      </div>

    </header>
  );
};

export default Header;
