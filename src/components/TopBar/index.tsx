import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const TopBar: React.FC = ({ children }) => (
  <div className={styles.icons}>
    <Link href="/">
      <img src="/images/logo-bw.svg" className="logo" alt="Logo" style={{ cursor: 'pointer' }} />
    </Link>
    {children}
  </div>
);

export default TopBar;
