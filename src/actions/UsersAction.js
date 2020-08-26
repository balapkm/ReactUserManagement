import types from '../reducers/types';

/**
 * Load user
 * @param {*} data 
 */
export function loadUsers(data) {
    return {
        type: types.LOAD_USERS,
        payload: data
    }
}
