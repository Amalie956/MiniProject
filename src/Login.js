import React, { useState } from 'react';
import UploadCatImage from './UploadCatImage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!username && !password) {
      alert('Please enter both username and password.');
      return;
    }
  
    if (!username) {
      alert('Please enter a username.');
      return;
    }
  
    if (!password) {
      alert('Please enter a password.');
      return;
    }
  
    setIsLoggedIn(true);
  };
  

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <UploadCatImage /> 
      )}
    </div>
  );
};

export default Login;
