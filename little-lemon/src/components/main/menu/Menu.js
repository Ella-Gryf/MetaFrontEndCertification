import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu outer-box'>
      <div className='container'>
        <div className='menu-card'>
          <h1>Our Menu</h1>
          <p className='lead-text'>Full menu coming soon!</p>
          <h4>For now please see our Order Online page</h4>
          <button className='btn'><Link to='/order' style={{textDecoration: 'none', color: 'inherit'}}>
            Order Online
          </Link></button>
        </div>
      </div>
    </div>
  )
}

export default Menu;