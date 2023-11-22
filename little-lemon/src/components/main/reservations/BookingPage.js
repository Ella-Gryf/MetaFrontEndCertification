import React from 'react';
import BookingForm from './BookingForm';
//import './Reservations.css';
import './Booking.css';

import restaurant from '../../../assets/restaurant.jpg';
import chef from '../../../assets/chef.jpg';
import food from '../../../assets/restaurant-food.jpg';

const BookingPage = (props) => {

  const formik = props.formik;

  return (
    <div className='booking-page outer-box'>
      <div className='row row-1'>
        <div className='container'>
          <h1 className='display-title'>Reservations</h1>
          {props.loading && <h3>Loading available times...</h3>}
          {props.error && <h3>Sorry! {props.error}</h3>}
          <BookingForm {...props} />
        </div>
      </div>

      <div className='row row-2'>
        <div className='container'>
          <div className='images'>
            <img src={restaurant} alt='Image of restaurant interior' />
            <img src={chef} alt='Image of our head chef' />
            <img src={food} alt='Image of our food' />
          </div>
          <button 
            className='btn large-btn' 
            type='button' 
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}>
              Reserve a Table
          </button>
        </div>
      </div>

    </div>
  )
}

export default BookingPage;