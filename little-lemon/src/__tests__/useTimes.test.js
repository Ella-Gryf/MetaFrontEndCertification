import useTimes from '../hooks/useTimes';
import { renderHook, act } from "@testing-library/react-hooks";

test('test initial times', () => {
  const { result } = renderHook(() => useTimes());

  console.log(result)
})