import React, { useContext, useEffect } from 'react';
import {
  nav,
  logoIcon,
  navImage,
  logoutIcon,
  navHeader,
  logoutSection,
  mobileHomeLink,
} from './Header.module.scss';
import homePage from '../../assets/homepage.svg';
import myAccount from '../../assets/my-account.svg';
import logo from '../../assets/Logo_white_splash.svg';
import LogoutIcon from '../../assets/logout.svg';
import AuthContext from '../../context/auth/authContext';
import { getUser } from '../../services/cookies';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  let header = null;

  let user = getUser();
  useEffect(() => {
    user = getUser();
  }, [user]);
  if (!user || window.location.pathname === '/add-kid') header = <></>;
  else
    header = (
      <div className={navHeader}>
        <Link to='/posts' className={mobileHomeLink}>
          <img alt='company logo' src={logo} className={logoIcon} />
        </Link>
        <nav className={nav}>
          <NavLink
            to='/posts'
            activeStyle={{
              fontWeight: 'bold',
              borderBottom: '3px solid white',
            }}
          >
            <img alt='home-page' src={homePage} className={navImage} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to='/my-account'
            activeStyle={{
              fontWeight: 'bold',
              borderBottom: '3px solid white',
            }}
          >
            <img alt='my-account-icon' src={myAccount} />
            <span>My Account</span>
          </NavLink>
        </nav>
        <div className={logoutSection} onClick={logout}>
          <img alt='logout' src={LogoutIcon} className={logoutIcon} />
          <span>Logout</span>
        </div>
      </div>
    );
  return <>{header}</>;
};

export default Header;
