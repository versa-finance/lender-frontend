import {FETCH_DASHBOARD_DATA_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    dashboardData: [],
    loading: true,
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type) {
        case FETCH_DASHBOARD_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                dashboardData: actions.payload
            }
        }
        default:
            return state;
    }
}