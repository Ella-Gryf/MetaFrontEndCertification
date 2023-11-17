import React from 'react';
import './Reservations.css';

const BookingForm = ({formik, availableTimes}) => {

  return (
    <form onSubmit={formik.handleSubmit} className='booking-form'>

      <div className='input-row'>
        <label htmlFor='date'>Date:</label><br/>
        <input 
          type='date' 
          id='date' 
          name='date' 
          onChange={formik.handleChange} 
          value={formik.values.date} />
        {(formik.touched.date && formik.errors.date) ? 
          <p className='error-text'>{formik.errors.date}</p> 
          : null}
      </div>

      <div className='input-row'>
        <label htmlFor='time'>Time:</label><br/>
        <select 
          id='time' 
          name='time' 
          onChange={formik.handleChange} 
          value={formik.values.time} >
          <option value={'--select time--'} disabled>--select time--</option>
          {(availableTimes.length > 0) ? 
            (availableTimes.map((time, index) => 
              (<option key={index} value={time}>{time}</option>))) 
            : null}
        </select>
        {(formik.touched.time && formik.errors.time) ? 
          <p className='error-text'>{formik.errors.time}</p> 
          : null}
      </div>

      <div className='input-row'>
        <label htmlFor='guests'>Number of guests:</label><br/>
        <input 
          type='number' 
          id='guests' 
          name='guests' 
          min='1' 
          max='10'
          onChange={formik.handleChange}
          value={formik.values.guests} />
        {(formik.touched.guests && formik.errors.guests) ? 
          <p className='error-text'>{formik.errors.guests}</p> 
          : null}
      </div>

      <div className='input-row'>
        <label htmlFor='occasion'>Occasion:</label><br/>
        <select 
          id='occasion'
          name='occasion'
          onChange={formik.handleChange}
          value={formik.values.occasion} >
            <option value={'--select occasion--'} disabled>--select occasion--</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='Other'>Other</option>
        </select>
        {(formik.touched.occasion && formik.errors.occasion) ? 
          <p className='error-text'>{formik.errors.occasion}</p> 
          : null}
      </div>

      <div>
        <button className='btn' type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default BookingForm;