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

    const handleSubmit = () => {
        if (isEditing && currentTask) {
            saveEditTask(currentTask.id, text)
        } else {
                addTask(text);
        }
        setText("");
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit();
        }
    }

    
    const alternateSubmitLabels = isEditing ? "Save Task" : "Add Task";

    return (
        <div className="add-task">
            <input
                id="add-task-input"
                onKeyUp={handleEnterPress}
                value={text}
                aria-label="Enter task"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task!" />
                <button className="add-button"
                    aria-label={alternateSubmitLabels}
                    onClick={handleSubmit}>
                    {alternateSubmitLabels}
                </button>
                {isEditing && 
                <button className="cancel-button"
                    aria-label="Cancel Edit" 
                    onClick={() => cancelEditTask()}>
                    Cancel Edit
                </button>}
        </div>
    );
};

