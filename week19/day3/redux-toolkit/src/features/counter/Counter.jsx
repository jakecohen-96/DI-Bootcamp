import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import AddNumber from "./AddNumber";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Counter</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <h2>Count: {count}</h2>
            <AddNumber />
        </div>
    );
};

export default Counter;