import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIsAuthenticated } from '../actions/selectors';
import { logout } from '../actions/auth';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/">hitlab</Link>
      <Link to="/developers">developers</Link>
      <Link to="/profiles">profiles</Link>
      <Link to="/posts">posts</Link>
      {isAuthenticated ? (
        <button
          onClick={() => {
            dispatch(logout());
            history.push('/login');
          }}
        >
          logout
        </button>
      ) : (
        <Fragment>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </Fragment>
      )}
    </div>
  );
};

export default NavBar;
