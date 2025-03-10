import { useState, useEffect, useContext } from "react";
import { TaskContext } from "./context/taskContext";

interface InputProps {
    addTask(text: string): void;
    editTask(id: number, text: string): void;
}

export const Input = ({ addTask }: InputProps) => {
    const { saveEditTask, currentTask, isEditing, cancelEditTask } = useContext(TaskContext);
    const [text, setText] = useState("");

    useEffect(() => {
        if (isEditing && currentTask) {
            setText(currentTask.text);
        }
    }, [isEditing, currentTask]);

    // remove handleTextChange 

    const handleSubmit = () => {
        if (isEditing && currentTask) {
            saveEditTask(currentTask.id, text)
        } else {
                addTask(text);
        }
        setText("");
    }

    const alternateSubmitLabels = isEditing ? "Save Task" : "Add Task";

    return (
        <div className="add-task">
            <input
                value={text}
                aria-label="Enter task"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task!" />
                <button 
                    aria-label={alternateSubmitLabels}
                    onClick={handleSubmit}>
                    {alternateSubmitLabels}
                </button>
                {isEditing && 
                <button className="add-button"
                    aria-label="Cancel Edit" 
                    onClick={() => cancelEditTask()}>
                    Cancel Edit
                </button>}
        </div>
    );
};

