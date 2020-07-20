import {LOGS_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    logsData : [],
    loading: true
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type){
        case LOGS_SUCCESS: {
            console.log('dfghj', actions.payload);
            return {
                ...state,
                loading: false,
                logsData: actions.payload
            }
        }
        default:
            return state;
    }
}