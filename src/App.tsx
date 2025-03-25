import './App.css'
import { Input } from './Input'
import { useContext } from "react";
import { TaskContext } from "./context/taskContext.tsx"
import { TaskItem } from "./TaskItem"

//Inspired by walkthrough at https://thelinuxcode.com/typescript-handbook-for-react-developers-how-to-build-a-type-safe-todo-app/


function App() {

   const { tasks, completeTaskNumber, addTask, editTask } = useContext(TaskContext);

   const plantStatus = completeTaskNumber < 10 ? 
   `Your plant is still growing!` : 
   `You've grown a gorgeous plant!`;


  return (
    <section className="tasks">
      <h1>Personal Task Manager</h1>
      <div className="current-count">Completed Tasks: <strong>{completeTaskNumber}</strong><br />
      {plantStatus}
      </div>
        <div className="tasklist">
          <div className="tasklist-items">
            {tasks.map(task => (
              <div key={task.id}>
                <TaskItem key={task.id} task={task} />
              </div>
            ))}
          </div>
          <div className="tasklist-input">
            <Input addTask={addTask} editTask={editTask} />
          </div>
        </div>
    </section>
  )
}

export default App
