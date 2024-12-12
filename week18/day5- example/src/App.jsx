import { useState, createContext } from "react";
import Display from "./components/Display";
import Action from "./components/Action";

import "./App.css";
/**
 * createContext
 * Share the context in Provider - value={{}}
 * useContext
 */

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(5);

  return (
    <AppContext.Provider value={{ count, setCount, name:'John' }}>
      <Display />
      <Action />
    </AppContext.Provider>
  );
}

export default App;

/**
 Instructions:

1. App Component:
Create the App component with a count state starting at 0.
Add a setCount function to update the count.
Pass count and setCount as props to child components.

Display Component:

2. Create Display to show the current count.
Inside it, add ShowCounter, which receives count as a prop and displays it.

3. Action Component:
Create Action to hold a Button component.
The Button will have an onClick handler that calls setCount 
to increase the count.

App - setState - count, setCount
 |_ Display
         |_ ShowCouter - count
 |_ Action
        |_Button - => add
 
 */

/**
 *  <Header/> -> button - toggle between dark mode / light mode
 *  <Main /> change between css class - light / dark
 *  use createContext, useContext, useState - mode
 */
