import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ToDoListPage from './pages/ToDoListPage'
import GamePage from './pages/GamePage'
import ResumePage from './pages/ResumePage'
import RecipePage from './pages/RecipePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
