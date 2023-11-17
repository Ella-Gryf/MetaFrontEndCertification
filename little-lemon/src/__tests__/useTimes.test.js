import { renderHook, act } from '@testing-library/react-hooks';
import useTimes from '../hooks/useTimes';

describe('useTimes hook', () => {

  it('should handle FETCH_DATA_REQUEST action', () => {
    const { result } = renderHook(() => useTimes());

    act(() => {
      result.current.dispatchTimes({ type: 'FETCH_DATA_REQUEST' });
    });

    expect(result.current.availableTimes.loading).toBe(true);
    expect(result.current.availableTimes.error).toBe(null);
  });



  it('should handle FETCH_DATA_SUCCESS action', () => {
    const { result } = renderHook(() => useTimes());
    const mockData = [{ id: 1, time: '10:00' }];

    act(() => {
      result.current.dispatchTimes({ type: 'FETCH_DATA_SUCCESS', payload: mockData });
    });

    expect(result.current.availableTimes.loading).toBe(false);
    expect(result.current.availableTimes.data).toEqual(mockData);
    expect(result.current.availableTimes.error).toBe(null);
  });



  it('should handle FETCH_DATA_FAILURE action', () => {
    const { result } = renderHook(() => useTimes());
    const error = 'Network error';

    act(() => {
      result.current.dispatchTimes({ type: 'FETCH_DATA_FAILURE', payload: error });
    });

    expect(result.current.availableTimes.loading).toBe(false);
    expect(result.current.availableTimes.error).toBe(error);
    expect(result.current.availableTimes.data).toEqual([]);
  });

  
});