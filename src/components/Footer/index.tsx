import Link from 'next/link';
import React from 'react';
import { CgArrowUpR } from 'react-icons/cg';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const teste = '';

  return (
    <footer className={`container ${styles.footer}`} id="footer">

      <div className={styles.content_flex}>

        <div className={styles.left}>
          <img src="/images/logo-red.svg" alt="Logo Boicote.App" />

          <div className={styles.social}>
            <ul>
              <li>
                <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="mailto:boicoteapp@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <small>Consumir é um ato político</small>
        </div>

        <div className={styles.center}>
          <img src="/images/footer-img.png" alt="Mão segurando um megafone" />
        </div>

        <div className={styles.right}>
          <button type="button" onClick={() => window.scrollTo(0, 0)}>
            <CgArrowUpR />
          </button>

          <div className={styles.menu}>
            <ul>
              <li>
                <Link href="/#entenda">Entenda</Link>
              </li>
              <li>
                <Link href="/boicotes">Boicotes</Link>
              </li>
              <li>
                <Link href="/boicotar">Boicotar</Link>
              </li>
              <li>
                <Link href="/#sobre">Sobre</Link>
              </li>
            </ul>
          </div>

          <small>&copy; 2021 · Boicote.App</small>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
