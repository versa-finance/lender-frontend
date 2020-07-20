import {MANAGE_LOANS_SUCCESS, CREATE_LOAN_SUCCESS_MESSAGE, DELETE_LOAN_MESSAGE,
   CREATE_LOANS, DELETE_LOAN, UPDATE_LOAN } from "constants/ActionTypes";

const INIT_STATE = {
    loans: [],
    loanCreateMessage: {},
    loanDeletionMessage: {},
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch (actions.type){
        case MANAGE_LOANS_SUCCESS: {
            console.log(actions.payload);
            return {
                ...state,
                loading: false,
                loans: actions.payload
            }
        }
        case CREATE_LOAN_SUCCESS_MESSAGE: {
            return {
                ...state,
                loanCreateMessage: actions.payload
            }
        }
        case DELETE_LOAN_MESSAGE: {
            return {
                ...state,
                loanDeletionMessage: actions.payload
            }
        }
        case CREATE_LOANS: {
            return {
                ...state,
                loans: [actions.payload, ...state.loans]
            }
        }
        case DELETE_LOAN: {
            return {
                ...state,
                loans: state.loans.filter(item => actions.dataId !== item.id)
            }
        }

        default:
            return state;
    }
}