import React from 'react';
import { profile } from '../../actions/types';

const ProfileTop = ({ profile }: { profile: profile }) => {
  const {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  } = profile;
  return (
    <div>
      <img src={avatar} alt="" />
      <h1>{name}</h1>
      <p>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div>
        {website && <a href={website} target="_blank" rel="noopener noreferrer"></a>}
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer"></a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer"></a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer"></a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer"></a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer"></a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
