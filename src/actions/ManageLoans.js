import {
    MANAGE_LOANS, MANAGE_LOANS_SUCCESS, CREATE_LOANS, CREATE_LOAN_SUCCESS_MESSAGE,
    UPDATE_LOAN, DELETE_LOAN, DELETE_LOAN_MESSAGE, APPROVE_LOAN, DISAPPROVE_LOAN
} from "constants/ActionTypes";

export const getLoans = () => {
    return {
        type: MANAGE_LOANS
    }
}

export const getLoansSuccess = (data) => {
    return {
        type: MANAGE_LOANS_SUCCESS,
        payload: data
    }
}


export const createLoans = (data) => {
    console.log('oo');
    console.log(data);
    return {
        type: CREATE_LOANS,
        payload: data
    }
};

export const createLoanSuccessMessage = (data) => {
  return {
      type: CREATE_LOAN_SUCCESS_MESSAGE,
      payload: data
  }
};

export const updateLoans = (data) => {
    return {
      type: UPDATE_LOAN,
      payload: data
    }
};

export const deleteLoans = (data, index, id) => {
  return {
      type: DELETE_LOAN,
      payload: data,
      data: index,
      dataId: id
  }
};

export const deleteLoanMessage = (data) => {
    return {
        type: DELETE_LOAN_MESSAGE,
        payload: data
    }
};

export const approveLoan = (data) => {
    return {
        type: APPROVE_LOAN,
        payload: data
    }
}

export const disapproveLoan = (data) => {
    return {
        type: DISAPPROVE_LOAN,
        payload: data
    }
}