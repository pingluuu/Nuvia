import React from 'react';
import FindNannies from './components/FindNannies';
import Community from './components/Community';
import FindWalkInClinic from './components/FindWalkInClinic';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Service Finder</h1>
      <div>
        <FindNannies />
        <Community />
        <FindWalkInClinic />
      </div>
    </div>
  );
};

export default App;
