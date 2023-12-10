// Login.jsx

import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Username:</label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">Password:</label>
            <input
              type="password"
              className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
