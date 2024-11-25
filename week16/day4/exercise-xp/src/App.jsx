import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/car.jsx';
import Events from './components/Events.jsx';
import Phone from './components/Phone.jsx'
import Color from './components/Color.jsx';

function App() {

  return (
    <>
     <Car model='audi'/>
    <Events />
    <Phone/>
    <Color/>
    </>
  )
}

export default App;
