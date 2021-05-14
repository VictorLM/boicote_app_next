import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import Nav from '../Nav';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <header className={`container ${styles.header}`}>

      <div className={styles.icons}>
        <Link href="/">
          <img src="images/logo-bw.svg" className="logo" alt="Logo" style={{ cursor: 'pointer' }} />
        </Link>

        <button type="button" className={styles.menu_btn} onClick={() => setToggleMenu(!toggleMenu)}>
          { toggleMenu ? <VscChromeClose /> : <AiOutlineMenu /> }
        </button>
      </div>

      { toggleMenu && <Nav setToggleMenu={setToggleMenu} /> }

    </header>
  );
};

export default Header;
