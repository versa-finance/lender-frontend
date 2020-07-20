import {GET_NETWORK_SMS_FILTER_SUCCESS, CREATE_NETWORK_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    netWorkSms: [],
    networkSuccess: {},
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch (actions.type){
        case GET_NETWORK_SMS_FILTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                netWorkSms: actions.payload
            }
        }
        case CREATE_NETWORK_SUCCESS: {
            return {
                ...state,
                networkSuccess: actions.payload
            }
        }
        default:
            return state;
    }
}