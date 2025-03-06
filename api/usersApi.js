import axios from 'axios';
//http://localhost:5119/api/Corses
const PATH ='http://localhost:5119/api/Corses/';

//const PATH = 'http://localhost:3000/users';//
export const getAllCourses = async () => {
    debugger
    try {
        const response = await axios.get(PATH)
        const users = response.data;
        return users;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}
export const getUserById = async (id) => {
    try {
        const response = await   axios.get(`{PATH}${id}`)
        const user = response.data;
        return user;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

export const addUser = async (user) => {
    try {
        const response = await axios.post(PATH, user);
        console.log(response.data);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}
export const updateUser = async (user) => {
    try {
        const response = await axios.put(`http://localhost:3000/users/${user.id}`, user)
        console.log(response.data);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

export const deleteUser = async (userCode) => {
    try {
        const res = await axios.delete(`${PATH}${userCode}`);
    }
    catch (e) {
        console.log(e);
        alert("errorr")
    }
}