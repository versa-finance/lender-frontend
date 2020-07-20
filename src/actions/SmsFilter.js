import {GET_NETWORK_SMS_FILTER, GET_NETWORK_SMS_FILTER_SUCCESS, CREATE_NEW_NETWORK, CREATE_NETWORK_SUCCESS
     , UPDATE_EXISTING_NETWORK, DELETE_NETWORK} from "constants/ActionTypes";

export const getSmsFilterList = () => {
    return {
        type: GET_NETWORK_SMS_FILTER
    }
};

export const getNetworkSmsFilterListSuccess = (data) => {
    return {
        type: GET_NETWORK_SMS_FILTER_SUCCESS,
        payload: data
    }
};

export const createNetwork = (data) => {
    return {
        type: CREATE_NEW_NETWORK,
        payload: data
    };
};

export const createNetworkSuccess = (data) => {
    return {
        type: CREATE_NETWORK_SUCCESS,
        payload: data
    }
}

export const updateNetwork = (data) => {
    return {
        type: UPDATE_EXISTING_NETWORK,
        payload: data
    }
}

export const deleteNetwork = (data) => {
    return {
        type: DELETE_NETWORK,
        payload: data
    }
}