import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    CREATE_NEW_BANK,
    DELETE_BANK,
    FETCH_DASHBOARD_DATA,
    GET_BANK_SMS_FILTER,
    UPDATE_EXISTING_BANK
} from "constants/ActionTypes";
import {DashboardDataSuccessList} from "actions";
import {SERVER_REQUEST} from "../shared/Backend";

const getDashboardDataLists = async () => {
    const res = await SERVER_REQUEST('dashboard/fetch', 'post', {});
    return res;
}

function* getDashboardData(){
    try {
        const getDashboardData = yield call(getDashboardDataLists);
        console.log(getDashboardData);
        if(getDashboardData.success.StatusCode === 200) {
            yield put(DashboardDataSuccessList(getDashboardData.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}

export function* getDashboardDataList(){
    yield takeEvery(FETCH_DASHBOARD_DATA, getDashboardData)
}

export default function* rootSaga () {
    yield all([fork(getDashboardDataList)])
}