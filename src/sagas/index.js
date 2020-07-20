import { all } from 'redux-saga/effects';
import mailSagas from './Mail';
import toDoSagas from './Todo';
import contactSagas from './Contact';
import chatSagas from './Chat';
import authSagas from './Auth';
import userListSagas from './UserList';
import manageLoans from './ManageLoans';
import faq from './FAQ';
import requestLoans from './LoanRequests';
import smsFilter from './SmsFilter';
import bankFilter from './BankFilter';
import defaultMessage from './DefaultMessage';
import dashboard from './Dashboard';
import logs from './Logs';
import preApprovedList from './PreApprovedList';
import systemUsers from './SystemUsers';

export default function* rootSaga (getState) {
    yield all ([
        mailSagas (),
        toDoSagas (),
        contactSagas (),
        chatSagas (),
        authSagas (),
        userListSagas(),
        manageLoans(),
        faq(),
        requestLoans(),
        smsFilter(),
        bankFilter(),
        defaultMessage(),
        dashboard(),
        logs(),
        preApprovedList(),
        systemUsers(),
    ]);
}
