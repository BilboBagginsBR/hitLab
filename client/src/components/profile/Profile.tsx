import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import { authSelector, profileSelector } from '../../actions/selectors';

const Profile = () => {
  const match = useRouteMatch<any>('/profile/:id');
  const id = match?.params.id;
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const auth = useSelector(authSelector);
  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  return (
    <Fragment>
      {profile.profile === null || profile.loading ? (
        <Fragment>spinner...</Fragment>
      ) : (
        <Fragment>
          <Link to="/profiles">back to profiles</Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.profile.user._id && (
              <Link to="/edit-profile">edit profile</Link>
            )}
          <ProfileTop profile={profile.profile} />
          <ProfileAbout profile={profile.profile} />
          <h2>Experience</h2>
          {profile.profile.experience.length > 0 ? (
            <Fragment>
              {profile.profile.experience.map((experience) => (
                <ProfileExperience key={experience._id} experience={experience} />
              ))}
            </Fragment>
          ) : (
            <h4>No experience credentials</h4>
          )}
          <h2>Education</h2>
          {profile.profile.education.length > 0 ? (
            <Fragment>
              {profile.profile.education.map((education) => (
                <ProfileEducation key={education._id} education={education} />
              ))}
            </Fragment>
          ) : (
            <h4>No education credentials</h4>
          )}
          {profile.profile.githubusername && <ProfileGithub username={profile.profile.githubusername} />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
