import {
    GET_SYSTEM_USERS,
    GET_SYSTEM_USERS_SUCCESS,
    CREATE_SYSTEM_USERS,
    CREATE_SYSTEM_USERS_SUCCESS,
    UPDATE_SYSTEM_USERS,
} from "constants/ActionTypes";

export const getSystemUsersList = () => {
    return {
        type: GET_SYSTEM_USERS
    }
};

export const getSystemUsersSuccess = (data) => {
    return {
        type: GET_SYSTEM_USERS_SUCCESS,
        payload: data
    }
};

export const createSystemUsers = (data) => {
    return {
        type: CREATE_SYSTEM_USERS,
        payload: data
    };
};

export const createSystemUsersSuccess = (data) => {
    return {
        type: CREATE_SYSTEM_USERS_SUCCESS,
        payload: data
    }
}

export const updateSystemUsers = (data) => {
    return {
        type: UPDATE_SYSTEM_USERS,
        payload: data
    }
}