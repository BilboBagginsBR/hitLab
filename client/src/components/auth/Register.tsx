import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { getIsAuthenticated } from '../../actions/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(setAlert('bad password', 'red'));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1>Sign up</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
        onSubmit={onSubmit}
      >
        <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={onChange}
        />
        <button type="submit">register</button>
      </form>
      <h3>
        {' '}
        Already have an account? <Link to="/login">Sign In</Link>
      </h3>
    </Fragment>
  );
};

export default Register;
