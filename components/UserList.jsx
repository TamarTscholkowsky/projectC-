import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getAllCourses, getAllUsers } from '../api/usersApi';

function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllCourses()
        .then(users => {setUsers(users);debugger});
        console.log(users);
    }, []);

    const handleDelete = (code) => {
        deleteUser().then(() => {
            setUsers(users.filter(user => user.Id !== code));
        }).catch(e =>
            console.log(e))

    };

    return (
        <div>
            <h2>Courses List</h2>
            <List>
                {users.map(user => (
                    <ListItem key={user.Id}>
                        {user.name}| {user.dateOfCorse}|
                        <Button onClick={() => handleDelete(user.Id)}>Delete|</Button>
                        <Button onClick={() => navigate(`/update/1`)}>Update</Button>
                    </ListItem>
                ))}
            </List>
            <Button href="/add">Add User</Button>
            <Button href="/login">Login</Button>
        </div>
    );
}

export default UserList;