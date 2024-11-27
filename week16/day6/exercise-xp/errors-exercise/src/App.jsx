import React from 'react';
import BuggyCounter from './components/BuggyCounter1.jsx';
import LifecyclePart1 from './components/LifecyclePart1.jsx';
import LifecyclePart2 from './components/LifeCyclePart2.jsx';
import LifecyclePart3 from './components/LifeCyclePart3.jsx';
import LifecyclePart3Unmounting from './components/LifeCyclePart3Unmounting.jsx';


function App() {
  return (
    <div>
      <BuggyCounter />
      <LifecyclePart1/>
      <LifecyclePart2/>
      <LifecyclePart3/>
      <LifecyclePart3Unmounting/>
    </div>
  );
}

export default App;