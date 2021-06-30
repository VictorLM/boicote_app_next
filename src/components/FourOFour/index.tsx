import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const FourOFour: React.FC = () => (

  <section className={`${styles.four_o_four_section} container full-vh`}>

    <div className={styles.headings}>
      <h2 className={`heading ${styles.heading}`}>Página não encontrada</h2>
      <p className={`sub-heading ${styles.sub_heading}`}>
        <Link href="/">
          <a>&#8592; Voltar para Home</a>
        </Link>
      </p>
    </div>

    <div className={styles.four_o_four_div}>
      <h1>404</h1>
    </div>

  </section>

);

export default FourOFour;
