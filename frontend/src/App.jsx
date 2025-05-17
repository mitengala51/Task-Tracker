import './App.css'
import AuthenticationPage from './Pages/AuthenticationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TaskTracker from './Pages/TaskTracker'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthenticationPage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/projects' element={<TaskTracker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
