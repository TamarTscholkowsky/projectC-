import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { addUser } from '../api/usersApi';

function AddUser() {
    const [user, setUser] = useState({ fname: '', lname: '', age: '', userType: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user).then(() => {
            alert('User added successfully!');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField name="fname" label="First Name" onChange={handleChange} required />
            <TextField name="lname" label="Last Name" onChange={handleChange} required />
            <TextField name="age" label="Age" onChange={handleChange} required />
            <TextField name="userType" label="User Type" onChange={handleChange} required />
            <Button type="submit">Add User</Button>
        </form>
    );
}

export default AddUser;