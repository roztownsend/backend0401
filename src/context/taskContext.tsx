import { Task } from "../annotations";
import { createContext, useState, ReactNode } from "react";

//write an interface to hold task ACTIONS:

interface TaskContextProps {
    tasks: Task[];
    addTask: (text: string) => void;
    deleteTask: (text: string) => void;
    toggleTask: (isComplete: boolean) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

  const dummyTasks: Task[] = [
    {id: Math.random(), text: "Steal hearts", isComplete: false},
    {id: Math.random(), text: "Boggle minds", isComplete: false},
    {id: Math.random(), text: "Add a cool task", isComplete: false},
  ];

  export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {},
    toggleTask: () => {},
});

const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>(dummyTasks)

    const addTask = (text: string) => {
        setTasks(oldTasks => [
            ...oldTasks, 
            { id: Math.random(), text, isComplete: false }
        ]);
    };

    const deleteTask = (text: string) => {
        setTasks((tasks) => tasks.filter((task) => task.text !== text))
    }

    const toggleTask = () => {
        //...
    }

    const contextValues = {
        tasks,
        addTask,
        deleteTask,
        toggleTask
    }
    
    return <TaskContext.Provider value={contextValues}>{children}
    </TaskContext.Provider>
}

export default TaskProvider;