import React, {useEffect} from 'react';
import useTimes from '../hooks/useTimes';

const ExampleTimesComponent = ({mockApiData}) => {

  const { availableTimes, dispatchTimes } = useTimes();

  const fetchData = (mockData) => {
    if (mockData.type === 'REQUEST') {
      dispatchTimes({ type: 'FETCH_DATA_REQUEST' });
    } else if (mockData.type === 'SUCCESS') {
      dispatchTimes({ type: 'FETCH_DATA_SUCCESS', payload: mockData.value });
    } else if (mockData.type === 'FAILURE') {
      dispatchTimes({ type: 'FETCH_DATA_FAILURE', payload: mockData.value });
    } else {
      return availableTimes;
    }
  }

  useEffect(() => {
    fetchData(mockApiData);
  }, []);

  return (
    <div>
      <h1>Example Times Component</h1>
      <p data-testid='loading'>Loading: {`${availableTimes.data}`}</p>
      <p data-testid='data'>Data: {`${availableTimes.data}`}</p>
      <p data-testid='error'>Error: {availableTimes.error ? `${availableTimes.error}` : null}</p>
    </div>
  );
};


export default ExampleTimesComponent;