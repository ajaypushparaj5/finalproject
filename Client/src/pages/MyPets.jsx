import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/pets/user', {
                headers: { 'x-auth-token': token }
            });
            setPets(res.data);
        };

        fetchPets();
    }, []);

    return (
        <div>
            {pets.map((pet) => (
                <div key={pet._id}>
                    <h2>{pet.name}</h2>
                    <p>{pet.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MyPets;
