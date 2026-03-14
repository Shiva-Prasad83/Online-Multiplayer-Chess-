import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logout } from '../slices/authSlice';
function Layout() {
    const user=useSelector((state)=>{
        //console.log(state.authReducer.user);
        return state.authReducer.user;
    });
    const navigate=useNavigate();
    const dispatch=useDispatch();
    function handleLogout(){
      dispatch(logout());
    }
  return (
    <div className='p-4 bg-gradient-to-br from-slate-900 via-gray-800 to-black'>
        <div className='flex justify-between items-center'>

            <div className='text-3xl text-white font-bold'>
                <h1>♔ Chess Arena ♕</h1>
            </div>
            
            <div className='flex items-center gap-4'>
                 
          {
            user?<div className='flex gap-4 items-center'>
            <button onClick={()=>{
                   <Link to={"/"}></Link>
                 }} className='text-white text-lg font-semibold bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 cursor-pointer p-2 w-30 rounded-md' >♕ Profile</button>
            <button to="/logout" onClick={handleLogout} className='text-white text-lg font-semibold bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 cursor-pointer p-2 w-30 rounded-md'>♞ Logout</button>
            </div>
            :<div className='flex gap-4 items-center'>
              <button onClick={()=>{
                    navigate('/');
                 }} className='text-white text-lg font-semibold bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 cursor-pointer p-2 w-30 rounded-md' >♕ Home</button>
             <button onClick={()=>navigate('/login')} className='text-white text-lg font-semibold bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 cursor-pointer p-2 w-30 rounded-md'>♖ Login</button>
             <button onClick={()=>navigate('/signup')} className='text-white text-lg font-semibold bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 cursor-pointer p-2 w-30 rounded-md'>♗ Signup</button>
            </div>
          } 
            </div>    
        </div>


         <div>
          <Outlet/>
         </div>
    </div>
  )
}

export default Layout;