import { useState } from "react";

export function useCounter(): [number, () => void, () => void] {
  const [count, setCount] = useState(0);

  function addItems() {
    setCount(count => Math.min(10, count + 1));
  }

  function removeItems() {
    setCount(count => Math.max(0, count - 1));
  }

  return [count, addItems, removeItems];
}
