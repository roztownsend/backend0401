import './App.css'
import { Input } from './Input'
import { useContext } from "react";
import TaskProvider, { TaskContext } from "./context/taskContext.tsx"
import { TaskItem } from "./TaskItem"

//Inspired by walkthrough at https://thelinuxcode.com/typescript-handbook-for-react-developers-how-to-build-a-type-safe-todo-app/


function App() {

   const { tasks, addTask } = useContext(TaskContext);

   console.log("Task context ", TaskContext)


  return (
    <>
        <h1>Personal Task Manager</h1>
      <TaskProvider>
        {tasks.map(task => (
          <div key={task.id}>
            <TaskItem key={task.id} task={task} />
          </div>
        ))}
        <Input addTask={addTask} />
      </TaskProvider>
    </>
  )
}

export default App
