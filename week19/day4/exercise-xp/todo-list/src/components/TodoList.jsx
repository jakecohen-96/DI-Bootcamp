import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todos/todosSelectors';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(selectTodos);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;