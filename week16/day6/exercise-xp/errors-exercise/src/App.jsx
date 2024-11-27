import React from 'react';
import BuggyCounter from './components/BuggyCounter1.jsx';
import ErrorBoundary from './components/ErrorBoundary1.jsx';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;