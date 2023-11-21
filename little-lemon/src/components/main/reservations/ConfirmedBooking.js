import React from 'react';
//import './Reservations.css';
import './Booking.css';

const ConfirmedBooking = ({ formData }) => {

  return (
    <div className='confirmation outer-box'>
      <div className='container'>
        <h1>Booking Confirmed</h1>
        <h2>Reservation for {formData.guests} 
            {` ${(formData.guests===1) ? 'guest' : 'guests'} `}
            on {formData.date} at {formData.time}
        </h2>
        <h3>Occasion: {formData.occasion}</h3>
      </div>      
    </div>
  )
}

export default ConfirmedBooking;