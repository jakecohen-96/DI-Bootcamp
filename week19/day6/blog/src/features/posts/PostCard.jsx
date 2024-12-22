import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./state/slice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const handleReaction = (reaction) => {
    dispatch(addReaction({ postId: post.id, reaction }));
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="reactions">
        {Object.entries(reactionEmoji).map(([name, emoji]) => (
          <button key={name} onClick={() => handleReaction(name)}>
            {emoji} {post.reactions[name]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostCard;