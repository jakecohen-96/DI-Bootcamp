import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>("None");

    const increment = () => {
        setCount(count + 5);
        setLastAction("incremented by 5");
    };

    const decrement = () => {
        setCount(count - 1);
        setLastAction("decremented");
    };

    return (
        <div>
            <h2>counter: {count}</h2>
            <p>last action: {lastAction}</p>
            <button onClick={increment}>increment by 5</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;