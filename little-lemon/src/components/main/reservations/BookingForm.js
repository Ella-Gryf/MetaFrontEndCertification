import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { FaGlassCheers } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import './Booking.css';

const BookingForm = ({formik, availableTimes}) => {

  return (
    <form className='booking-form'>

      <div className='input-group'>
        
        <section className='input'>
          <label className='lead-text' htmlFor='date'>Date</label><br/>
          <input 
            type='date' 
            id='date' 
            name='date' 
            onChange={formik.handleChange} 
            value={formik.values.date} 
            aria-describedby={formik.touched.date && formik.errors.date ? `${formik.errors.date}` : null}
          />
          {(formik.touched.date && formik.errors.date) ? 
            <p className='error-text'>{formik.errors.date}</p> 
            : null}
        </section>

        <section className='input'>
          <label className='lead-text' htmlFor='guests'>Number of guests</label><br/>
          <input 
            type='number' 
            id='guests' 
            name='guests' 
            min='1' 
            max='10'
            onChange={formik.handleChange}
            value={formik.values.guests} 
            aria-describedby={formik.touched.guests && formik.errors.guests ? `${formik.errors.guests}` : null}/>
          {(formik.touched.guests && formik.errors.guests) ? 
            <p className='error-text'>{formik.errors.guests}</p> 
            : null}
        </section>

      </div>

      <div className='input-group'> 

        <section className='input'>
          <label className='lead-text' htmlFor='time'>Time</label><br/>
          <select 
            id='time' 
            name='time' 
            onChange={formik.handleChange} 
            value={formik.values.time} 
            aria-describedby={formik.touched.time && formik.errors.time ? `${formik.errors.time}` : null}>
            <option value={'--select time--'} disabled>Select Time</option>
            {(availableTimes.length > 0) ? 
              (availableTimes.map((time, index) => 
                (<option key={index} value={time}>{time}</option>))) 
              : null}
          </select>
          {(formik.touched.time && formik.errors.time) ? 
            <p className='error-text'>{formik.errors.time}</p> 
            : null}
        </section> 

        <section className='input'>
          <label className='lead-text' htmlFor='occasion'>Occasion</label><br/>
          <select 
            id='occasion'
            name='occasion'
            onChange={formik.handleChange}
            value={formik.values.occasion} 
            aria-describedby={formik.touched.occasion && formik.errors.occasion ? `${formik.errors.occasion}` : null}>
              <option value={'--select occasion--'} disabled>Select Occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
              <option value='Other'>Other</option>
          </select>
          {(formik.touched.occasion && formik.errors.occasion) ? 
            <p className='error-text'>{formik.errors.occasion}</p> 
            : null}
        </section>
      
      </div>
      
    </form>
  );
};

export default BookingForm;