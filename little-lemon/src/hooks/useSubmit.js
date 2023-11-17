import React, {useReducer} from 'react';

const useSubmit = () => {

  const initialSubmitState = {
    requested: false,
    result: '',
    loading: false,
    error: false,
  };

  const updateSubmitState = (state, action) => {
    switch (action.type) {
      case 'SET_REQUESTED':
        return { ...state, requested: true };
      case 'SUBMIT_DATA_REQUEST':
        return { ...state, requested: false, loading: true, result: null, error: false };
      case 'SUBMIT_DATA_SUCCESS':
        return { ...state, requested: false, loading: false, result: action.payload, error: false };
      case 'SUBMIT_DATA_FAILURE':
        return { requested: false, loading: false, result: action.payload, error: action.payload };
      default:
        return state;
    }
  }

  const [submissionState, dispatchSubmit] = useReducer(
    updateSubmitState, initialSubmitState);

  return { submissionState, dispatchSubmit };
};

export default useSubmit;