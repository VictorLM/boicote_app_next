import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC = () => (

  <footer>

    <div className="container">

      <div className="footer-left">

        <div className="logo-footer-div">
          <span className="logo">
            boicote.
            <span>app</span>
          </span>
        </div>

        <p>Consumir é um ato político</p>

      </div>

      <div className="footer-center">

        <div className="social-footer-div">
          <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img src="/assets/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
            <img src="/assets/images/facebook.svg" alt="Facebook" />
          </a>
        </div>

        <p>Copyright © 2021 - Boicote.App - Todos os direitos reservados</p>

      </div>

      <div className="footer-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/boicotes">Boicotes</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li><a href="/criar-boicote">Criar Boicote</a></li>
        </ul>

      </div>

    </div>

  </footer>
);

export default Footer;
