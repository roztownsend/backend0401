import { TaskContext } from "./context/taskContext";
import { useContext, useState } from "react";
import { Task } from "./annotations";
import { Input } from "./Input";

interface TaskItemProps { task: Task }

export const TaskItem = ({task}: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false)

    const { deleteTask } = useContext(TaskContext)
    // const { toggleTaskComplete } = useContext(TaskContext)

    const handleTaskDelete = () => {
        deleteTask(task.text)
    }

    const editForm = () => {
        setIsEditing(!isEditing)
    }

    const template = (
        <>
        <div className="task-text">{task.text}</div>
        <button onClick={editForm}>Edit</button>
        <button onClick={handleTaskDelete}>Delete</button>
        </>
    )

    const editField = (
        <Input 
            addTask={text => {
                //edit
            }}
            text={task.text}
            />
    )

    return (
        <div className="task-item">
            {isEditing ? editField : template}
        </div>
    )
}