import './App.css'
import { Input } from './Input'
import { Task } from "./annotations.ts"
import { useState } from "react";

//Inspired by walkthrough at https://thelinuxcode.com/typescript-handbook-for-react-developers-how-to-build-a-type-safe-todo-app/


function App() {
  const dummyTasks: Task[] = [
    {id: Math.random(), text: "Boggle minds", isComplete: false},
    {id: Math.random(), text: "Steal hearts", isComplete: false},
    {id: Math.random(), text: "Add a cool task", isComplete: false},
];

 const [tasks, setTasks] = useState<Task[]>(dummyTasks)

const handleAddTask = (text: string) => {
  setTasks([...tasks, {
    id: Math.random(),
    text,
    isComplete:false
  }])
}

  return (
      <div>
        <h1>Personal Task Manager</h1>
        {tasks.map(task => (
          <div key={task.id}>{task.text}
          </div>
        ))}
        <Input addTask={handleAddTask} />
      </div>
  )
}

export default App
