import React, { useEffect, useState } from 'react';
import './FindWalkInClinic.css';
import mapImage from '../assets/map.jpg';

const clinicData = [
  { name: '1CLINIC', waitTime: 50, phone: '123-456-7890' },
  { name: 'HealthOne Harbourfront', waitTime: 15, phone: '987-654-3210' },
  { name: 'PinPoint - Infinity Health Downtown', waitTime: 25, phone: '555-123-4567' },
  { name: 'MCI - Royal Bank Plaza', waitTime: 30, phone: '111-222-3333' },
  { name: 'Integra Health Centre', waitTime: 40, phone: '444-555-6666' },
];

const sortClinicsByWaitTime = (clinics) => {
  const sortedClinics = [...clinics];
  for (let i = 0; i < sortedClinics.length - 1; i++) {
    for (let j = 0; j < sortedClinics.length - i - 1; j++) {
      if (sortedClinics[j].waitTime > sortedClinics[j + 1].waitTime) {
        [sortedClinics[j], sortedClinics[j + 1]] = [sortedClinics[j + 1], sortedClinics[j]];
      }
    }
  }
  return sortedClinics;
};

const FindWalkInClinic = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const sortedClinics = sortClinicsByWaitTime(clinicData);
    setClinics(sortedClinics);
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
            {clinics.map((clinic, index) => (
              <li key={index} className="clinic-list-item">
                <div className="clinic-info">
                  <strong>{clinic.name}</strong> — {clinic.waitTime} mins
                </div>
                <button className="call-btn" onClick={() => window.location.href = `tel:${clinic.phone}`}>Call</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="clinic-note">
        <p>
          <em>
            Data is for demonstration purposes only. Availability and wait times may vary.
          </em>
        </p>
      </div>
    </div>
  );
};

export default FindWalkInClinic;
