import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from '../Menu';
import TopBar from '../TopBar';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={`container ten-vh ${styles.header}`} id="header">
      <TopBar>
        <button type="button" className={styles.menu_btn} onClick={() => setToggleMenu(true)}>
          <AiOutlineMenu />
        </button>
      </TopBar>

      <Menu
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
    </header>
  );
};

export default Header;
