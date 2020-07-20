import { USER_LIST, USER_LIST_SUCCESS, USER_DETAIL, USER_DETAIL_SUCCESS } from 'constants/ActionTypes';

export const userList = () => {
    return {
        type: USER_LIST
    }
};

export const getUserListSuccess = (data) => {
    return {
        type: USER_LIST_SUCCESS,
        payload: data
    }
};

export const getUserDetail = (data) => {
    return {
        type: USER_DETAIL,
        payload: data
    }
};

export const getUserDetailSuccess = (data) => {
    return {
      type: USER_DETAIL_SUCCESS,
        payload: data
    }
}