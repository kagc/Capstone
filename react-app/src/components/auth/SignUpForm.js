import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
<div className="auth-bg">
      <div className="auth-form-container">
        <div className="auth-form">

        <div className='form-holder'></div>
    <form 
    // className='login-form-css' 
    onSubmit={onSignUp}>
      
      <div>
        {/* <label>User Name</label> */}
        <input
        className="auth-input-line"
          type='text'
          name='username'
          placeholder='Username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
        className="auth-input-line"
          type='text'
          name='email'
          placeholder='Email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
        className="auth-input-line"
          type='password'
          name='password'
          placeholder='Password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <input
        className="auth-input-line"
          type='password'
          name='repeat_password'
          placeholder='Confirm Password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button id="login-button" className="form-button"  type='submit'>Sign Up</button>

      <div className="error-box">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
    </form>
    </div>

            </div>

            </div>
  );
};

export default SignUpForm;
