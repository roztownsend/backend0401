import { useContext } from "react";
import { TaskContext } from "./context/taskContext";
import { Task } from "./annotations";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

const { deleteTask } = useContext(TaskContext);


    return (
        <div className="task-item">
            {task.text}
            <input type="checkbox" />
            <button>Edit</button>
            <button onClick={() => deleteTask(task.text)}>Delete</button>
        </div>
    )
}