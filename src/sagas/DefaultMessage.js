import {all, call, fork, takeEvery, put} from 'redux-saga/effects';
import {CREATE_DEFAULT_MESSAGE, GET_DEFAULT_MESSAGE, UPDATE_DEFAULT_MESSAGE, DELETE_DEFAULT_MESSAGE} from "constants/ActionTypes";
import {SERVER_REQUEST} from "../shared/Backend";
import {createDefaultMessageSuccess, getDefaultMessageSuccess} from "actions";

const addMessage = async (data) => {
    const res = await SERVER_REQUEST('default_message/create', 'post', data);
    return res;
}

const getAllMessage = async () => {
    const res = await SERVER_REQUEST('default_message/list', 'post', {});
    return res;
};

const editExistingDefaultMessage = async (data) => {
    const res = await SERVER_REQUEST('default_message/update', 'post', data);
    return res;
};

const removeDefaultMessage = async (data) => {
    const res = await SERVER_REQUEST('default_message/delete', 'post', data);
    return res;
}


function* getAllDefaultMessage () {
    try {
        const getAllDefaultMessage = yield call(getAllMessage);
        console.log(getAllDefaultMessage);
        if(getAllDefaultMessage.success.StatusCode === 200){
            yield put(getDefaultMessageSuccess(getAllDefaultMessage.success.Data));
        }
    }catch(error) {
        console.log(error)
    }
}


function* updateNewDefaultMessage (payload) {
    try {
        const data = payload.payload;
        const updateNewDefaultMessage = yield call(editExistingDefaultMessage, data);
        console.log(updateNewDefaultMessage);
        if(updateNewDefaultMessage.success.StatusCode === 200) {
            yield put(createDefaultMessageSuccess(updateNewDefaultMessage.success));
        }

    }catch(error){
        console.log(error);
    }
}

function* deleteExistingDefaultMessage(payload) {
    const data = payload.payload;
    try {
        const deleteExistingDefaultMessage = yield call(removeDefaultMessage, data);
        console.log(deleteExistingDefaultMessage);
        if(deleteExistingDefaultMessage.success.StatusCode === 200){
            yield put(createDefaultMessageSuccess(deleteExistingDefaultMessage.success))
        }
    }catch(error){
        console.log(error);
    }
}

function* addNewDefaultMessage (payload) {
    const data = payload.payload;
    console.log(data);

    try {
        const addNewDefaultMessage = yield call(addMessage, data);
        console.log(addNewDefaultMessage);
        if(addNewDefaultMessage.success.StatusCode === 200) {
            yield put(createDefaultMessageSuccess(addNewDefaultMessage.success));
        }
    }catch(error){

    }
}


export function* getDefaultMessage () {
    yield takeEvery(GET_DEFAULT_MESSAGE, getAllDefaultMessage);
}

export function* createDefaultMessages () {
    yield takeEvery(CREATE_DEFAULT_MESSAGE, addNewDefaultMessage)
}

export function* updateExistingDefaultMessage () {
    yield takeEvery(UPDATE_DEFAULT_MESSAGE, updateNewDefaultMessage);
}

export function* deleteDefaultBank () {
    yield takeEvery(DELETE_DEFAULT_MESSAGE, deleteExistingDefaultMessage)
}


export default function* rootSaga () {
    yield all([fork(createDefaultMessages),
               fork(getDefaultMessage),
               fork(updateExistingDefaultMessage),
               fork(deleteDefaultBank)]);
}