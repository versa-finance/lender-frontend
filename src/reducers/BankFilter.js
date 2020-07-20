import {GET_BANK_SMS_FILTER_SUCCESS, CREATE_BANK_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    bankFilters: [],
    bankSuccess: {},
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type) {
        case GET_BANK_SMS_FILTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                bankFilters: actions.payload
            }
        }
        case CREATE_BANK_SUCCESS: {
            return {
                ...state,
                bankSuccess: actions.payload
            }
        }
        default:
            return state;
    }
}