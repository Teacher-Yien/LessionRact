
// import React from 'react';
// import { useState } from 'react';

// export const Conditional = () => {
// 	 const [Login,setLogin] = useState(false);
// 		// const [Logout,setLogout] = useState(false);
// 		const handleLogin = (e)=>{
// 			e.preventDefault();
// 			setLogin(true);
// 		}
// 		const handleLogout = (e)=>{
// 			e.preventDefault();
// 			setLogin(false);
// 		}
// 		return (
// 				<div className=' p-5'>
							
// 									{!Login ? (
// 										<div className=' w-[400px] h-[300px] p-5 bg-slate-100 shadow-lg m-auto rounded-md'>
// 													<h1 className=' text-center font-semibold text-2xl'>Login Form</h1>
// 													<button onClick={handleLogin} className=' w-[100%] px-5 py-2 rounded-md bg-blue-500 text-white mx-3'>Login</button>
// 										</div>
// 									):(
// 										 <div>
// 												<button onClick={handleLogout} className=' mt-5  float-end px-5 py-2 rounded-md bg-red-600 text-white'>Logout</button>
// 												<div style={{display:"grid",placeItems:"center"}} className=' w-[100%] h-[80vh]'>
// 												<p className=' text-3xl text-center   rounded-md  p-2  font-medium'>Welcome to Website success</p>
// 												</div>
// 											</div>
// 									)}			
							
// 				</div>
// 		)
// }


import React from 'react';
import { useState } from 'react';
import { User, LogOut } from 'lucide-react';

export default function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            {isLoggedIn ? (
              <div className="p-3 rounded-full bg-green-100">
                <User className="w-8 h-8 text-green-600" />
              </div>
            ) : (
              <div className="p-3 rounded-full bg-blue-100">
                <User className="w-8 h-8 text-blue-600" />
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {isLoggedIn ? 'Welcome Back!' : 'Login Form'}
          </h1>
          <p className="mt-2 text-gray-600">
            {isLoggedIn
              ? `You are logged in as ${username}`
              : 'Please enter your credentials'}
          </p>
        </div>

        {!isLoggedIn ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
              <p className="text-green-800">Successfully logged in!</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}