import React from 'react';
import { Link } from 'react-router-dom';

const FindWalkInClinic = () => {
  return (
    <div>
      <h2>Locate a nearby walk-in clinic</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default FindWalkInClinic;
