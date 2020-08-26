import initialState from '../store/state';
import types from './types';

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS:
            state = {
                ...state,
                users: action.payload
            }
            break;
        default:
            break;
    }

    return state;
}

export default usersReducer;