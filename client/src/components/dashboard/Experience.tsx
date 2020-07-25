import React, { Fragment } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { experienceType } from '../../actions/types';
import {deleteExperience} from '../../actions/profile'
import { useDispatch } from 'react-redux';

const Experience = ({ experience }: { experience: experienceType[] }) => {
    const dispatch = useDispatch();
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>}
      </td>
      <td>
        <button onClick={() => dispatch(deleteExperience(exp._id))}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2>Experience Credentials</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
