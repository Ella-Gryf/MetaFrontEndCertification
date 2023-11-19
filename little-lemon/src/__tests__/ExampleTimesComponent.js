import React, {useEffect} from 'react';
import useTimes from '../hooks/useTimes';

const ExampleTimesComponent = ({mockApiData}) => {

  const { availableTimes, dispatchTimes } = useTimes();

  const fetchData = async (date) => {
    dispatchTimes({ type: 'FETCH_DATA_REQUEST' });

    // Simulate api returning an error 
    if (mockApiData.includes('error')) {
      dispatchTimes({ type: 'FETCH_DATA_FAILURE', payload: mockApiData })
    } else {
      try {
        const data = mockApiData;
        dispatchTimes({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatchTimes({ type: 'FETCH_DATA_FAILURE', payload: mockApiData })
      }
    }
  };

  useEffect(() => {
    fetchData('2023-11-20');
  }, []);

  return (
    <div>
      <h1>Example Times Component</h1>
      <p data-testid='data'>Data: {`${availableTimes.data}`}</p>
      <p data-testid='error'>Error: {availableTimes.error ? `${availableTimes.error}` : null}</p>
    </div>
  );
};


export default ExampleTimesComponent;