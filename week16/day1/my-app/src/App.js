import React from 'react';
import './App.css';
import User from './user';
import users from './users.json'; // Import the JSON file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User List</h1>
        {users.map((item) => (
          <User
            key={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
            id={item.id}
          />
        ))}
      </header>
    </div>
  );
}

export default App;

/**
 * create a react app
 * create post component in the component folder
 * use this json (save as json)
 * display all the post from the json
 * style your post
 */