import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPosts } from "./state/slice";
import ReactionButton from "./ReactionButton";

import './css/posts.css'

const PostsList = (props) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const status = useSelector((state) => state.postsReducer.status);
    console.log(posts, status);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts())
  },[])


  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "failded")
    return <h2>We are working on it, stay alert.....</h2>;

  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <ReactionButton post={post}/>
          </article>
        );
      })}
    </>
  );
};
export default PostsList;
