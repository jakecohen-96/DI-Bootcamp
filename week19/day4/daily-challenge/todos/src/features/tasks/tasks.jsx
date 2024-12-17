import TaskInput from "./TaskInput"
import TaskList from "./TaskList"
    

const Tasks = (props) => {
    return(
        <>
            <h2>Tasks</h2>
            <TaskInput/>
            <TaskList/>
        </>
    )
}

export default Tasks;
