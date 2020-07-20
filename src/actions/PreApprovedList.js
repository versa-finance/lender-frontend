import {GET_PRE_APPROVED_LIST, GET_PRE_APPROVED_LIST_SUCCESS, UPLOAD_PRE_APPROVED_LIST, UPLOAD_PRE_APPROVED_LIST_SUCCESS,
    UPDATE_PRE_APPROVED_LIST, DELETE_PRE_APPROVED_LIST, GET_PRE_APPROVED_LIST_COMPANY, GET_PRE_APPROVED_LIST_COMPANY_SUCCESS,
    CREATE_PRE_APPROVED_LIST_COMPANY, CREATE_PRE_APPROVED_LIST_COMPANY_SUCCESS, UPDATE_PRE_APPROVED_LIST_COMPANY,
    DELETE_PRE_APPROVED_LIST_COMPANY} from "constants/ActionTypes";


export const getPreApprovedList = (data) => {
  return {
      type: GET_PRE_APPROVED_LIST,
      payload: data
  }
};

export const getPreApprovedListSuccess = (data) => {
    return {
        type: GET_PRE_APPROVED_LIST_SUCCESS,
        payload: data
    }
};

export const uploadPreApprovedList = (data) => {
    return {
        type: UPLOAD_PRE_APPROVED_LIST,
        payload: data
    }
};

export const uploadPreApprovedListSuccess = (data) => {
    return {
        type: UPLOAD_PRE_APPROVED_LIST_SUCCESS,
        payload: data
    }
}

export const updatePreApprovedListItem = (data) => {
    return {
     type: UPDATE_PRE_APPROVED_LIST,
     payload: data
    }
};

export const deletePreApprovedListItem = (data) => {
    return {
        type: DELETE_PRE_APPROVED_LIST,
        payload: data
    }
};

export const getPreApprovedListCompany = () => {
    return {
        type: GET_PRE_APPROVED_LIST_COMPANY
    }
};

export const getPreApprovedListCompanySuccess = (data) => {
    return {
        type: GET_PRE_APPROVED_LIST_COMPANY_SUCCESS,
        payload: data
    }
};

export const createPreApprovedCompanyList = (data) => {
    return {
        type: CREATE_PRE_APPROVED_LIST_COMPANY,
        payload: data
    }
};

export const createPreApprovedListCompanySuccess = (data) => {
    return {
        type: CREATE_PRE_APPROVED_LIST_COMPANY_SUCCESS,
        payload: data
    }
}

export const updatePreApprovedListCompanyItem = (data) => {
    return {
        type: UPDATE_PRE_APPROVED_LIST_COMPANY,
        payload: data
    }
};

export const deletePreApprovedListCompanyItem = (data) => {
    return {
        type: DELETE_PRE_APPROVED_LIST_COMPANY,
        payload: data
    }
};