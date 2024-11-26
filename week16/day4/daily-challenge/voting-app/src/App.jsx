import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (i) => {
    languages[i].votes++ 
    setLanguages([...languages]) // never change the actual reference for the code. else react will not know where to go. Always clone in an array(an object) so we can mutate that.
  }

  return (
    <>
      <h2>Voting App:</h2>
      {
        languages.map((item, indx) => {
          return (
            <div key={indx}>
              {item.name} {item.votes}
              <button onClick={() => handleVote(indx)}>Vote!</button>
            </div>
          );
        })
      }
    </>
  );
}

export default App;