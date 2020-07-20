import {GET_BANK_SMS_FILTER, GET_BANK_SMS_FILTER_SUCCESS, CREATE_NEW_BANK, CREATE_BANK_SUCCESS, UPDATE_EXISTING_BANK, DELETE_BANK} from "constants/ActionTypes";


export const getBankFilterList = () => {
  return {
      type: GET_BANK_SMS_FILTER
  }
};

export const getBankFilterSuccess = (data) => {
    return {
        type: GET_BANK_SMS_FILTER_SUCCESS,
        payload: data
    }
};

export const createBank = (data) => {
    return {
        type: CREATE_NEW_BANK,
        payload: data
    }
};

export const createBankSuccess = (data) => {
    return {
        type: CREATE_BANK_SUCCESS,
        payload: data
    }
}

export const updateBank = (data) => {
    return {
     type: UPDATE_EXISTING_BANK,
     payload: data
    }
};

export const deleteBank = (data) => {
    return {
        type: DELETE_BANK,
        payload: data
    }
}