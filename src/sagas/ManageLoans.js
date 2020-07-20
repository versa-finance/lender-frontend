import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SERVER_REQUEST } from "../shared/Backend";
import {
    MANAGE_LOANS, CREATE_LOANS, UPDATE_LOAN, DELETE_LOAN, APPROVE_LOAN,
    DISAPPROVE_LOAN
} from "constants/ActionTypes";
import { getLoansSuccess, createLoanSuccessMessage, deleteLoanMessage } from '../actions/ManageLoans';


const getLoansData = async () => {
     const res = await SERVER_REQUEST('loan/list', 'post', {});
     return res;

};

const loansNew = async (data) => {
    const response = await SERVER_REQUEST('loan/create', 'post', data);
    return response;
};

// const approveIndLoan = async (data) => {
//     const response = await SERVER_REQUEST('loan_request/approve_request', 'post', data);
//     return response;
// };
//
// const disapproveIndLoan = async (data) => {
//     const response = await SERVER_REQUEST('loan_request/disapprove_request', 'post', data);
//     return response;
// }

const existingLoansUpdate = async (data) => {
    const response = await SERVER_REQUEST('loan/update', 'post', data);
    return response;
};

const removeLoans = async (data) => {
    const response = await SERVER_REQUEST('loan/delete', 'post', data);
    return response;
}

function* getAllLoans(){
    try {
        const getLoansItem = yield call(getLoansData);
        if(getLoansItem.success.StatusCode === 200){
            yield put(getLoansSuccess(getLoansItem.success.Data));
        }
    }catch(error){

    }
}

function* createNewLoans(payload){
    const data = payload.payload;
    try {
        const createNewLoans = yield call(loansNew, data);
        console.log(createNewLoans);
        if(createNewLoans.success.StatusCode === 200){
            yield put(createLoanSuccessMessage(createNewLoans.success));
        }
    }catch(error){

    }
}

function* updateExistingLoans(payload){
    const data = payload.payload;
    try {
        const updateExistingLoans = yield call(existingLoansUpdate, data);
        if(updateExistingLoans.success.StatusCode === 200){
            yield put(createLoanSuccessMessage(updateExistingLoans.success))
        }
    }catch(error){

    }
}

function* deleteSingleLoan(payload){
    const data = payload.payload;
    try {
        const deleteSingleLoan = yield call(removeLoans, data);
        console.log(deleteSingleLoan);
        if(deleteSingleLoan.success.StatusCode === 200){
            yield put(deleteLoanMessage(deleteSingleLoan.success));
        }
    }catch(error){

    }
}

// function* approveSingleLoan(payload){
//     const data = payload.payload;
//     try {
//         const approveSingleLoan = yield call(approveIndLoan, data);
//         console.log(approveSingleLoan);
//     }catch(error){
//
//     }
// }
//
// function* disapproveSingleLoan(payload) {
//     const data = payload.payload;
//     try {
//         const disapproveSingleLoan = yield call(disapproveIndLoan, data);
//         console.log(disapproveSingleLoan);
//     }catch(error){
//         console.log(error)
//     }
// }


export function* getLoans() {
    yield takeEvery(MANAGE_LOANS, getAllLoans);
}

export function* createLoans(){
    yield takeEvery(CREATE_LOANS, createNewLoans);
}

export function* updateLoans(){
    yield takeEvery(UPDATE_LOAN, updateExistingLoans);
}

export function* deleteLoans(){
    yield takeEvery(DELETE_LOAN, deleteSingleLoan);
}

// export function* approveLoans(){
//     yield takeEvery(APPROVE_LOAN, approveSingleLoan);
// }
//
// export function* disapproveLoans(){
//     yield takeEvery(DISAPPROVE_LOAN, disapproveSingleLoan);
// }

export default function* rootSaga () {
    yield all([fork(getLoans),
        fork(createLoans),
        fork(updateLoans),
        fork(deleteLoans),
        // fork(approveLoans),
        // fork(disapproveLoans)
    ])
}