import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {SERVER_REQUEST} from "../shared/Backend";
import {CREATE_SYSTEM_USERS, GET_SYSTEM_USERS,
    UPDATE_SYSTEM_USERS
} from "constants/ActionTypes";
import {createSystemUsersSuccess, getSystemUsersSuccess} from "actions/SystemUsers";


const editSystemUsers = async (data) => {
    return await SERVER_REQUEST('admin/update', 'post', data);
};

const addSystemUsers = async (data) => {
    return await SERVER_REQUEST('admin/register', 'post', data);
};

const getSystemUsers = async () => {
    return await SERVER_REQUEST('admin/list', 'post', {});
};

function* updateSystemUsers(payload) {
    const data = payload.payload;
    console.log(data);
    try {
        const record = yield call(editSystemUsers, data);
        console.log(record);
         if(record.success.StatusCode === 200) {
             yield put(createSystemUsersSuccess(record.success));
         }
    }catch(error){
        console.log(error);
    }
}

function* createSystemUsers(payload) {
    const data = payload.payload;
    console.log('dataaa', data)
    try {
        const record = yield call(addSystemUsers, data);
        if(record.success.StatusCode === 200){
            yield put(createSystemUsersSuccess(record.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* getAllSystemUsers(){
    try {
        const record = yield call(getSystemUsers);
        console.log(record);
        if(record.success.StatusCode === 200){
            yield put(getSystemUsersSuccess(record.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}

export function* exportUpdateSystemUsers () {
    yield takeEvery(UPDATE_SYSTEM_USERS, updateSystemUsers)
}

export function* exportCreateSystemUsers(){
    yield takeEvery(CREATE_SYSTEM_USERS, createSystemUsers);
}

export function* exportAllSystemUsers(){
    yield takeEvery(GET_SYSTEM_USERS, getAllSystemUsers);
}

export default function* rootSaga () {
    yield all([fork(exportAllSystemUsers),
        fork(exportCreateSystemUsers),
        fork(exportUpdateSystemUsers)])
}