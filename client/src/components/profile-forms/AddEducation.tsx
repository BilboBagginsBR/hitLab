import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { educationType } from '../../actions/types';
import { addEducation } from '../../actions/profile';
import { useDispatch } from 'react-redux';

const AddEducation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<educationType>({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { school, degree, fieldofstudy, from, to, description, current } = formData;

  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1>Add Your Education</h1>
      <p> Add any school or bootcamp that you have attended</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEducation(formData, history));
        }}
      >
        <div>
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div>
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div>
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              //   value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />
            Current School
          </p>
        </div>
        <div>
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={onChange} disabled={current} />
        </div>
        <div>
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit"/>
        <Link to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default AddEducation;
