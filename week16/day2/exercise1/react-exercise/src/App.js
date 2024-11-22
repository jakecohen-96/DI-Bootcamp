import logo from './logo.svg';
import './App.css';

function App() {
  const jsxElement = <h1> I love jsx!</h1>;
  const sum = 5 + 5;

  return (
    <div className='App'>
      <p>Hello World</p>
      {jsxElement}
      <p>react is {sum} times better with jsx</p>
    </div>
  );
}

export default App;
