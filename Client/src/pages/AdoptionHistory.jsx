import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdoptionHistory = () => {
    const [adoptions, setAdoptions] = useState([]);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const fetchAdoptions = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/adoptions/user', {
                headers: { 'x-auth-token': token }
            });
            setAdoptions(res.data);
        };

        fetchAdoptions();
    }, []);

    const onFeedbackChange = (e) => setFeedback(e.target.value);

    const submitFeedback = async (adoptionId) => {
        const token = localStorage.getItem('token');
        await axios.post(
            `/api/adoptions/adopt/${adoptionId}/feedback`,
            { feedback },
            { headers: { 'x-auth-token': token } }
        );
    };

    return (
        <div>
            {adoptions.map((adoption) => (
                <div key={adoption._id}>
                    <h2>{adoption.pet.name}</h2>
                    <p>{adoption.feedback || 'No feedback yet'}</p>
                    <textarea
                        value={feedback}
                        onChange={onFeedbackChange}
                        placeholder="Leave feedback"
                    />
                    <button onClick={() => submitFeedback(adoption._id)}>Submit Feedback</button>
                </div>
            ))}
        </div>
    );
};

export default AdoptionHistory;
