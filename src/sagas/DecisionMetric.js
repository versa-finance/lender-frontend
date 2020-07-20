import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {GET_DECISION_METRIC} from "constants/ActionTypes";
import {SERVER_REQUEST} from "../shared/Backend";

const getMetric = async () => {
    const res = await SERVER_REQUEST('decision_matrix/fetch', 'post', {});
    return res;
}


function* getAllDecisionMetric(){
    try {
        const getAllDecisionMetric = yield call(getMetric);
        console.log(getAllDecisionMetric);
    }catch(error){

    }
}


export function* getDecisionMetrics(){
    yield takeEvery(GET_DECISION_METRIC, getAllDecisionMetric)
}

export default function* rootSaga () {
    yield all([fork(getDecisionMetrics)])
}