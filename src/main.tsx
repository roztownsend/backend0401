import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskProvider from "./context/taskContext"
import Plant from "./Plant.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <main>
      <Plant />
      <App />
      </main>
    </TaskProvider>
  </StrictMode>,
)
