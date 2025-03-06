
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../api/usersApi';

function UpdateUser() {
    const { code } = useParams();
    const [user, setUser] = useState({ fname: '', lname: '', age: '', userType: '' });

    useEffect(() => {
        getUserById(code).then(response => setUser(response.data));
    }, [code]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        user.id = code;
        updateUser(user).then(() => {
            alert('User updated successfully!');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField name="fname" label="First Name" value={user.fname} onChange={handleChange} required />
            <TextField name="lname" label="Last Name" value={user.lname} onChange={handleChange} required />
            <TextField name="age" label="Age" value={user.age} onChange={handleChange} required />
            <TextField name="userType" label="User Type" value={user.userType} onChange={handleChange} required />
            <Button type="submit">Update User</Button>
        </form>
    );
}

export default UpdateUser;