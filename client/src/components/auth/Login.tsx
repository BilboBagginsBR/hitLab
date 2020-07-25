import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { getIsAuthenticated } from '../../actions/selectors';

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">login</button>
      </form>
      <h3>
        {' '}
        Dont have an account? <Link to="/register">Sign up</Link>
      </h3>
    </Fragment>
  );
}

export default Login;
