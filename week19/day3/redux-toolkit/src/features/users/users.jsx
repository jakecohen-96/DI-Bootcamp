import React from "react";
import { useSelector } from "react-redux";


const Users = () => {
  const users = useSelector((state) => state.users.users); 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;