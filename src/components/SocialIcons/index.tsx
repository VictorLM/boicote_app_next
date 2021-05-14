import React from 'react';
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

import styles from './styles.module.scss';

const SocialIcons: React.FC = () => (

  <ul className={styles.social_icons}>
    <li>
      <a href="https://twitter.com/boicoteapp/" target="_blank" rel="noreferrer">
        <FaTwitterSquare className={`${styles.icons} ${styles.twitter}`} title="Twitter" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/boicoteapp/" target="_blank" rel="noreferrer">
        <FaInstagramSquare className={`${styles.icons} ${styles.instagram}`} title="Instagram" />
      </a>
    </li>
    <li>
      <a href="https://facebook.com/boicoteapp/" target="_blank" rel="noreferrer">
        <FaFacebookSquare className={`${styles.icons} ${styles.facebook}`} title="Facebook" />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
