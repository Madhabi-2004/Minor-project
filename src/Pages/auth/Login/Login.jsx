import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform login logic here, e.g., send a request to a server.

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='back'>
    <div className="login-container">
      <h2>Create new account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
            placeholder='Enter your username'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='Enter your password'
          />
        </div>
        <div className="form-group">
          <Link to={'/'}>
            <button type="submit">Login</button>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};