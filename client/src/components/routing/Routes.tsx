import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../StartPage';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import Register from '../auth/Register';
import PrivateRoute from '../routing/PrivateRoute';
import ProfileForm from '../profile-forms/ProfileForm';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profiles">
          <Profiles />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Routes;
