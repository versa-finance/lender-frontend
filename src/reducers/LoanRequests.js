import {LOAN_REQUESTS_SUCCESS, LOAN_APPROVE_SUCCESS_MESSAGE, SAVE_LOAN_REQUEST} from "constants/ActionTypes";

const INIT_STATE = {
    loanRequests : [],
    approveLoanSuccessMessage: {},
    saveLoanRequests: {},
    loading: true
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type){
        case LOAN_REQUESTS_SUCCESS: {
            console.log(actions.payload);
            return {
                ...state,
                loading: false,
                loanRequests: actions.payload
            }
        }
        case LOAN_APPROVE_SUCCESS_MESSAGE: {
            return {
                ...state,
                approveLoanSuccessMessage: actions.payload
            }
        }
        case SAVE_LOAN_REQUEST: {
            return {
                ...state,
                saveLoanRequests: actions.payload
            }
        }
        default:
            return state;
    }
}