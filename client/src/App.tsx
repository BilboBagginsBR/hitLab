import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AlertMessage from './components/layout/AlertMessage';
import { loadUser } from './actions/auth';
import Routes from './components/routing/Routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.cookie.match('x-auth-token')) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <AlertMessage />
      <Routes />
    </Router>
  );
};

export default App;
