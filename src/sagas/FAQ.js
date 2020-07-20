import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SERVER_REQUEST } from "../shared/Backend";
import {FAQ, CREATE_FAQ, UPDATE_FAQ, GET_FAQ_CATEGORIES, CREATE_FAQ_CATEGORY, UPDATE_FAQ_CATEGORIES} from "constants/ActionTypes";
import { getFaqSuccess, createFaqSuccessMessage, updateFaqSuccessMessage, createFaqCategorySuccessMessage,
    getAllFaqCategoriesDisplay, updateFaqCategorySuccessMessage} from "actions";


const getFaqData = async () => {
    const res = await SERVER_REQUEST('faq/list', 'post', {});
      return res;
};

const getCategoriesForFaq = async () => {
    const res = await SERVER_REQUEST('faq_category/list', 'post', {});
    return res;
}

const addFaq = async (data) => {
    const res = await SERVER_REQUEST('faq/create', 'post', data);
      return res;
};

const editFaqCategory = async (data) => {
    const res = await SERVER_REQUEST('faq_category/update', 'post', data);
    return res;
};

const editFaq = async (data) => {
    const res = await SERVER_REQUEST('faq/update', 'post', data);
    return res;
};

const addFaqCategory = async (data) => {
    const res = await SERVER_REQUEST('faq_category/create', 'post', data);
    return res;
}


function* getAllFAQ() {
    try {
        const getAllFaq = yield call(getFaqData);
        if(getAllFaq.success.StatusCode === 200){
            yield put(getFaqSuccess(getAllFaq.success.Data))

        }

    }catch(err){

    }
}

function* createNewFaq(payload){
    const data = payload.payload;
    try {
        const createNewFaq = yield call(addFaq, data);
        if(createNewFaq.success.StatusCode === 200){
            yield put(createFaqSuccessMessage(createNewFaq.success));
        }
    }catch(error){

    }
}

function* createNewFaqCategory(payload){
    const data = payload.payload;
    try {
        const createNewFaqCategory = yield call(addFaqCategory, data);
        console.log(createNewFaqCategory);
        if(createNewFaqCategory.success.StatusCode === 200){
            yield put(createFaqCategorySuccessMessage(createNewFaqCategory.success));
        }
    }catch(error){

    }
}


function* updateExistFaq(payload){
    const data = payload.payload;
    try {
        const updateExistFaq = yield call(editFaq, data);
        if(updateExistFaq.success.StatusCode === 200){
            yield put(updateFaqSuccessMessage(updateExistFaq.success));
        }
    }catch(error){

    }
}

function* updateExistingFaqCategory(payload){
    const data = payload.payload;
    try {
        const updateExistingFaqCategory = yield call(editFaqCategory, data);

        if(updateExistingFaqCategory.success.StatusCode === 200) {
            yield put(updateFaqCategorySuccessMessage(updateExistingFaqCategory.success, data));
        }
    }catch(error){

    }
}

function* getAllFaqCategories(){
    try {
        const getAllFaqCategories = yield call(getCategoriesForFaq);
        if(getAllFaqCategories.success.StatusCode === 200) {
            yield put(getAllFaqCategoriesDisplay(getAllFaqCategories.success.Data));
        }
    }catch(error){

    }
}


export function* getfaq(){
    yield takeEvery(FAQ, getAllFAQ);
}

export function* createFaq(){
    yield takeEvery(CREATE_FAQ, createNewFaq);
}

export function* updateFaq(){
    yield takeEvery(UPDATE_FAQ, updateExistFaq);
}

export function* updateFaqCategory(){
    yield takeEvery(UPDATE_FAQ_CATEGORIES, updateExistingFaqCategory);
}

export function* getFaqCategories(){
    yield takeEvery(GET_FAQ_CATEGORIES, getAllFaqCategories);
}

export function* createFaqCategory(){
    yield takeEvery(CREATE_FAQ_CATEGORY, createNewFaqCategory);
}


export default function* rootSaga (){
    yield all([fork(getfaq),
        fork(createFaq),
        fork(updateFaq),
        fork(getFaqCategories),
        fork(createFaqCategory),
        fork(updateFaqCategory)
    ])
}