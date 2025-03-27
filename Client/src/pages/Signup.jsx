import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;
    const history = useHistory();

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', formData);
            history.push('/login');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
