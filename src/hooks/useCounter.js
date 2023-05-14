import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 4);
  };
  const decrement = () => {
    if (count > 0) {
      return setCount((prev) => prev - 2);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};
