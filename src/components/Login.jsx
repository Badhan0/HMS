import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoggedIn, setUsername }) => {
  const [userType, setUserType] = useState('');
  const [username, setLoginUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    setLoggedIn(true);
    setUsername(username);
    history.push('/');
  };

  return (
    <div className="container">
      <div className="form-container form-container-current" id="login-form-container">
        <h2 id="hd">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="user-type">Choose Account Type</label>
            <select
              id="user-type-login"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option disabled value="">
                Choose...
              </option>
              <option value="user">User</option>
              <option value="technician">Technician</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              id="login-username"
              value={username}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
