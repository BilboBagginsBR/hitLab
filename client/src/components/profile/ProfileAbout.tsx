import React, { Fragment } from 'react';
import { profile } from '../../actions/types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}: {
  profile: profile;
}) => (
  <div>
    {bio && (
      <Fragment>
        <h2>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
      </Fragment>
    )}
    <h2>Skill Set</h2>
    <div>
      {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  </div>
);
export default ProfileAbout;
