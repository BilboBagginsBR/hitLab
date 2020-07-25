import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { experienceType } from '../../actions/types';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}: {
  experience: experienceType;
}) => (
  <div>
    <h3>{company}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

export default ProfileExperience;
