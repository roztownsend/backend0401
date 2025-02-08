import { useState, useEffect } from "react";
import { useContext } from "react";
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

    return (
        <>
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task!" />
            <button onClick={handleSubmit}>
                {isEditing ? "Save Edit" : "Add Task"}
            </button>
            {isEditing && <button onClick={() => cancelEditTask()}>Cancel Edit</button>}
        </>
    );
};

