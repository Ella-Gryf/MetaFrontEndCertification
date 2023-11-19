import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ExampleSubmitComponent from '../components/test_components/ExampleSubmitComponent';


describe('useSubmit', () => {

  test('Test useSubmit dispatch when submitAPI has successful outcome', () => {

    const mockApiData = {
      type: 'SUCCESS',
      value: 'form data successfully submitted',
    }
  
    render(<ExampleSubmitComponent mockApiData={mockApiData} />);

    const result = screen.getByTestId('submission-result');
    expect(result.textContent).toEqual(expect.stringContaining(mockApiData.value));
  });


  test('Test useSubmit dispatch when submitAPI has failed outcome', () => {

    const mockApiData = {
      type: 'FAILURE',
      value: 'error message of failed submit',
    }
  
    render(<ExampleSubmitComponent mockApiData={mockApiData} />);

    const result = screen.getByTestId('submission-error');
    expect(result.textContent).toEqual(expect.stringContaining(mockApiData.value));
  });

});
