import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {CREATE_NEW_BANK, DELETE_BANK, GET_BANK_SMS_FILTER, UPDATE_EXISTING_BANK} from "constants/ActionTypes";
import {getBankFilterSuccess, createBankSuccess, createNetworkSuccess} from "actions";
import {SERVER_REQUEST} from "../shared/Backend";


const removeBank = async (data) => {
    const res = await SERVER_REQUEST('bank_provider_message/delete', 'post', data);
    return res;
}

const editExistingBank = async (data) => {
    const res = await SERVER_REQUEST('bank_provider_message/update', 'post', data);
    return res;
}


const addBank = async (data) => {
    const res = await SERVER_REQUEST('bank_provider_message/create', 'post', data);
    return res;
}


const getBankSmsFilterList = async () => {
    const res = await SERVER_REQUEST('bank_provider_message/list', 'post', {});
    return res;
}

function* deleteExistingBank(payload) {
    const data = payload.payload;
    try {
        const deleteExistingBank = yield call(removeBank, data);
        console.log(deleteExistingBank);
        if(deleteExistingBank.success.StatusCode === 200) {
            yield put(createBankSuccess(deleteExistingBank.success));
        }
    } catch(error){
        console.log(error);
    }
}

function* updateNewBank(payload){
    const data = payload.payload;
    console.log(data);
    try {
        const updateNewBank = yield call(editExistingBank, data);
        console.log(updateNewBank);
        if(updateNewBank.success.StatusCode === 200) {
            yield put(createBankSuccess(updateNewBank.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* addNewBank(payload){
    const data = payload.payload;
    try {
        const addNewBank = yield call(addBank, data)
        console.log(addNewBank);
        if(addNewBank.success.StatusCode === 200) {
            yield put(createBankSuccess(addNewBank.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* getBankFilterList(){
    try {
        const getBankFilterList = yield call(getBankSmsFilterList);
        console.log(getBankFilterList);
        if(getBankFilterList.success.StatusCode === 200) {
            yield put(getBankFilterSuccess(getBankFilterList.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}

export function* deleteBank(){
    yield takeEvery(DELETE_BANK, deleteExistingBank)
}

export function* updateExistingBank(){
    yield takeEvery(UPDATE_EXISTING_BANK, updateNewBank);
}

export function* createNewBank(){
    yield takeEvery(CREATE_NEW_BANK, addNewBank)
}

export function* getBankFilter(){
    yield takeEvery(GET_BANK_SMS_FILTER, getBankFilterList)
}

export default function* rootSaga () {
    yield all([fork(getBankFilter),
    fork(createNewBank),
    fork(updateExistingBank),
    fork(deleteBank)])
}