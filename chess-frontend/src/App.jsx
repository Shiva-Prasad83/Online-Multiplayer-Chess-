import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lobby from './pages/Lobby';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/'>
      <Route index element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/lobby' element={<Lobby/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
