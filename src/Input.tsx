import { useState, ChangeEvent } from "react";

interface InputProps {
    addTask(text:string): void
}

export const Input = ({ addTask }: InputProps) => {
    const [text, setText] = useState("");

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value)

    const handleSubmit = () => {
        addTask(text)
        setText("")
        console.log("Task input:", text)
    }

    return (
        <>
        <input
            value={text}
            onChange={handleTextChange} />
            <button onClick={handleSubmit}>Add Task</button>
        </>
    )
};

