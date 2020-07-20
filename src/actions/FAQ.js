import { FAQ, FAQ_SUCCESS, CREATE_FAQ, CREATE_FAQ_SUCCESS_MESSAGE, UPDATE_FAQ, UPDATE_FAQ_SUCCESS_MESSAGE, GET_FAQ_CATEGORIES,
       CREATE_FAQ_CATEGORY, CREATE_FAQ_CATEGORY_SUCCESS_MESSAGE, GET_ALL_FAQ_CATEGORIES, UPDATE_FAQ_CATEGORIES, UPDATE_FAQ_CATEGORY_SUCCESS_MESSAGE } from "constants/ActionTypes";

export const getFAQ = () => {
    return {
        type: FAQ
    }
};

export const getFaqSuccess = (data) => {
    return {
        type: FAQ_SUCCESS,
        payload: data
    }
};

export const createFaq = (data) => {
    return {
        type: CREATE_FAQ,
        payload: data
    }
};

export const getFAQCategories = () => {
    return {
        type: GET_FAQ_CATEGORIES
    }
};

export const createFaqCategory = (data) => {
    return {
        type: CREATE_FAQ_CATEGORY,
        payload: data
    }
};

export const createFaqCategorySuccessMessage = (data) => {
    return {
        type: CREATE_FAQ_CATEGORY_SUCCESS_MESSAGE,
        payload: data
    }
};

export const getAllFaqCategoriesDisplay = (data) => {
    return {
        type: GET_ALL_FAQ_CATEGORIES,
        payload: data
    }
};

export const createFaqSuccessMessage = (data) => {
    return {
        type: CREATE_FAQ_SUCCESS_MESSAGE,
        payload: data
    }
};

export const updateFaq = (data) => {
    return {
        type: UPDATE_FAQ,
        payload: data
    }
};

export const updateFaqCategory = (data) => {
    return {
        type: UPDATE_FAQ_CATEGORIES,
        payload: data
    }
};

export const updateFaqSuccessMessage = (data) => {
    return {
        type: UPDATE_FAQ_SUCCESS_MESSAGE,
        payload: data
    }
};


export const updateFaqCategorySuccessMessage = (data, payload) => {
    return {
        type: UPDATE_FAQ_CATEGORY_SUCCESS_MESSAGE,
        payload: data,
        data: payload
    }
};