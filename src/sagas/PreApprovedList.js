import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    CREATE_NEW_BANK,
    CREATE_PRE_APPROVED_LIST_COMPANY,
    DELETE_BANK, DELETE_PRE_APPROVED_LIST, DELETE_PRE_APPROVED_LIST_COMPANY,
    GET_BANK_SMS_FILTER, GET_PRE_APPROVED_LIST, GET_PRE_APPROVED_LIST_COMPANY,
    UPDATE_EXISTING_BANK, UPDATE_PRE_APPROVED_LIST_COMPANY, UPLOAD_PRE_APPROVED_LIST
} from "constants/ActionTypes";
import {
    getBankFilterSuccess,
    createPreApprovedListCompanySuccess,
    getPreApprovedListSuccess,
    getPreApprovedListCompanySuccess,
    updatePreApprovedListCompanyItem, uploadPreApprovedListSuccess
} from "actions";
import {SERVER_REQUEST} from "../shared/Backend";


const deleteCompany = async (data) => {
    return await SERVER_REQUEST('company/delete', 'post', data);
}

const updateCompany = async (data) => {
    return await SERVER_REQUEST('company/update', 'post', data);
}

const createCompany = async (data) => {
    return await SERVER_REQUEST('company/create', 'post', data);
};

const getCompanyList = async () => {
    return await SERVER_REQUEST('company/list', 'post', {});
}




const uploadPreApprovedList = async (data) => {
    return await SERVER_REQUEST('pre_approved_list/create', 'post', data);
};

const getPreApprovedList = async (data) => {
    return await SERVER_REQUEST('pre_approved_list/list', 'post', data);
};

const deletePreApprovedList = async (data) => {
    console.log('data', data)
    return await SERVER_REQUEST('pre_approved_list/delete', 'post', data);
}



function* deleteExistingCompany(payload) {
    const data = payload.payload;
    try {
        const record = yield call(deleteCompany, data);
        console.log(record);
        if(record.success.StatusCode === 200) {
            yield put(createPreApprovedListCompanySuccess(record.success));
        }
    } catch(error){
        console.log(error);
    }
}

function* updateNewCompany(payload){
    const data = payload.payload;
    console.log('updatefg',data);
    try {
        const record = yield call(updateCompany, data);
        console.log('update',record);
        if(record.success.StatusCode === 200) {
            yield put(updatePreApprovedListCompanyItem(record.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* createNewCompany(payload){
    const data = payload.payload;
    try {
        const record = yield call(createCompany, data)
        console.log(record);
        if(record.success.StatusCode === 200) {
            yield put(createPreApprovedListCompanySuccess(record.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* getAllCompanyList(){
    try {
        const record = yield call(getCompanyList);
        if(record.success.StatusCode === 200) {
            yield put(getPreApprovedListCompanySuccess(record.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}





function* uploadList(payload){
    const data = payload.payload;
    try {
        const record = yield call(uploadPreApprovedList, data)
        console.log(record);
        if(record.success.StatusCode === 200) {
            yield put(uploadPreApprovedListSuccess(record.success));
        }
    }catch(error){
        console.log(error);
    }
}

function* getAllPreApprovedList(payload){
    const data = payload.payload;
    try {
        const record = yield call(getPreApprovedList, data);
        if(record.success.StatusCode === 200) {
            yield put(getPreApprovedListSuccess(record.success.Data));
        }
    }catch(error){
        console.log(error);
    }
}

function* deletePreApprovedListItem(payload) {
    const data = payload.payload;
    try {
        const record = yield call(deletePreApprovedList, data);
        console.log(record);
        if(record.success.StatusCode === 200) {
            yield put(uploadPreApprovedListSuccess(record.success));
        }
    } catch(error){
        console.log(error);
    }
}

export function* exportDeleteCompany(){
    yield takeEvery(DELETE_PRE_APPROVED_LIST_COMPANY, deleteExistingCompany)
}

export function* exportUpdateNewCompany(){
    yield takeEvery(UPDATE_PRE_APPROVED_LIST_COMPANY, updateNewCompany);
}

export function* exportCreateNewCompany(){
    yield takeEvery(CREATE_PRE_APPROVED_LIST_COMPANY, createNewCompany)
}

export function* exportCompanyList(){
    yield takeEvery(GET_PRE_APPROVED_LIST_COMPANY, getAllCompanyList)
}



export function* exportUploadPreApprovedList(){
    yield takeEvery(UPLOAD_PRE_APPROVED_LIST, uploadList)
}

export function* exportPreApprovedList(){
    yield takeEvery(GET_PRE_APPROVED_LIST, getAllPreApprovedList)
}

export function* exportDeletePreApprovedList(){
    yield takeEvery(DELETE_PRE_APPROVED_LIST, deletePreApprovedListItem)
}

export default function* rootSaga () {
    yield all([fork(exportCompanyList),
        fork(exportCreateNewCompany),
        fork(exportUpdateNewCompany),
        fork(exportDeleteCompany),
        fork(exportUploadPreApprovedList),
        fork(exportPreApprovedList),
        fork(exportDeletePreApprovedList)
        ])
}