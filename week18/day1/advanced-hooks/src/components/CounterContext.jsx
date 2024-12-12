import React, { createContext, useState } from 'react';

// Create the context
export const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};