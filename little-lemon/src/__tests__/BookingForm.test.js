import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/main/reservations/BookingForm';
import { invalidFormikTouched, 
        availableTimesEmpty, 
        availableTimesValid, 
        validFormikTouched } from '../components/test_components/testingConstants';

describe("BookingForm", () => {

  test("Available times options are rendered", () => {

    render(<BookingForm formik={validFormikTouched} availableTimes={availableTimesValid} />)

    const options = screen.getAllByRole('option');
    expect(options[0].textContent).toBe('--select time--');
    expect(options[1].textContent).toBe('10:00');
    expect(options[2].textContent).toBe('15:00');
  });

  test("Submit button is disabled when form data is invalid", () => {

    render(<BookingForm formik={invalidFormikTouched} availableTimes={availableTimesEmpty} />);
  
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toHaveAttribute('disabled');
  });


  test("Renders error messages when form data is invalid", () => {

    render(<BookingForm formik={invalidFormikTouched} availableTimes={availableTimesEmpty} />);

    const dateError = screen.getByText('Required');
    const timeError = screen.getByText('Please select a booking time');
    const guestsError = screen.getByText('Must book for minimum one person');
    const occasionError = screen.getByText('Please specify the type of occasion');

    expect(dateError).toBeInTheDocument();
    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });


  test("Submit button is enabled when form data IS valid", () => {

    render(<BookingForm formik={validFormikTouched} availableTimes={availableTimesValid} />);
    
    const submitButton = screen.getByText('Submit')
    expect(submitButton).not.toBeDisabled();
  });

});

