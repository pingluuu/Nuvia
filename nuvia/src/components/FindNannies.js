import React, { useState } from 'react';

const FindNannies = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Logic to find nannies based on location or criteria
    console.log('Searching for nannies in:', location);
  };

  return (
    <div>
      <h2>Find Nannies</h2>
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

export default FindNannies;
