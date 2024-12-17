import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addByAmount } from "./counterSlice";

const AddNumber = () => {
    const [number, setNumber] = useState(""); // State to track user input
    const dispatch = useDispatch();

    const handleAddNumber = () => {
        const value = parseInt(number, 10); // Convert the input to a number
        if (!isNaN(value)) {
            dispatch(addByAmount(value)); // Dispatch the action with the number
            setNumber(""); // Clear the input field
        } else {
            alert("Please enter a valid number!");
        }
    };

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter a number"
                style={{ marginRight: "10px", padding: "5px", width: "150px" }}
            />
            <button onClick={handleAddNumber} style={{ padding: "5px 10px" }}>
                Add Number
            </button>
        </div>
    );
};

export default AddNumber;