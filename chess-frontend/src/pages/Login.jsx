import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/authSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useSelector((state)=>{
      console.log(state,"State");
    })
    async function handleSubmit(e){
        setError("");
        e.preventDefault();
        const formData=new FormData(e.target);
        const email=formData.get('email');
        const password=formData.get('password');
        //console.log(name,password);
        const success=await dispatch(login({email,password}))
        console.log(success,"after dispatching");
        if(success.payload.message=="OK"){
          navigate('/lobby');
          
        }else{
          setError(success.payload.message);
        }
    }
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-black">

      {/* Chess Background Icons */}
      <div className="absolute inset-0 opacity-10 text-white text-7xl flex flex-wrap gap-20 justify-center items-center pointer-events-none">
        <span>♔</span>
        <span>♕</span>
        <span>♖</span>
        <span>♘</span>
        <span>♖</span>
        <span>♕</span>
        <span>♗</span>
        <span>♘</span>
      </div>

      {/* Login Card */}
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[380px] text-white">

        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">♔</div>
          <h1 className="text-3xl font-bold tracking-wide">Chess Arena</h1>
          <p className="text-gray-300 text-sm mt-1">
            Enter the board and start playing
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            name='email'
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-indigo-400"
          />

          <input
            type="password"
            name='password'
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-indigo-400"
          />

          <button
            type="submit"
            className="mt-3 bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
          >
            ♞ Login to Play
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          New player? <span className="text-indigo-400 cursor-pointer" onClick={()=>
            navigate('/signup')
          }>Create account</span>
        </p>

      </div>
      {error&&<h1 className='text-red-600 text-xl font-bold'>{error}</h1>}

    </div>
  )
}

export default Login