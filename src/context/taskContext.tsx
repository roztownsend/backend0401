import { Task } from "../annotations";
import { createContext } from "react";

//write an interface to hold task ACTIONS:

interface TodoContextProps {
    tasks: Task[]
    addTask: (text: string) => void
    toggleTaskComplete: (isComplete: boolean) => void
}

export const TaskContext = createContext<TodoContextProps | null>(null)