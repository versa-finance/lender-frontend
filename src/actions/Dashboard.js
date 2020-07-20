import {FETCH_DASHBOARD_DATA, FETCH_DASHBOARD_DATA_SUCCESS} from "constants/ActionTypes";


export const getDashboardDataSuccessList = () => {
    return {
        type: FETCH_DASHBOARD_DATA
    }
};


export const DashboardDataSuccessList = (data) => {
    return {
        type: FETCH_DASHBOARD_DATA_SUCCESS,
        payload: data
    }
};
