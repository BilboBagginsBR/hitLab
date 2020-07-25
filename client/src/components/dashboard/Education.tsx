import React, {Fragment} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { educationType } from '../../actions/types';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education }: { education: educationType[] }) => {
    const dispatch = useDispatch();
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>}
      </td>
      <td>
        <button onClick={() => dispatch(deleteEducation(edu._id))}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2>Education Credentials</h2>
      <table>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
