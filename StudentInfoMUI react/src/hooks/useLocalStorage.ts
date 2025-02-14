import { useState } from "react";
/**
 * NOTE: If you init multiple useLocalStorage with same KEY,
 * the state will have stale data,
 * to get latest data call the getValue function
 */
function useLocalStorage<T>(key: string, initialValue: T) {
  // Get latest value from local storage
  const getValue = (): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  };
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getValue();
  });
  const setValue = (value: T | ((_val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(getValue()) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue, getValue] as const;
}

export default useLocalStorage;
