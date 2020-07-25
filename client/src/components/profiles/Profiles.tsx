import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import { getProfileSelector } from '../../actions/selectors';
import { profile } from '../../actions/types';
import ProfileItem from './ProfileItem'

const Profiles = () => {
  const dispatch = useDispatch();
  const {profiles, loading} = useSelector(getProfileSelector);
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Fragment>
          <h1>Developers</h1>
          <p> Browse and connect with developers
          </p>
          <div>
            {profiles.length > 0 ? (
              profiles.map((profile: profile) => <ProfileItem key={profile._id} profile={profile} />)
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
