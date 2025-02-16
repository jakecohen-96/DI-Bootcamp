import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => dispatch(toggleTodo(todo.id))} 
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
    );
};

export default TodoItem;