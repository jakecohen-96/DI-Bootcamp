import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const ShowCounter = () => {
  const { count } = useContext(CounterContext);

  return <p>{count}</p>;
};

export default ShowCounter;