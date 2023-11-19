import React from 'react';

export const availableTimesEmpty = [];

export const availableTimesValid = ['10:00', '15:00'];

export const invalidFormikTouched = {
  values: {
    date: '9',
    time: '',
    guests: 0,
    occasion: '',
  },
  handleChange: jest.fn(),
  touched: {
    date: true,
    time: true,
    guests: true,
    occasion: true,
  },
  errors: {
    date: 'Required',
    time: 'Please select a booking time',
    guests: 'Must book for minimum one person',
    occasion: 'Please specify the type of occasion',
  },
  isValid: false, 
  handleSubmit: jest.fn(),
};

export const validFormikTouched = {
  values: {
    date: '2023-11-19',
    time: '10:00',
    guests: 3,
    occasion: 'Birthday',
  },
  handleChange: jest.fn(),
  touched: {
    date: true,
    time: true,
    guests: true,
    occasion: true,
  },
  errors: {
    date: '',
    time: '',
    guests: '',
    occasion: '',
  },
  isValid: true,
  handleSubmit: jest.fn(),
};

