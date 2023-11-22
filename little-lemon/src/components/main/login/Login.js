import React, {useState} from 'react';
import Popup from '../../general/Popup';
import './Login.css';


const Login = () => {

  const [isPopupOpen, setPopupOpen] = useState(false); 

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <div className='login outer-box popup-open'>
      <div className='login container'>
        <h1 className='display-title'>Little Lemoners' Club</h1>
        <section className='btn-group'>
          <button className='btn' onClick={openPopup} aria-label='On Click, join now'>Join Now</button>
          <button className='btn' onClick={openPopup} aria-label='On Click, sign in'>Sign In</button>
        </section>
        {isPopupOpen && <Popup 
          msg={"Whoops! Our Little Lemoners' club space is down at the moment."} 
          onClose={closePopup} 
          aria-live='polite'
        />}
      </div>
    </div>
  )
}

export default Login;