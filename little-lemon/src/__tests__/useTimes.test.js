import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ExampleTimesComponent from './ExampleTimesComponent';


describe('useTimes', () => {

  test('Test useTimes dispatch when fetchAPI returns valid times data', () => {

    const mockApiData = ['10:00', '15:00'];
  
    render(<ExampleTimesComponent mockApiData={mockApiData} />);

    const result = screen.getByTestId('data');
    expect(result.textContent).toEqual(expect.stringContaining('10:00'));
    expect(result.textContent).toEqual(expect.stringContaining('15:00'));
  });


  test('Test useTimes dispatch when fetchAPI returns error', () => {

    const mockApiData = 'fetchAPI error message';
  
    render(<ExampleTimesComponent mockApiData={mockApiData} />);

    const result = screen.getByTestId('error');
    console.log(result.textContent)
    expect(result.textContent).toEqual(expect.stringContaining(`${mockApiData}`));
  });

});
