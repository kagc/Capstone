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
    } else setErrors(["The password entries do not match."])
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
        <div className='login-break'>Sign up:</div>
    <form className='signup-form'
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
          required={true}
          maxLength="20"
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
          required={true}
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
          required={true}
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
      <button id="login-button" className="form-button"  type='submit'>Sign Me Up !</button>

      <div className="auth-error-box">
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
