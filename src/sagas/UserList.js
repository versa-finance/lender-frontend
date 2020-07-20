import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SERVER_REQUEST } from "../shared/Backend";
import { USER_LIST, USER_LIST_SUCCESS, USER_DETAIL } from 'constants/ActionTypes';
import { userList, getUserListSuccess, getUserDetailSuccess } from 'actions/UserList';




const getAllUserList = async () => {
   const response = await SERVER_REQUEST('user/list', 'post', {});
   //return [{'tes': 'vbb'}];
    if(response.success.StatusCode === 200){
    return  response.success.Data;
        }

}


const getSingleDetailForUser = async (data) => {
    const response = await SERVER_REQUEST('user/fetch_profile', 'post', data);
    return response;
}

function* getAllUserListing (){
    try {
        const getUserForList = yield call(getAllUserList);
             yield put(getUserListSuccess(getUserForList));
    }catch(error){

    }
}

function* getUserIndividualDetail (payload) {
    const data = payload.payload;
    try {
        const getUserIndividualDetail = yield call(getSingleDetailForUser, data);
        if(getUserIndividualDetail.success.StatusCode === 200){
            yield put(getUserDetailSuccess(getUserIndividualDetail.success.Data));
        }
    }catch (error){

    }
}

export function* getUserList () {
    yield takeEvery (USER_LIST, getAllUserListing);
}


export function* getUserDetail () {
    yield takeEvery (USER_DETAIL, getUserIndividualDetail);
}

export default function* rootSaga (){
    yield all ([fork(getUserList),
      fork(getUserDetail)
    ])
}