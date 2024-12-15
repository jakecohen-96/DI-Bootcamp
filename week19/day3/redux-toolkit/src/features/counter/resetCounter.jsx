import { useDispatch } from "react-redux"
import { reset } from "./counterSlice"


const ResetCounter = (props) => {
    const dispatch = useDispatch()
    return(
        <>
        <button onClick={() => dispatch(reset())}></button>
        </>
    )
}

export default ResetCounter;