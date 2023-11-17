import {useReducer} from 'react';

const useTimes = () => {

  const initialTimes = {
    data: [],
    loading: false,
    error: null,
  };
  
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true, error: false };
        case 'FETCH_DATA_SUCCESS':
        return { loading: false, data: action.payload, error: false };
        case 'FETCH_DATA_FAILURE':
        return { loading: false, error: action.payload, data: [] };
      default:
        return state;
    }
  };

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initialTimes);

  return { availableTimes, dispatchTimes };
};

export default useTimes;

