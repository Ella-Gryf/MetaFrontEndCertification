import React, {useState, useReducer, useEffect} from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
/* Custom hooks and functions */
import { dateToday } from '../../functions/dateTime.js';
import { fetchAPI, submitAPI } from './reservations/mockAPI.js';
import useTimes from '../../hooks/useTimes.js';
import useSubmit from '../../hooks/useSubmit.js';
/* Components */
import Homepage from './homepage/Homepage.js';
import About from './homepage/About.js';
import Menu from './menu/Menu.js';
import BookingPage from './reservations/BookingPage.js';
import ConfirmedBooking from './reservations/ConfirmedBooking.js';
import Order from './order/Order.js';
import Login from './login/Login.js';


import ItemCard from './order/ItemCard.js';
import {greekSalad, bruchetta, dessert} from '../../variables/menuVars.js';


const Main = () => {

  const { availableTimes, dispatchTimes } = useTimes();

  const { submissionState, dispatchSubmit } = useSubmit();

  const navigate = useNavigate();

  const initialFormValues = {
    date: dateToday(),
    time: '--select time--',
    guests: 1,
    occasion: '--select occasion--',
  }

  const [submissionData, setSubmissionData] = useState(initialFormValues)

  const formik = useFormik({
    initialValues: {...initialFormValues},

    validationSchema: Yup.object({
      date: Yup.string()
        .min(8, "Date must be of required length")
        .required('Required'),
      time: Yup.string()
        .matches(/^[^-]*$/, 'Please select a booking time')
        .required('Required'),
      guests: Yup.number()
        .min(1, 'Must book for minimum one person')
        .max(10, 'Cannot book for more than 10 people')
        .required('Required'),
      occasion: Yup.string()
        .matches(/^[^-]*$/, 'Please specify the type of occasion'),
    }),


    onSubmit: values => {
      setSubmissionData(values) // store submission data 
      dispatchSubmit({ type: 'SET_REQUESTED' }); // triggers useEffect(submitAPI) 
    },
  });

  /* Update availableTimes with slots returned for current date */
  const fetchData = async (date) => {
    dispatchTimes({ type: 'FETCH_DATA_REQUEST' });
    try {
      const data = await fetchAPI(date);
      dispatchTimes({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatchTimes({ type: 'FETCH_DATA_FAILURE', payload: error.message })
    }
  };

  useEffect(() => {
    fetchData(formik.values.date);
  }, [formik.values.date, submissionState.requested]);


  const submitData = async (formData) => {
    dispatchSubmit({ type: 'SUBMIT_DATA_REQUEST' });
    try {
      const data = await submitAPI(formData);
      dispatchSubmit({ type: 'SUBMIT_DATA_SUCCESS', payload: data });
      navigate('/reservations/confirmation'); // Take user to ConfirmedBooking 
      formik.resetForm();    
    } catch (error) {
      dispatchSubmit({ type: 'SUBMIT_DATA_FAILURE', payload: error.message });
    };
  }

  useEffect(() => {
    if (submissionState.requested) {
      submitData(formik.values)
    }
  }, [submissionState.requested]);


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' 
          element={<BookingPage formik={formik} availableTimes={availableTimes.data} />} />
        <Route path='/reservations/confirmation' 
          element={<ConfirmedBooking formData={submissionData} />} />
        <Route path='/order' element={<Order />} />   
        <Route path='/order/salad' element={<ItemCard dish={greekSalad}/>} />
        <Route path='/order/bruchetta' element={<ItemCard dish={bruchetta} />} />
        <Route path='/order/dessert' element={<ItemCard dish={dessert} />} />        
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
};

export default Main;