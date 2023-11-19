import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer outer-box'>
      <div className='container'>

        <div className='col'>
          <img src={logo} alt='restaurant logo' className='logo' />
        </div>

        <div className='col'>
          <h3>Doormat Navigation</h3>
          <nav role='navigation'>
            <ul className='lead-text'>
              <li><Link to='/' className='nav-item'>Home</Link></li>
              <li><Link to='/about' className='nav-item'>About</Link></li>
              <li><Link to='/menu' className='nav-item'>Menu</Link></li>
              <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
              <li><Link to='/order' className='nav-item'>Order Online</Link></li>
              <li><Link to='/login' className='nav-item'>Login</Link></li> 
            </ul>
          </nav>
        </div>

        <div className='col'>
          <h3>Contact</h3>
          <nav role='navigation'>
            <ul className='lead-text'>
              <li><a href='#'>Address</a></li>
              <li><a href='#'>Phone Number</a></li>
              <li><a href='#'>Email</a></li>
            </ul>
          </nav>
        </div>

        <div className='col'>
          <h3>Social Media Links</h3>
          <nav role='navigation'>
            <ul className='lead-text'>
              <li><a href='#'>Instagram</a></li>
              <li><a href='#'>Facebook</a></li>
              <li><a href='#'>Twitter</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;