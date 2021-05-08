import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

import styles from './styles.module.scss';

const Footer: React.FC = () => (

  <footer className={styles.footer}>

    <div className={`content ${styles.content_footer}`}>

      <div className={styles.footer_left_div}>

        <div className="zoom-hover">
          <span className="logo">
            boicote.
            <span>app</span>
          </span>
        </div>

        <p>Consumir é um ato político</p>

      </div>

      <div className={styles.footer_center_div}>

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

        <p>Copyright © 2021 - Boicote.App - Todos os direitos reservados</p>

      </div>

      <div className={styles.footer_right_div}>

        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/boicotes">Boicotes</Link></li>
          <li><Link href="/sobre">Sobre Nós</Link></li>
          <li><Link href="/criar-boicote">Criar Boicote</Link></li>
        </ul>

      </div>

    </div>

  </footer>
);

export default Footer;
