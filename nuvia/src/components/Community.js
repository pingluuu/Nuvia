import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div>
      <h2>Welcome to the Community Page</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Community;
