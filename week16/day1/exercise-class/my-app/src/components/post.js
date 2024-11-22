import React from "react";
import "../styles/post.css";

const Post = ({ title, body }) => {
  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;