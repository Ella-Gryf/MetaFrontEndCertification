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
        <h1>Little Lemoners' Club</h1>
        <div className='btn-group'>
          <button className='btn' onClick={openPopup}>Join Now</button>
          <button className='btn' onClick={openPopup}>Sign In</button>
        </div>
        {isPopupOpen && <Popup 
          msg={"Whoops! Our Little Lemoners' club space is down at the moment."} 
          onClose={closePopup} 
        />}
      </div>
    </div>
  )
}

export default Login;