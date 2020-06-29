import React from 'react';
import NavBar from './components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import StartPage from './components/StartPage';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertMessage from './components/layout/AlertMessage';
import setAuthToken from './utils/setAuthToken';
import { loadUserAction } from './actions/auth';
import {useDispatch} from 'react-redux'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadUserAction());
  }, []);

  return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <NavBar />
          <AlertMessage />
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
  );
}

export default App;
