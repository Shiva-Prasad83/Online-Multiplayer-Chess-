import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Link } from 'react-router-dom';

function Home() {

    const user=useSelector((state)=>{
        console.log(state);
        return state.authReducer.user;
    });
    if(user){
     return <Navigate to="/lobby"/>
    }
  return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white flex items-center justify-center px-6">

      <div className="absolute inset-0 opacity-10 text-8xl flex flex-wrap gap-24 justify-center items-center pointer-events-none">
        <span>♔</span>
        <span>♕</span>
        <span>♖</span>
        <span>♘</span>
        <span>♔</span>
        <span>♕</span>
        <span>♖</span>
        <span>♘</span>
      </div>

     
      <div className="relative max-w-5xl text-center">

       
        <div className="text-7xl mb-6">♔</div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-purple-400">Chess Arena</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Challenge players, improve your strategy, and dominate the board.
          Join the arena and prove your mastery of the game of kings.
        </p>

     
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <Link
            to="/signup"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 font-semibold hover:scale-105 transition transform"
          >
            ♕ Create Account
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 rounded-lg border border-gray-400 hover:border-purple-400 hover:text-purple-400 transition"
          >
            ♘ Login
          </Link>

        </div>

       
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">♖</div>
            <h3 className="font-semibold text-lg mb-2">Play Online</h3>
            <p className="text-gray-300 text-sm">
              Challenge players around the world and compete in exciting chess matches.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">♘</div>
            <h3 className="font-semibold text-lg mb-2">Improve Strategy</h3>
            <p className="text-gray-300 text-sm">
              Analyze games and sharpen your tactics to become a stronger player.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">♕</div>
            <h3 className="font-semibold text-lg mb-2">Climb Rankings</h3>
            <p className="text-gray-300 text-sm">
              Compete, win games, and rise through the leaderboard in the chess arena.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home