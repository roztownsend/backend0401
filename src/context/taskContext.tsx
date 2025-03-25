import { Task, TaskContextProps } from "../annotations";
import { createContext, useState, ReactNode } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

interface TaskProviderProps {
    children: ReactNode;
}

  const dummyTasks: Task[] = [
    {id: 9997, text: "Steal hearts", isComplete: false},
    {id: 9998, text: "Boggle minds", isComplete: false},
    {id: 9999, text: "Add a cool task", isComplete: false},
  ];

  let nextId: number = 0;

  export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    currentTask: null,
    completeTaskNumber: 0,
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
    const [completeTaskNumber, setCompleteTaskNumber] = useLocalStorage<number>("tasks complete", 0);

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
                { id: nextId++, text, isComplete: false }
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

    const completeCount = (taskArray: Task[]) => {
        const completedArray = taskArray.filter((task) => task.isComplete === true)
        setCompleteTaskNumber(completedArray.length);
    }

    const toggleTask = (text: string) => {
        setTasks((oldTasks) => {
            updatedTasks = oldTasks.map((task) => 
                task.text === text ? 
                {...task, isComplete: !task.isComplete} : task)
                completeCount(updatedTasks);
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
        completeCount,
        completeTaskNumber,
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