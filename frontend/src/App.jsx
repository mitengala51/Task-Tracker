import './App.css'
import AuthenticationPage from './Pages/AuthenticationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Demo from './Pages/Demo'
import Demo2 from './Pages/Demo2'
import Demo3 from './Pages/Demo3'
import Demo4 from './Pages/Demo4'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthenticationPage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Demo' element={<Demo />} />
        <Route path='/Demo2' element={<Demo2 />} />
        <Route path='/Demo3' element={<Demo3 />} />
        <Route path='/Demo4' element={<Demo4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
