import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleFunctionComponent from '../components/ExampleFunctionComponent'
import ExampleClassComponent from '../components/ExampleClassComponent'


function App() {

  return (
    <>
      <ExampleFunctionComponent/>
      <ExampleClassComponent />
    </>
  )
}

export default App
