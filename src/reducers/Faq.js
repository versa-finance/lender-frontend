import { FAQ_SUCCESS, CREATE_FAQ_SUCCESS_MESSAGE, UPDATE_FAQ_SUCCESS_MESSAGE,
       CREATE_FAQ_CATEGORY_SUCCESS_MESSAGE, GET_ALL_FAQ_CATEGORIES,  CREATE_FAQ_CATEGORY, UPDATE_FAQ_CATEGORY_SUCCESS_MESSAGE } from "constants/ActionTypes";


const INIT_STATE = {
    faqs: [],
    aboutLender: [],
    eligibilityCriteria: [],
    loanOffers: [],
    repayment: [],
    myAccount: [],
    securityPrivacy: [],
    creditRating: [],
    faqCreationMessage: {},
    faqCategoryCreationMessage: {},
    faqCategories: [],
    faqItems: {},
    loading: true,
};

export default (state = INIT_STATE, actions) => {
    switch (actions.type){
        case GET_ALL_FAQ_CATEGORIES: {
            console.log(actions.payload);
            return {
                ...state,
                loading: false,
                faqCategories: [...actions.payload]
            }
        }
        case FAQ_SUCCESS: {
            console.log(actions.payload);
            return {
                ...state,
                loading: false,
                faqs: [...state.faqs, actions.payload],
                aboutLender: actions.payload['About Lender']  ? [...state.aboutLender, ...actions.payload['About Lender']] : [],
                eligibilityCriteria: actions.payload['Eligibility Criteria']  ? [...state.eligibilityCriteria, ...actions.payload['Eligibility Criteria']] : [],
                loanOffers: actions.payload['Loan Offers']  ? [...state.loanOffers, ...actions.payload['Loan Offers']] : [],
                repayment: actions.payload['Repayment'] ? [...state.repayment, ...actions.payload['Repayment']] : [],
                myAccount: actions.payload['My Account'] ? [...state.myAccount, ...actions.payload['My Account']] : [],
                securityPrivacy: actions.payload['Security & Privacy'] ? [...state.securityPrivacy, ...actions.payload['Security & Privacy']] : [],
                creditRating: actions.payload['Credit Rating'] ? [...state.creditRating, ...actions.payload['Credit Rating']] : [],
                faqItems: actions.payload
            }
        }
        case CREATE_FAQ_SUCCESS_MESSAGE: {
            return {
                ...state,
                faqCreationMessage: actions.payload
            }
        }
        case UPDATE_FAQ_SUCCESS_MESSAGE: {
            return {
                ...state,
                faqCreationMessage: actions.payload
            }
        }
        case CREATE_FAQ_CATEGORY_SUCCESS_MESSAGE: {
            return {
                ...state,
                faqCategoryCreationMessage: actions.payload
            }
        }
       /* case CREATE_FAQ_CATEGORY: {
            return {
                ...state,
                faqCategories: [actions.payload, ...state.faqCategories]
            }
        }*/
        case UPDATE_FAQ_CATEGORY_SUCCESS_MESSAGE: {
            return {
                ...state,
                faqCategoryCreationMessage: actions.payload
            }
        }

        default:
            return state;
    }
}