import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {SERVER_REQUEST} from "../shared/Backend";
import {APPROVE_LOAN, DISAPPROVE_LOANS, LOAN_REQUESTS} from "constants/ActionTypes";
import {getLoanRequestsSuccess, getApprovedLoanSuccessMessage} from "actions/LoanRequests";


const getAllLoanRequestsData = async () => {
    const res = await SERVER_REQUEST('loan_request/list', 'post', {});
    return res;
};

const approveIndLoan = async (data) => {
    const response = await SERVER_REQUEST('loan_request/approve_request', 'post', data);
    return response;
};

const disapproveIndLoan = async (data) => {
    const response = await SERVER_REQUEST('loan_request/disapprove_request', 'post', data);
    return response;
}

function* getAllLoanRequests(){
    try {
        const getAllLoanRequests = yield call(getAllLoanRequestsData);
       if(getAllLoanRequests.success.StatusCode === 200){
           yield put(getLoanRequestsSuccess(getAllLoanRequests.success.Data));
       }

    }catch(error){

    }
}

function* disapproveSingleLoan (payload) {
    const data = payload.payload;
    try {
        const disapproveSingleLoan = yield call(disapproveIndLoan, data);
        if(disapproveSingleLoan.success.StatusCode === 200){
            yield put(getApprovedLoanSuccessMessage(disapproveSingleLoan.success));
        }
    }catch(error){
        console.log(error)
    }
}

function* approveSingleLoan(payload){
    const data = payload.payload;
    try {
        const approveSingleLoan = yield call(approveIndLoan, data);
        if(approveSingleLoan.success.StatusCode === 200){
            yield put(getApprovedLoanSuccessMessage(approveSingleLoan.success));
        }
        console.log(approveSingleLoan);
    }catch(error){

    }
}


export function* getLoanRequests() {
    yield takeEvery(LOAN_REQUESTS, getAllLoanRequests)
}


export function* approveLoans(){
    yield takeEvery(APPROVE_LOAN, approveSingleLoan);
}

export function* disapproveLoans(){
    yield takeEvery(DISAPPROVE_LOANS, disapproveSingleLoan);
}

export default function* rootSaga () {
    yield all([fork(getLoanRequests),
    fork(approveLoans),
    fork(disapproveLoans)
    ])
}