import {  USER_LIST_SUCCESS, USER_DETAIL_SUCCESS } from 'constants/ActionTypes';

const INIT_STATE = {
    userList: [],
    userDetail: [],
    loading: true
}

export default (state = INIT_STATE, action) => {
    switch (action.type){
        case USER_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                userList: action.payload
            }
        }
            case USER_DETAIL_SUCCESS: {
               return {
                   ...state,
                   loading: false,
                   userDetail: action.payload
               }
            }
        default:
            return state;
    }
}