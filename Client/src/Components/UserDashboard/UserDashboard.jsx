import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [adoptionHistory, setAdoptionHistory] = useState([]);
  const [uploadedPets, setUploadedPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (JWT token in localStorage)
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token is found
      navigate('/login');
    } else {
      // Fetch user data if token is present
      fetchUserData(token);
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      // Fetch user profile data
      const userResponse = await axios.get('/api/user/profile', {
        headers: { 'x-auth-token': token },
      });

      setUserData(userResponse.data);

      // Fetch adoption history for the user
      const adoptionResponse = await axios.get('/api/adoptions/user', {
        headers: { 'x-auth-token': token },
      });

      setAdoptionHistory(adoptionResponse.data);

      // Fetch pets uploaded by the user
      const petsResponse = await axios.get('/api/pets/user', {
        headers: { 'x-auth-token': token },
      });

      setUploadedPets(petsResponse.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.name}</h1>
          <p>Email: {userData.email}</p>

          <div>
            <h2>Your Adoption History</h2>
            {adoptionHistory.length > 0 ? (
              <ul>
                {adoptionHistory.map((adoption, index) => (
                  <li key={index}>
                    <p>Pet Name: {adoption.pet.name}</p>
                    <p>Adopted on: {new Date(adoption.date).toLocaleDateString()}</p>
                    <p>Feedback: {adoption.feedback || 'No feedback yet'}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You haven't adopted any pets yet.</p>
            )}
          </div>

          <div>
            <h2>Your Uploaded Pets</h2>
            {uploadedPets.length > 0 ? (
              <ul>
                {uploadedPets.map((pet, index) => (
                  <li key={index}>
                    <p>Name: {pet.name}</p>
                    <p>Description: {pet.description}</p>
                    <p>Status: {pet.status}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You haven't uploaded any pets yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserDashboard;
