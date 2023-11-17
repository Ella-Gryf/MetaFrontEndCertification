import React from 'react';
import BookingForm from './BookingForm';
import './Reservations.css';

const BookingPage = (props) => {
  return (
    <div className='booking-page outer-box'>
      <div className='container'>
        <h2>Book a Table</h2>

        <BookingForm {...props} />
      </div>
    </div>
  )
}

export default BookingPage;