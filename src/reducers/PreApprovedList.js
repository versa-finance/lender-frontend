import {
    GET_PRE_APPROVED_LIST_SUCCESS, UPLOAD_PRE_APPROVED_LIST_SUCCESS,
    UPDATE_PRE_APPROVED_LIST, GET_PRE_APPROVED_LIST_COMPANY_SUCCESS,
    CREATE_PRE_APPROVED_LIST_COMPANY_SUCCESS, UPDATE_PRE_APPROVED_LIST_COMPANY
} from "constants/ActionTypes";

const INIT_STATE = {
    approvedListCompany: [],
    approvedListStaffs: [],
    approvedListCompanySuccess: {},
    approvedListStaffsSuccess: {},
    loading: true,
    updateApprovedListMessage: ''
}

export default (state = INIT_STATE, actions) => {
    switch(actions.type) {
        case GET_PRE_APPROVED_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                approvedListStaffs: actions.payload
            }
        }
        case GET_PRE_APPROVED_LIST_COMPANY_SUCCESS: {
            return {
                ...state,
                loading: false,
                approvedListCompany: actions.payload
            }
        }
        case CREATE_PRE_APPROVED_LIST_COMPANY_SUCCESS: {
            return {
                ...state,
                approvedListCompanySuccess: actions.payload
            }
        }
        case UPLOAD_PRE_APPROVED_LIST_SUCCESS: {
            return {
                ...state,
                approvedListStaffsSuccess: actions.payload
            }
        }
        case UPDATE_PRE_APPROVED_LIST: {
            return {
                ...state,
                updateApprovedListMessage: actions.payload
            }
        }
        case UPDATE_PRE_APPROVED_LIST_COMPANY: {
            return {
                ...state,
                updateApprovedListMessage: actions.payload
            }
        }
        default:
            return state;
    }
}