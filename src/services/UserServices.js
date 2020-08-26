import { URL } from "../config/url";

/**
 * get user
 */
const getUsers = async () => {
    const response = await fetch(`${URL.API_ENDPOINT}/users/`);
    return response.json();
}

/**
 * Add user
 * @param {*} user 
 */
const addUser = async (user) => {
    const response = await fetch(`${URL.API_ENDPOINT}/users`, {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

/**
 * Update user
 * @param {*} user 
 * @param {*} id 
 */
const updateUser = async (user, id) => {
    const response = await fetch(`${URL.API_ENDPOINT}/users/${id}`, {
        body: JSON.stringify(user),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

/**
 * delete user
 * @param {*} id 
 */
const deleteUser = async (id) => {
    const response = await fetch(`${URL.API_ENDPOINT}/users/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}

/**
 * check user
 * @param {*} emailId 
 * @param {*} pwd 
 */
const checkUser = async (emailId,pwd) => {
    const response = await fetch(`${URL.API_ENDPOINT}/users?email=${emailId}&password=${pwd}`);
    return response.json();
}

export {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    checkUser
};