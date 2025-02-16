import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default AddTodo;