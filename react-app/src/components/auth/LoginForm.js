import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './auth.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    
    const demoEmail = 'demo@aa.io'
    const demoPassword = 'password'

    const data = await dispatch(login(demoEmail, demoPassword));
    if (data) {
      setErrors(data);
    }
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="auth-bg">
      <div className="auth-form-container">
        <div className="auth-form">

        <div className='form-holder'>
               <form className='login-form-css' onSubmit={demoLogin}>
                <div className='login-break'>Sign in as:</div>
      <button className="form-button" type="submit"><i id="auth-cat" class="fa-solid fa-cat"></i>Demo User</button>
    </form>
    <div className='login-break'>OR</div>
            </div>

            <div className='form-holder'>
    <form onSubmit={onLogin}>
      
      <div>
        {/* <label htmlFor='email'>Email</label> */}
        <input
        className="auth-input-line"
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        {/* <label htmlFor='password'>Password</label> */}
        <input
        className="auth-input-line"
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button id="login-button" className="form-button" type='submit'>Login</button>

      </div>
      <div className="error-box">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
    </form>
    </div>

            </div>

            </div>
    </div>
  );
};

export default LoginForm;
