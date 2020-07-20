import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {SERVER_REQUEST} from "../shared/Backend";
import {
    CREATE_NEW_NETWORK, DELETE_NETWORK, GET_NETWORK_SMS_FILTER,
    UPDATE_EXISTING_NETWORK
} from "constants/ActionTypes";
import {getNetworkSmsFilterListSuccess, createNetworkSuccess} from "actions";


const removeNetwork = async (data) => {
    const res = await SERVER_REQUEST('network_provider_message/delete', 'post', data);
    return res;
}

const editExistingSms = async (data) => {
    const res = await SERVER_REQUEST('network_provider_message/update', 'post', data);
    return res;
}


const addNetwork = async (data) => {
    const res = await SERVER_REQUEST('network_provider_message/create', 'post', data);
    return res;
}


const getSmsList = async () => {
    const res = await SERVER_REQUEST('network_provider_message/list', 'post', {});
    return res;
}


function* deleteExistingNetwork(payload) {
    const data = payload.payload;
    console.log(data);
    try {
        const deleteExistingNetwork = yield call(removeNetwork, data);
        console.log(deleteExistingNetwork);
        if(deleteExistingNetwork.success.StatusCode === 200) {
            yield put(createNetworkSuccess(deleteExistingNetwork.success));
        }
    }catch(error){
        console.log(error);
    }
}



function* updateNewNetwork(payload) {
    const data = payload.payload;
    console.log(data);
    try {
        const updateNewNetwork = yield call(editExistingSms, data);
        console.log(updateNewNetwork);
         if(updateNewNetwork.success.StatusCode === 200) {
             yield put(createNetworkSuccess(updateNewNetwork.success));
         }
    }catch(error){
        console.log(error);
    }
}


function* addNewNetwork(payload) {
    const data = payload.payload;
    try {
        const addNewNetwork = yield call(addNetwork, data);
        if(addNewNetwork.success.StatusCode === 200){
            yield put(createNetworkSuccess(addNewNetwork.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* getSmsFilterLists(){
    try {
        const getSmsFilterLists = yield call(getSmsList);
        console.log(getSmsFilterLists);
        if(getSmsFilterLists.success.StatusCode === 200){
            yield put(getNetworkSmsFilterListSuccess(getSmsFilterLists.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}


export function* deleteNetwork () {
    yield takeEvery(DELETE_NETWORK, deleteExistingNetwork);
}

export function* updateExistingNetwork () {
    yield takeEvery(UPDATE_EXISTING_NETWORK, updateNewNetwork)
}

export function* createNewNetwork(){
    yield takeEvery(CREATE_NEW_NETWORK, addNewNetwork);
}


export function* getSmsFilter(){
    yield takeEvery(GET_NETWORK_SMS_FILTER, getSmsFilterLists);
}

export default function* rootSaga () {
    yield all([fork(getSmsFilter),
        fork(createNewNetwork),
        fork(updateExistingNetwork),
        fork(deleteNetwork)])
}