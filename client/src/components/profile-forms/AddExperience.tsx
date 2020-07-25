import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { experienceType } from '../../actions/types';
import { addExperience } from '../../actions/profile';

const AddExperience = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState<experienceType>({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1>Add An Experience</h1>
      <p> Add any developer/programming positions that you have had in the past</p>
      <small>* = required field</small>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          dispatch(addExperience(formData, history));
        }}
      >
        <div>
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
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
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Job
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
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" />
        <Link to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default AddExperience;
