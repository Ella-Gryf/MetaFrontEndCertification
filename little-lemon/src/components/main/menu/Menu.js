import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu outer-box'>
      <div className='container'>
        <section className='menu-card' aria-label='menu card'>
          <h1 className='display-title'>Our Menu</h1>
          <p className='lead-text'>Full menu coming soon!</p>
          <h4>For now please see our Order Online page</h4>
          <Link to='/order' className='btn' aria-label='On Click order food online'>Order Online</Link>
        </section>
      </div>
    </div>
  )
}

export default Menu;