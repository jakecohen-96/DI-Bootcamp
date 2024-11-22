import React from "react";
import "./App.css";
import Post from "./components/post";
import posts from "./info.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>All Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </header>
    </div>
  );
}

export default App;