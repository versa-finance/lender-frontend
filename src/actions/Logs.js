import {LOGS, LOGS_SUCCESS} from "constants/ActionTypes";

export const getLogs = () => {
    return {
        type: LOGS
    }
};

export const getLogsSuccess = (data) => {
    return {
        type: LOGS_SUCCESS,
        payload: data
    }
};