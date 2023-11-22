import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Popup from '../../general/Popup';
import ConfirmationForm from './ConfirmationForm.js';
import './Confirmation.css';

const ConfirmedBooking = ({formData}) => {

  const [isPopupOpen, setPopupOpen] = useState(false); 

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  const formikConfirm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Min length is 2 letters').required('Required'),
      lastName: Yup
        .string().min(1, 'Entry required')
        .required('Required'),
      email: Yup.string()
        .email()
        .min(2, 'Required')
        .required('Required'),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      // send email confirmation
      openPopup();    
      formikConfirm.resetForm();
    },
  });
  
  return (
    <div className='confirmation outer-box'>
      <div className='container'>
        <h1>Please confirm your reservation</h1>
        <ConfirmationForm formikConfirm={formikConfirm} formData={formData} />
        <section className='submit'>
        <button 
          className='btn' 
          type='button' 
          onClick={formikConfirm.handleSubmit}
          disabled={!formikConfirm.isValid}
          >
            Confirm Reservation
        </button>
      </section>
      {isPopupOpen && <Popup 
          msg={"Your reservation is confirmed"} 
          onClose={closePopup} 
          aria-live='polite'
        />}
      </div>      
    </div>
  )
}

export default ConfirmedBooking;