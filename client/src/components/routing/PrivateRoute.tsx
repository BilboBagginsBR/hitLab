import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Redirect, RouteComponentProps,  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../actions/selectors';

const PrivateRoute = ({ component: Component, ...rest }: {component: FC, path: string, exact?: boolean}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
