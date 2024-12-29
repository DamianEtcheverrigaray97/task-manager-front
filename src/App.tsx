import { Toaster } from 'react-hot-toast'
import './App.css'
import { TaskProvider } from './context/TaskContext'
import { Home } from './pages/HomePage'
import Header from './components/Header/Header'

function App() {

  return (

    <TaskProvider>
       <Header />
      <Toaster position="top-right"/>
      <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
       <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/textures/texture-background.jpg')] opacity-20 mix-blend-soft-light">
       <div className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"></div></div>
      <div className="container mx-auto w-full max-w-[700px] sm:w-[80%] md:w-[1200px] lg:w-[1400px] px-4 mt-10 ">
        <Home />
      </div>
    </TaskProvider>
  )
}

export default App
