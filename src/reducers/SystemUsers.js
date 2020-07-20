import {
    GET_SYSTEM_USERS_SUCCESS,
    CREATE_SYSTEM_USERS_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
    systemUsers: [],
    systemUsersSuccess: {},
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch (actions.type){
        case GET_SYSTEM_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                systemUsers: actions.payload
            }
        }
        case CREATE_SYSTEM_USERS_SUCCESS: {
            return {
                ...state,
                systemUsersSuccess: actions.payload
            }
        }
        default:
            return state;
    }
}