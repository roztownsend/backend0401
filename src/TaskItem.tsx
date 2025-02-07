import { useState } from "react";
import { Task } from "./annotations";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

// const { deleteTask, editTask, toggleTask } = useContext(TaskContext);


    return (
        <div className="task-item">
            {task.text}
            <input type="checkbox" />
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}