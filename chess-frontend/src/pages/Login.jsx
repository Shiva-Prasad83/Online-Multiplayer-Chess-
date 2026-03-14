import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMe, login } from '../slices/authSlice';
import {Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function Login() {
    const notify=(message)=>toast(message);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    async function handleSubmit(e){       
        e.preventDefault();
        const formData=new FormData(e.target);
        const email=formData.get('email');
        const password=formData.get('password');
        e.target.reset();
        //console.log(name,password);
        try{
          await dispatch(login({email,password})).unwrap();
          notify("Logged In !!");
        // console.log(success,"after dispatching");
        // if(success.payload.message=="OK"){
        await dispatch(fetchMe()).unwrap();
          navigate('/lobby');
          
        //}
        }catch(err){
          //  console.log(err);
          notify(err.message);
        }
        
    }
    const user=useSelector((state)=>state.authReducer.user);
    if(user){
      return <Navigate to="/lobby"/>
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

      
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[380px] text-white">

        
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">♔</div>
          <h1 className="text-3xl font-bold tracking-wide">Chess Arena</h1>
          <p className="text-gray-300 text-sm mt-1">
            Enter the board and start playing
          </p>
        </div>

       
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

        
        <p className="text-center text-white text-md mt-6">
          New player? <span className="text-blue-700 font-semibold cursor-pointer" onClick={()=>
            navigate('/signup')
          }>Create account</span>
        </p>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login