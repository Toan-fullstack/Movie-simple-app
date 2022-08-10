import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useDebouncusDebounce(
  initializeValue = "",
  delay = 1000
) {
  const [debounce, setDebounce] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(initializeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);
  return debounce;
}
