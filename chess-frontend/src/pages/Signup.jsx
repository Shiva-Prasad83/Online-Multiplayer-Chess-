import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { signup } from '../slices/authSlice';
import { ToastContainer,toast } from 'react-toastify';
function Signup() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const notify=(message)=>toast(message);
  async function handleSubmit(e){
    e.preventDefault();
    const formData=new FormData(e.target);
    const name=formData.get('name');
    const email=formData.get('email');
    const password=formData.get('password');
    
    try{
     await dispatch(signup({name,email,password})).unwrap();
     navigate('/login');
    }catch(err){
      //console.log("Inside catch",err);
      notify(err.message);
    }
    e.target.reset();
  }

  const user=useSelector((state)=>state.authReducer.user);
      if(user){
        return <Navigate to="/lobby"/>
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-black">

      
      <div className="absolute inset-0 opacity-10 text-white text-8xl flex flex-wrap gap-24 justify-center items-center pointer-events-none">
        <span>♔</span>
        <span>♕</span>
        <span>♖</span>
        <span>♘</span>
        <span>♔</span>
        <span>♕</span>
        <span>♖</span>
        <span>♘</span>
      </div>

     
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 w-[400px] text-white">

        
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">♕</div>
          <h1 className="text-3xl font-bold">Join the Chess Arena</h1>
          <p className="text-gray-300 text-sm mt-1">
            Create your account and start your chess journey
          </p>
        </div>

       
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />


          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />

          
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-3 cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
          >
            ♞ Create Account
          </button>

        </form>

       
        <p className="text-center text-md text-white mt-6">
          Already a player?{" "}
          <span className="text-blue-600 text-md font-semibold cursor-pointer" onClick={()=>navigate('/login')}>Login</span>
        </p>

      </div>
      <ToastContainer/>
    </div>
  );
}

  

export default Signup