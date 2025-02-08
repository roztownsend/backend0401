import { useContext } from "react";
import { TaskContext } from "./context/taskContext";
import { Task } from "./annotations";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

const { deleteTask, toggleTask, editTask } = useContext(TaskContext);


    return (
        <div className="task-item">
            <label style={{ textDecoration: task.isComplete ? "line-through" : undefined}}>{task.text}</label>
            <input type="checkbox"
                onChange={() => toggleTask(task.text)} 
                checked={task.isComplete}/>
            <button onClick={() => editTask(task.id, task.text)}>Edit</button>
            <button onClick={() => deleteTask(task.text)}>Delete</button>
        </div>
    )
}