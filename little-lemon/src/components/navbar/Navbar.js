import React, {useState} from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import './Navbar.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className='nav-bar outer-box'>
      <div className='container'>
        <img src={logo} alt='restaurant logo' className='logo' />
        <nav role='navigation' className='lead-text'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/' className='nav-item'>Home</Link></li>
            <li><Link to='/about' className='nav-item'>About</Link></li>
            <li><Link to='/menu' className='nav-item'>Menu</Link></li>
            <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
            <li><Link to='/order' className='nav-item'>Order Online</Link></li>
            <li><Link to='/login' className='nav-item'>Login</Link></li>        
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