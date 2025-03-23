import React, { useState, useEffect } from 'react';
import './FindWalkInClinic.css';
import mapImage from '../assets/map.jpg';

const mockClinics = [
  { 
    name: '1CLINIC', wait: '10 mins', type: "Walk-In Medical Clinic", 
    distance: "1.2 km", address: "123 Main St, Toronto, ON", isOpen: true, opensAt: "8am"
  },
  { 
    name: 'HealthOne Harbourfront', wait: '15 mins', type: "Urgent Care", 
    distance: "2.5 km", address: "456 Harbour St, Toronto, ON", isOpen: false, opensAt: "9am"
  },
  { 
    name: 'PinPoint - Infinity Health Downtown', wait: '25 mins', type: "Walk-In & Family Practice", 
    distance: "3.7 km", address: "789 Bay St, Toronto, ON", isOpen: true, opensAt: "7:30am"
  },
  { 
    name: 'MCI - Royal Bank Plaza', wait: '30 mins', type: "Family Doctor", 
    distance: "4.1 km", address: "101 Wellington St, Toronto, ON", isOpen: false, opensAt: "10am"
  },
  { 
    name: 'Integra Health Centre', wait: '40 mins', type: "Walk-In Medical Clinic", 
    distance: "5.0 km", address: "102 Yonge St, Toronto, ON", isOpen: true, opensAt: "8am"
  },
];

const convertWaitTimeToMinutes = (wait) => parseInt(wait.split(' ')[0]);

const FindWalkInClinic = () => {
  const [sortedClinics, setSortedClinics] = useState([]);

  useEffect(() => {
    const sorted = [...mockClinics].sort((a, b) => 
      convertWaitTimeToMinutes(a.wait) - convertWaitTimeToMinutes(b.wait)
    );
    setSortedClinics(sorted);
  }, []);

  return (
    <div className="find-clinic-page">
      <div className="clinic-header">
        <h2>🏥 Find a Walk-In Clinic Near You</h2>
        <p>View a map of local walk-in clinics and their estimated wait times ranked from shortest to longest.</p>
      </div>

      <div className="clinic-map-and-list">
        {/* LEFT: MAP */}
        <div className="map-image">
          <img src={mapImage} alt="Walk-in clinic map" />
        </div>

        {/* RIGHT: CLINIC LIST */}
        <div className="clinic-list">
          <h3>📊 Clinic Wait Time Ranking</h3>
          {sortedClinics.map((clinic, index) => (
            <div key={index} className="clinic-list-item">
              <div className="clinic-info">
                <strong>{clinic.name}</strong>
                <p>⏳ {clinic.wait} | 📍 {clinic.distance} | 🏥 {clinic.type}</p>
                <p>📍 {clinic.address}</p>
                <p>🕒 {clinic.isOpen ? "Open Now" : `Opens at ${clinic.opensAt}`}</p>
              </div>
              <div className="clinic-buttons">
                <button className="call-btn">📞 Call</button>
                <button className="directions-btn">🗺️ Directions</button>
                <button className="book-btn">📅 Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="clinic-note">
        <p><em>All clinic locations and wait times displayed here are mock data for demo purposes only.</em></p>
      </div>
    </div>
  );
};

export default FindWalkInClinic;
