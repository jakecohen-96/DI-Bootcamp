import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <h2>Reset</h2>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    );
};

export default Counter;