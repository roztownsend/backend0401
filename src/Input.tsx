import { useState, ChangeEvent } from "react";

interface InputProps {
    addTask(text: string): void;
}

export const Input = ({ addTask }: InputProps) => {
    const [text, setText] = useState("");

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value)

    const handleSubmit = () => {
        addTask(text)
        setText("")
    }

    return (
        <>
        <input
            value={text}
            onChange={handleTextChange}
            placeholder="Enter a task!" />
            <button onClick={handleSubmit}>Add Task</button>
        </>
    )
};

