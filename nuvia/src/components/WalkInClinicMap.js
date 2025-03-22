import React from 'react';
import './FindWalkInClinic.css';
import mapImage from '../assets/map.jpg'; // make sure to place your map image in src/assets/

const mockClinics = [
  { name: '1CLINIC', wait: '10 mins' },
  { name: 'HealthOne Harbourfront', wait: '15 mins' },
  { name: 'PinPoint - Infinity Health Downtown', wait: '25 mins' },
  { name: 'MCI - Royal Bank Plaza', wait: '30 mins' },
  { name: 'Integra Health Centre', wait: '40 mins' },
];

const FindWalkInClinic = () => {
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
            {mockClinics.map((clinic, index) => (
              <li key={index}>
                <strong>{clinic.name}</strong> — {clinic.wait}
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
