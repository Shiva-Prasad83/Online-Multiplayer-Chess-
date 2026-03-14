import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lobby from './pages/Lobby';
import Layout from './components/Layout';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe } from './slices/authSlice';
function App() {

  //Now the problem is after logging in, If I refresh the page, the state of user is
  //reset to default which is null.That's why will redirect to login/signup page
  //We are not persisting the user.
  //fetchMe will give us the user so we call the fetchMe on every reload
  
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchMe());
  },[dispatch]);

  //dispatch is passed as dependency because on every App component reload new dispatch created
  //So dispatch changes on every reload and useEffect() calls the fetchMe() on every reload.

  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/lobby' element={<Lobby/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
