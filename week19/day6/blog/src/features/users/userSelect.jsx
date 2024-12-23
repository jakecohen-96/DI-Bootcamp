import React, { useEffect } from "react";
import { fetchUsers } from "./state/slice";
import { fetchPosts } from "../posts/state/slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserSelect = () => {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleChange = (event) => {
    const userId = event.target.value;
    const url = userId
      ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      : "https://jsonplaceholder.typicode.com/posts";
    dispatch(fetchPosts(url));
  };

  if (status === "loading") {
    return <p>Loading users...</p>;
  }

  if (status === "failed") {
    return <p>Error loading users.</p>;
  }

  return (
    <div>
      <label htmlFor="user-select">Filter by User:</label>
      <select id="user-select" onChange={handleChange}>
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;