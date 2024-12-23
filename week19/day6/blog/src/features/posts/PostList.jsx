import React, { useEffect } from "react";
import { fetchPosts } from "./state/slice";
import PostCard from "./PostCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const PostList = () => {
  const dispatch = useAppDispatch();
  const { posts, status, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading posts...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;