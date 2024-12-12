import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Button = () => {
  const { setCount } = useContext(CounterContext);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={handleClick}>Add</button>;
};

export default Button;