import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [company, setCompany] = useState('');
  const [insurance, setInsurance] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState('/images/default-avatar.png');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Company: ${company}\nInsurance: ${insurance}`);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  return (
    <div className="profile-container wide">
      <h2>Your Profile</h2>

      <div className="profile-top">
        <div className="avatar-section">
          <img src={avatar} alt="Profile" className="profile-avatar" />
          <label htmlFor="avatar-upload" className="avatar-label">Change Photo</label>
          <input type="file" id="avatar-upload" accept="image/*" onChange={handleAvatarChange} className="avatar-input" />
        </div>
        <div className="profile-info">
          <h3>Jane Doe</h3>
          <p>Email: jane.doe@example.com</p>
          <p>Location: Toronto, ON</p>
          <button className="edit-btn" onClick={handleEditClick}>Edit Profile</button>
        </div>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="profile-section">
          <h4>Company & Insurance Info</h4>
          <div className="form-group">
            <label htmlFor="company">Company (e.g. BCG):</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company"
            />
          </div>

          <div className="form-group">
            <label htmlFor="insurance">Child's Insurance Info:</label>
            <input
              type="text"
              id="insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              placeholder="Enter insurance provider or ID"
            />
          </div>

          <button type="submit" className="settings-btn">Save Information</button>
        </form>
      )}

      <div className="profile-section">
        <h4>Your Activity</h4>
        <ul>
          <li>🍼 2 nanny job posts</li>
          <li>🏥 3 clinics bookmarked</li>
          <li>👥 1 community thread started</li>
        </ul>
      </div>

      <div className="profile-section">
        <h4>Account Settings</h4>
        <button className="settings-btn">Change Password</button>
        <button className="settings-btn">Notification Preferences</button>
      </div>

      <div className="danger-zone">
        <button className="logout-btn">Log Out</button>
        <button className="delete-btn">Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
