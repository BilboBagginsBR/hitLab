import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div >
      <Link to="/edit-profile">Edit Profile</Link>
      <Link to="/add-experience">Add experience</Link>
      <Link to="/add-education">Add education</Link>
    </div>
  );
};

export default DashboardActions;