import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import ChatData from './Chat';
import Contact from './Contact';
import Mail from './Mail';
import ToDo from './ToDo';
import Auth from './Auth';
import UserList from './UserList';
import ManageLoans from './ManageLoans';
import Faqs from './Faq';
import LoanRequests from './LoanRequests';
import SmsFilter from './SmsFilter';
import BankFilter from './BankFilter';
import dashboard from './Dashboard';
import DefaultMessage from './DefaultMessage';
import Logs from './Logs';
import PreApprovedList from './PreApprovedList';
import SystemsUsers from './SystemUsers';


const reducers = combineReducers ({
    routing: routerReducer,
    settings: Settings,
    chatData: ChatData,
    contacts: Contact,
    mail: Mail,
    toDo: ToDo,
    auth: Auth,
    userList: UserList,
    manageLoans: ManageLoans,
    faq: Faqs,
    loanRequests: LoanRequests,
    smsFilter: SmsFilter,
    dashboard: dashboard,
    bankFilter: BankFilter,
    defaultMssg: DefaultMessage,
    logs: Logs,
    preApprovedList: PreApprovedList,
    systemsUsers: SystemsUsers,
});

export default reducers;
