import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <div className="profile-top">
        <img src="/images/default-avatar.png" alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <h3>Jane Doe</h3>
          <p>Email: jane.doe@example.com</p>
          <p>Location: Toronto, ON</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

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
