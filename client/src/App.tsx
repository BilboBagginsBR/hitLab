
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
=======
import React from 'react';
import NavBar from './components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import StartPage from './components/StartPage';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <NavBar />
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
    </Provider>
  );
}

export default App;
