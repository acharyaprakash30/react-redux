import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes.js';

export const fetchUserRequest = () => {
    return {
        type:FETCH_USERS_REQUEST,
    }
}
export const fetchuserSuccess = users => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure = error => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users  = res.data;
            dispatch(fetchuserSuccess(users));

        }).catch(err => {
            const errMsg = err.message
            dispatch(fetchUserFailure(errMsg))

        })
    }
}