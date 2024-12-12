import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import ShowCounter from './ShowCounter';

const Display = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Display</h2>
      <ShowCounter />
    </div>
  );
};

export default Display;