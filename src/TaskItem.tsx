import { useContext } from "react";
import { TaskContext } from "./context/taskContext";
import { Task } from "./annotations";
import { GrCheckboxSelected, GrEdit, GrTrash  } from "react-icons/gr";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

const { deleteTask, toggleTask, editTask } = useContext(TaskContext);

const accessLabels = {
    toggle: "Mark Complete",
    edit: "Edit Task",
    delete: "Delete Task"
}

    return (
        <div className="task-item">
            <label style={{ textDecoration: task.isComplete ? "line-through" : undefined}}>{task.text}</label>
                <GrCheckboxSelected 
                    aria-label={accessLabels.toggle} 
                    title={accessLabels.toggle}
                    onClick={() => toggleTask(task.text)} />
                <GrEdit 
                    aria-label={accessLabels.edit} 
                    title={accessLabels.edit}
                    onClick={() => editTask(task.id, task.text)} />
                <GrTrash 
                    aria-label={accessLabels.delete} 
                    title={accessLabels.delete}
                    onClick={() => deleteTask(task.text)}/>
        </div>
    )
}