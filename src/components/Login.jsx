import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function Login() {
    const [credentials, setCredentials] = useState({ fname: '', lname: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users/login', credentials).then(response => {
            alert(`Logged in as: ${response.data.fname}`);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField name="fname" label="First Name" onChange={handleChange} required />
            <TextField name="lname" label="Last Name" onChange={handleChange} required />
            <Button type="submit">Login</Button>
        </form>
    );
}

export default Login;
