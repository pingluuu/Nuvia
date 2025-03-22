import React, { useState } from 'react';

const FindWalkInClinic = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Logic to find walk-in clinics based on location
    console.log('Searching for walk-in clinics in:', location);
  };

  return (
    <div>
      <h2>Find Walk-in Clinic</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FindWalkInClinic;
