import React from 'react';
import { FaAsterisk, FaGlassCheers } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";


const ConfirmationForm = ({formikConfirm, formData}) => {

  return (
    <form className='confirmation-form'>
      <div className='form-group'>
        <section className='input'>
          <label className='lead-text' htmlFor='firstName'>
            <FaAsterisk className='asterisk' />First Name
          </label>
          <input 
            type="text"
            id="firstName"
            name="firstName"
            className='input-format-box'
            placeholder='First name' 
            value={formikConfirm.values.firstName}
            onChange={formikConfirm.handleChange}
            onBlur={formikConfirm.handleBlur}
            aria-describedby={formikConfirm.touched.firstName 
              && formikConfirm.errors.firstName ? 
              `${formikConfirm.errors.firstName}` : null}
          />
          {(formikConfirm.touched.firstName && formikConfirm.errors.firstName) 
          ? <p className='error-text'>{formikConfirm.errors.firstName}</p> : null}
        </section>
        <section className='input'>
          <label className='lead-text' htmlFor='lastName'>
            <FaAsterisk className='asterisk' />Last Name
          </label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            className='input-format-box'
            placeholder='Last name'
            value={formikConfirm.values.lastName}
            onChange={formikConfirm.handleChange}
            onBlur={formikConfirm.handleBlur}
            aria-describedby={formikConfirm.touched.lastName 
              && formikConfirm.errors.lastName 
              ? `${formikConfirm.errors.lastName}` : null}
          />
          {(formikConfirm.touched.lastName && formikConfirm.errors.lastName) 
          ? <p className='error-text'>{formikConfirm.errors.lastName}</p> : null}
        </section>
        <section className='input'>
          <label className='lead-text' htmlFor='comment'>Additional info</label>
          <textarea 
            id="comment"
            name="comment"
            className='input-format-box lrg'
            placeholder='Comment'
            value={formikConfirm.values.comment}
            onChange={formikConfirm.handleChange}
            onBlur={formikConfirm.handleBlur}
          />
        </section>
      </div>

      <div className='form-group'>
        <section className='input'>
          <label className='lead-text' htmlFor='email'>
            <FaAsterisk className='asterisk' />Email
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            className='input-format-box'
            placeholder='you@company.com'
            value={formikConfirm.values.email}
            onChange={formikConfirm.handleChange}
            onBlur={formikConfirm.handleBlur}
            aria-describedby={formikConfirm.touched.email 
              && formikConfirm.errors.email 
              ? `${formikConfirm.errors.email}` : null}
          />
          {(formikConfirm.touched.email && formikConfirm.errors.email) ? 
          <p className='error-text'>{formikConfirm.errors.email}</p> : null}
        </section>

        <section className='input summary'>
          <div className='row'>
            <div className='summary-item'>
              <FiCalendar className='icon' />
              <h3 className='card-title'>{formData.date}</h3>
            </div>

            <div className='summary-item'>
              <IoPersonOutline className='icon' />
              <h3 className='card-title'>{formData.guests}
                {` ${(formData.guests===1) ? 'Diner' : 'Diners'} `}
              </h3>
            </div>

          </div>
          <div className='row'>
            <div className='summary-item'>
              <IoMdTime className='icon' />
              <h3 className='card-title'>{formData.time}</h3>
            </div>
            <div className='summary-item'>
              <FaGlassCheers className='icon' />
              <h3 className='card-title'>{formData.occasion}</h3>
            </div>
          </div>
        </section>
      </div>
    </form>
  )
}

export default ConfirmationForm;