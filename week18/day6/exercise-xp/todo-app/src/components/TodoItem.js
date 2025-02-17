import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "✔️ " : "❌ "} {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
};

export default TodoItem;