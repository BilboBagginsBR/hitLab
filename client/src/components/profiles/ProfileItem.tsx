import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../../actions/types';
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}: {
  profile: profile;
}) => {
  return (
    <div style={{display: 'flex'}}>
      <img src={avatar} alt="" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`}>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
