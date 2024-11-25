import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/car.jsx';
import Events from './components/Events.jsx';

function App() {

  return (
    <>
     <Car model='audi'/>
    <Events />
    </>
  )
}

export default App;
