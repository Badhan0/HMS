import React from 'react';

const Profile = ({ username }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Profile;
