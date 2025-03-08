import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import Login from './components/Login';
import UpdateUser from './components/UpdateUser';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/update/:code" element={<UpdateUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;