import React, { useState, useEffect } from 'react';
import './FindWalkInClinic.css';
import mapImage from '../assets/map.jpg'; // Make sure to place your map image in src/assets/

const mockClinics = [
  { name: '1CLINIC', wait: '10 mins' },
  { name: 'HealthOne Harbourfront', wait: '15 mins' },
  { name: 'PinPoint - Infinity Health Downtown', wait: '25 mins' },
  { name: 'MCI - Royal Bank Plaza', wait: '30 mins' },
  { name: 'Integra Health Centre', wait: '40 mins' },
];

// Helper function to convert wait times to a number
const convertWaitTimeToMinutes = (wait) => {
  return parseInt(wait.split(' ')[0]);
};

const FindWalkInClinic = () => {
  const [sortedClinics, setSortedClinics] = useState([]);

  useEffect(() => {
    // Sort clinics by wait time (ascending)
    const sorted = [...mockClinics].sort((a, b) =>
      convertWaitTimeToMinutes(a.wait) - convertWaitTimeToMinutes(b.wait)
    );
    setSortedClinics(sorted);
  }, []);

  return (
    <div className="find-clinic-page">
      <div className="clinic-header">
        <h2>🏥 Find a Walk-In Clinic Near You</h2>
        <p>
          View a map of local walk-in clinics and their estimated wait times ranked from shortest
          to longest.
        </p>
      </div>

      <div className="clinic-map-and-list">
        <div className="map-image">
          <img src={mapImage} alt="Walk-in clinic map" />
        </div>

        <div className="clinic-list">
          <h3>📊 Clinic Wait Time Ranking</h3>
          <ul>
            {sortedClinics.map((clinic, index) => (
              <li key={index} className="clinic-list-item">
                <div className="clinic-info">
                  <strong>{clinic.name}</strong> — {clinic.wait}
                </div>
                <div className="clinic-buttons">
                  <button className="call-btn">Call</button>
                  <button className="directions-btn">Get Directions</button>
                  <button className="book-btn">Book Appointment</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="clinic-note">
        <p>
          <em>
            All clinic locations and wait times displayed here are mock data for demo purposes only.
          </em>
        </p>
      </div>
    </div>
  );
};

export default FindWalkInClinic;
