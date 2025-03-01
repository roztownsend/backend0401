import { useContext } from "react";
import { TaskContext } from "./context/taskContext";
import { Task } from "./annotations";
import { GrCheckbox, GrCheckboxSelected, GrEdit, GrTrash  } from "react-icons/gr";

interface TaskItemProps { task: Task; }

export const TaskItem = ({task}: TaskItemProps) => {

const { deleteTask, toggleTask, editTask } = useContext(TaskContext);

//todo: add GrCheckbox (unchecked) and logic for "mark incomplete".

const accessLabels = {
    toggle: "Mark Complete",
    untoggle: "Mark Incomplete",
    edit: "Edit Task",
    delete: "Delete Task"
}

    return (
        <div className="task-item">
            <label className="task-item__label" style={{ textDecoration: task.isComplete ? "line-through" : undefined}}>{task.text}</label>
            <div className="task-item__actions">
                {task.isComplete ?                 
                <GrCheckboxSelected 
                    aria-label={accessLabels.untoggle} 
                    title={accessLabels.untoggle}
                    onClick={() => toggleTask(task.text)} /> :
                <GrCheckbox 
                    aria-label={accessLabels.toggle} 
                    title={accessLabels.toggle}
                    onClick={() => toggleTask(task.text)} /> 
                }
                <GrEdit 
                    aria-label={accessLabels.edit} 
                    title={accessLabels.edit}
                    onClick={() => editTask(task.id, task.text)} />
                <GrTrash 
                    aria-label={accessLabels.delete} 
                    title={accessLabels.delete}
                    onClick={() => deleteTask(task.text)}/>
            </div>
        </div>
    )
}