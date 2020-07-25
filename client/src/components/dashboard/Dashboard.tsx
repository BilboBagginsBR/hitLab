import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentProfileSelector, getCurrentUser } from '../../actions/selectors';
import DashNav from './DashNav';
import Education from './Education';
import Experience from './Experience';
import { deleteAccount } from '../../actions/profile';

const Dashboard = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getCurrentProfileSelector);
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Welcome {user && user.name}</h1>

      {profile ? (
        <Fragment>
          <DashNav />
          <Education education={profile.education} />
          <Experience experience={profile.experience} />
          <button onClick={() => dispatch(deleteAccount())}>delete account</button>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile">Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
