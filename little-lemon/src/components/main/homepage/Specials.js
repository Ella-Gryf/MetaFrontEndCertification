import React from 'react';
import { Link } from 'react-router-dom';

const Specials = () => {

  return (
    <div className='homepage specials outer-box'>
      <div className='container flex'>
        <div className='row row-1'>
          <h1>This week's specials!</h1>
          <button className='btn'>
            <Link to='/menu' style={{textDecoration: 'none', color: 'inherit'}}>
              Online Menu
            </Link>
          </button>
        </div>
        <div className='row row-2'>
          <h2>Specials Cards here</h2>
        </div>
      </div>
    </div>
  )
}

export default Specials;