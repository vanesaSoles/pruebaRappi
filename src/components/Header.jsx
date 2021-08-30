import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/rick_and_morty_logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Rick and Morty' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to='/'>
            <a href='/'>Cuenta</a>
          </Link>
        </li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>

  </header>
);

export default Header;
