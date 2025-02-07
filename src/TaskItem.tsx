import { useContext } from "react";
import { TaskContext } from "./context/taskContext";
import { Task } from "./annotations";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

const { deleteTask, toggleTask } = useContext(TaskContext);


    return (
        <div className="task-item">
            {task.text}
            <input type="checkbox"
                onChange={() => toggleTask(task.text)} 
                checked={task.isComplete}/>
            <button>Edit</button>
            <button onClick={() => deleteTask(task.text)}>Delete</button>
        </div>
    )
}