import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = ({setIsLoading, isLoggedIn, setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ username, password })
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          storeToken(res.token);
          window.location.href = '/';
        }
      });
  };

  return (
    <div className="register-main-container">
    <form
      id="register"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
          const results = await registerUser(userName, password);
          if(results.success === true) {
            storeToken(results.data.token);
            setIsLoggedIn(true);
            setRegistered(true);
          }
          else  
            console.log('register failed: ', results.error.message)
          setUserName("");
          setPassword("");
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <fieldset className="auth-component-input">
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          placeholder="enter username"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </fieldset>

      <fieldset className="auth-component-input">
        <label htmlFor="password">User Password</label>
        <input
          id="password"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </fieldset>
      <button>Register</button>
    </form>
  </div>
  );
}

export default Register;