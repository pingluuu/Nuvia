import React, { useState } from 'react';
import './FindNannies.css';
import nanniesOnCallLogo from '../assets/nannies-on-call-logo.png';
import careConnectLogo from '../assets/care-connect-logo.png';
import kidsAndCompanyLogo from '../assets/kids-and-company-logo.png';

const mockNannyData = {
  nanniesOnCall: [
    { name: 'Emily R.', rate: '$25/hr', experience: '5 years', languages: ['English', 'French'], availability: 'Weekdays' },
    { name: 'Sophie L.', rate: '$22/hr', experience: '3 years', languages: ['English'], availability: 'Weekends' },
  ],
  careConnect: [
    { name: 'Daniela M.', rate: '$20/hr', experience: '4 years', languages: ['Spanish', 'English'], availability: 'Full-time' },
    { name: 'Catherine J.', rate: '$18/hr', experience: '2 years', languages: ['English'], availability: 'Evenings' },
  ],
  kidsAndCompany: [
    { name: 'Liam T.', rate: '$27/hr', experience: '6 years', languages: ['English'], availability: 'Anytime' },
    { name: 'Amelia W.', rate: '$23/hr', experience: '3 years', languages: ['French'], availability: 'Mornings' },
  ],
};

const FindNannies = () => {
  const [contacted, setContacted] = useState({});

  const handleContact = (provider, index) => {
    const key = `${provider}-${index}`;
    setContacted({ ...contacted, [key]: true });
    alert('You have contacted this nanny!');
  };

  const renderNannyCard = (nanny, provider, index) => {
    const key = `${provider}-${index}`;
    return (
      <li key={index} className="nanny-card">
        <div className="nanny-details">
          <strong>{nanny.name}</strong>
          <p><span className="nanny-rate">{nanny.rate}</span> &bull; <span className="nanny-experience">{nanny.experience}</span></p>
          <p><strong>Languages:</strong> {nanny.languages.join(', ')}</p>
          <p><strong>Availability:</strong> {nanny.availability}</p>
        </div>
        <button
          className="contact-btn"
          onClick={() => handleContact(provider, index)}
          disabled={contacted[key]}
        >
          {contacted[key] ? 'Contacted' : 'Contact'}
        </button>
      </li>
    );
  };

  return (
    <div className="nanny-page">
      <h2>Find a Nanny</h2>
      <p>We partner with trusted nanny providers to help you find in-home care near you.</p>

      <div className="nanny-columns">
        <div className="nanny-column">
          <img src={nanniesOnCallLogo} alt="Nannies on Call Logo" className="nanny-logo" />
          <ul>
            {mockNannyData.nanniesOnCall.map((nanny, idx) => renderNannyCard(nanny, 'nanniesOnCall', idx))}
          </ul>
        </div>

        <div className="nanny-column">
          <img src={careConnectLogo} alt="Care Connect Network Logo" className="nanny-logo" />
          <ul>
            {mockNannyData.careConnect.map((nanny, idx) => renderNannyCard(nanny, 'careConnect', idx))}
          </ul>
        </div>

        <div className="nanny-column">
          <img src={kidsAndCompanyLogo} alt="Kids and Company Logo" className="nanny-logo" />
          <ul>
            {mockNannyData.kidsAndCompany.map((nanny, idx) => renderNannyCard(nanny, 'kidsAndCompany', idx))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindNannies;
