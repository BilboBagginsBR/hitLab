import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default StartPage;
