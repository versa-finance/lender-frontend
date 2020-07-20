import {APPROVE_LOAN, LOAN_REQUESTS, LOAN_REQUESTS_SUCCESS, LOAN_APPROVE_SUCCESS_MESSAGE, DISAPPROVE_LOANS, SAVE_LOAN_REQUEST} from "constants/ActionTypes";

export const getLoanRequests = () => {
    return {
        type: LOAN_REQUESTS
    }
}


export const getLoanRequestsSuccess = (data) => {
    return {
        type: LOAN_REQUESTS_SUCCESS,
        payload: data
    }
}

export const approveLoan = (data) => {
    return {
        type: APPROVE_LOAN,
        payload: data
    }
};


export const disapproveLoan = (data) => {
    return {
        type: DISAPPROVE_LOANS,
        payload: data
    }
}

export const getApprovedLoanSuccessMessage = (data) => {
    return {
        type: LOAN_APPROVE_SUCCESS_MESSAGE,
        payload: data
    }
}

export const LoanRequestSave = (data) => {
    return {
        type: SAVE_LOAN_REQUEST,
        payload: data
    }
}