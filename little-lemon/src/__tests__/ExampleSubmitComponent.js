import React, {useEffect} from 'react';
import useSubmit from '../hooks/useSubmit';

const ExampleSubmitComponent = ({mockApiData}) => {

  const { submissionState, dispatchSubmit } = useSubmit();

  const submitData = (apiData) => {
    if (apiData.type === 'REQUEST') {
      dispatchSubmit({ type: 'SUBMIT_DATA_REQUEST' }); 
    } else if (apiData.type === 'SUCCESS') {
      dispatchSubmit({ type: 'SUBMIT_DATA_SUCCESS', payload: apiData.value });
    } else if (apiData.type === 'FAILURE') {
      dispatchSubmit({ type: 'SUBMIT_DATA_FAILURE', payload: apiData.value });
    } else {
      return submissionState;
    }
  }

  useEffect(() => {
    submitData(mockApiData);
  }, []);

  return (
    <div>
      <h1>Example Submit Component</h1>
      <p data-testid='submission-result'>Result: {`${submissionState.result}`}</p>
      <p data-testid='submission-error'>Error: {submissionState.error ? `${submissionState.error}` : null}</p>
    </div>
  );
};


export default ExampleSubmitComponent;