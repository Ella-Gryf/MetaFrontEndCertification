import React, {useState} from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import './Navbar.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const loc = useLocation();

  return (
    <header className='nav-bar outer-box'>
      <div className='container'>
        <img src={logo} alt='restaurant logo' className='logo' />
        <nav role='navigation' className='lead-text'>
          <ul className={click ? 'nav-menu active-menu' : 'nav-menu'}>
            <li>
              <Link to='/' className={loc.pathname === '/' ? 'active-loc' : null}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className={loc.pathname === '/about' ? 'active-loc' : null}>
                About
              </Link>
            </li>
            <li>
              <Link to='/menu' className={loc.pathname === '/menu' ? 'active-loc' : null}>
                Menu
              </Link>
            </li>
            <li>
              <Link to='/reservations' className={loc.pathname === '/reservations' ? 'active-loc' : null}>
                Reservations
              </Link>
            </li>
            <li>
              <Link to='/order' className={loc.pathname === '/order' ? 'active-loc' : null}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to='/login' className={loc.pathname === '/login' ? 'active-loc' : null}>
                Login
              </Link>
            </li>        
          </ul>
          <div className='hamburger' role='button' aria-label='Toggle Menu' onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;