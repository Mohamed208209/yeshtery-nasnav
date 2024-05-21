import { useState } from "react";

type CounterAction = () => void;

type UseCounter = [number, CounterAction, CounterAction];

function useCounter(initialValue: number = 0): UseCounter {
  const [count, setCount] = useState<number>(initialValue);

  const increment: CounterAction = () => {
    setCount((c) => c + 1);
  };

  const decrement: CounterAction = () => {
    setCount((c) => c - 1);
  };

  return [count, increment, decrement];
}

export default useCounter;
