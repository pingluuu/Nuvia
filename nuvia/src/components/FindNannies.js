import React from 'react';
import { Link } from 'react-router-dom';

const FindNannies = () => {
  return (
    <div>
      <h2>Find a trusted nanny near you</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default FindNannies;
