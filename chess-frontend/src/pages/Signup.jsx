import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-black">

      {/* Chess background pieces */}
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

      {/* Signup Card */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 w-[400px] text-white">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">♕</div>
          <h1 className="text-3xl font-bold">Join the Chess Arena</h1>
          <p className="text-gray-300 text-sm mt-1">
            Create your account and start your chess journey
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-purple-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-3 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
          >
            ♞ Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already a player?{" "}
          <span className="text-purple-400 cursor-pointer" onClick={()=>navigate('/')}>Login</span>
        </p>

      </div>
    </div>
  );
}

  

export default Signup