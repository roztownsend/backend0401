import { Task, TaskContextProps } from "../annotations";
import { createContext, useState, ReactNode } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

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
    currentTask: null,
    addTask: () => {},
    checkDuplicate: () => false,
    deleteTask: () => {},
    toggleTask: () => {},
    editTask: () => {},
    isEditing: false,
    saveEditTask: () => {},
    cancelEditTask: () => {}
});

const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", dummyTasks);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentTask, setCurrentTask] = useState<Task | null>(null);

    let updatedTasks;

    const addTask = (text: string) => {
        if (checkDuplicate(tasks, text)) {
            return;
        }
        if (text === "") {
            alert("You didn't enter anything. Enter a descriptive task.")
        } else {
            setTasks(oldTasks => [
                ...oldTasks, 
                { id: Math.random(), text, isComplete: false }
            ]);
        };
    };

    const checkDuplicate = (taskArray: Task[], newText: string): boolean => {
        const isDuplicate = taskArray.some((task) => 
            task.text === newText); 

        if (isDuplicate) {alert("You already added that task.")};

        return isDuplicate;
    };

    const deleteTask = (text: string) => {
        setTasks((tasks) => tasks.filter((task) => task.text !== text))
    };

    const toggleTask = (text: string) => {
        setTasks((oldTasks) => {
            updatedTasks = oldTasks.map((task) => 
                task.text === text ? 
                {...task, isComplete: !task.isComplete} : task)
                return updatedTasks;
            });
    } 
    
    const editTask = (id: number, text: string) => {
        setIsEditing(true);
        setCurrentTask({ id, text, isComplete: false})
    };
    
    const saveEditTask = (id: number, editedText: string) => {
        setTasks((oldTasks) =>
            oldTasks.map((task) =>
            task.id == id ? {...task, text: editedText} : task)
        );
        setIsEditing(false);
        setCurrentTask(null);
    }

    const cancelEditTask = () => {
        setIsEditing(false);
        setCurrentTask(null);
    }

    const contextValues = {
        tasks,
        addTask,
        checkDuplicate,
        currentTask,
        deleteTask,
        toggleTask,
        editTask,
        isEditing,
        saveEditTask,
        cancelEditTask
    }
    
    return <TaskContext.Provider value={contextValues}>{children}
    </TaskContext.Provider>
}

export default TaskProvider;