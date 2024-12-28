import './App.css'
import { TaskProvider } from './context/TaskContext'
import { Home } from './pages/HomePage'

function App() {

  return (
    <TaskProvider>
     <div className="container mx-auto w-full max-w-[700px] sm:w-[80%] md:w-[1200px] lg:w-[1400px] px-4">
        <h1 className="text-4xl font-bold underline mb-10">Task Manager</h1>
        <Home />
      </div>
    </TaskProvider>
  )
}

export default App
