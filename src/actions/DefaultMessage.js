import {CREATE_DEFAULT_MESSAGE, CREATE_DEFAULT_MESSAGE_SUCCESS, GET_DEFAULT_MESSAGE, GET_DEFAULT_MESSAGE_SUCCESS, UPDATE_DEFAULT_MESSAGE, DELETE_DEFAULT_MESSAGE} from "constants/ActionTypes";

export const createDefaultMessage = (data) => {
    return {
        type: CREATE_DEFAULT_MESSAGE,
        payload: data
    }
};

export const createDefaultMessageSuccess = (data) => {
    return {
        type: CREATE_DEFAULT_MESSAGE_SUCCESS,
        payload: data
    }
};

export const getDefaultMessage = () => {
    return {
        type: GET_DEFAULT_MESSAGE
    }
};


export const getDefaultMessageSuccess = (data) => {
    return {
        type: GET_DEFAULT_MESSAGE_SUCCESS,
        payload: data
    }
};

export const updateDefaultMessage = (data) => {
    return {
        type: UPDATE_DEFAULT_MESSAGE,
        payload: data
    }
}

export const deleteDefaultMessage = (data) => {
    return {
        type: DELETE_DEFAULT_MESSAGE,
        payload: data
    }
}