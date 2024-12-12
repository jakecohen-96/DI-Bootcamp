import React from 'react';
import { CounterProvider } from './components/CounterContext';
import Display from './components/Display';
import Action from './components/Action';

const App = () => {
  return (
    <>
    <CounterProvider>
      <div>
        <h1>React Counter</h1>
        <Display />
        <Action />
      </div>
    </CounterProvider>
    </>
  );
};

export default App;