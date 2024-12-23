import React from "react";
import UserSelect from "./features/users/userSelect";
import PostList from "./features/posts/PostList";

const App = () => {
  return (
    <div>
      <h1>Posts</h1>
      <UserSelect />
      <PostList />
    </div>
  );
};

export default App;