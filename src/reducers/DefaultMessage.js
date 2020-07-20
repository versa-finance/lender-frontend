import {CREATE_DEFAULT_MESSAGE_SUCCESS, GET_DEFAULT_MESSAGE_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    defaultMessages: [],
    defaultMessageSuccess: {},
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type) {
        case CREATE_DEFAULT_MESSAGE_SUCCESS: {
            return {
                ...state,
                defaultMessageSuccess: actions.payload
            }
        }
        case GET_DEFAULT_MESSAGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                defaultMessages: actions.payload
            }
        }
        default:
            return state;
    }
}