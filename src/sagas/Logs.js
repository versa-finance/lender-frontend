import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SERVER_REQUEST } from "../shared/Backend";
import { LOGS } from 'constants/ActionTypes';
import {getLogsSuccess} from "actions";

const getAllLogsList = async () => {
    return await SERVER_REQUEST('log/list', 'post', {});
};

function* getAllLogsListing (){
    try {
        const getUserForList = yield call(getAllLogsList);
        yield put(getLogsSuccess(getUserForList));
    }catch(error){

    }
}

export function* getLogList () {
    yield takeEvery (LOGS, getAllLogsListing);
}

export default function* rootSaga (){
    yield all ([fork(getLogList)])
}