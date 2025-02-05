import { Task } from "../annotations";
import { createContext, useState, ReactNode } from "react";

//write an interface to hold task ACTIONS:

interface TodoContextProps {
    tasks: Task[]
    addTask: (text: string) => void
    toggleTaskComplete: (isComplete: boolean) => void
}

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext<TodoContextProps | null>(null);

const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (text: string) => {
        //...
    }

    const toggleTaskComplete = () => {
        //..
    }

    const value = {
        tasks,
        addTask,
        toggleTaskComplete
    }

    return <TaskContext.Provider value={value}>{children}
    </TaskContext.Provider>
}

export default TaskProvider;