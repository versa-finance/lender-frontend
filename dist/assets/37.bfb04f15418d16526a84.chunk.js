webpackJsonp([37],{1219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(3),i=a(o),u=n(107),_=n(40),m=n(211),f=a(m),h=n(213),p=a(h),E=n(1937),C=a(E),v=n(1939),L=a(v),T=n(1942),R=a(T),O=n(488),A=a(O),D=n(60),g=a(D),U=n(221),x=n(109),b=a(x),N=function(e){function t(){s(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContacts=function(t){e.props.filterContacts(t)},e.filterUsers=function(t){e.props.filterUsers(t)},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.onSelectUser=function(t){e.props.onSelectUser(t),setTimeout(function(){e.props.hideLoader()},1500)},e.submitComment=function(){""!==e.props.message&&e.props.submitComment()},e.updateMessageValue=function(t){e.props.updateMessageValue(t.target.value)},e.Communication=function(){var t=e.props,n=t.message,a=t.selectedUser,s=t.conversation,r=s.conversationData;return i.default.createElement("div",{className:"chat-main"},i.default.createElement("div",{className:"chat-main-header"},i.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onChatToggleDrawer.bind(e)},i.default.createElement("i",{className:"zmdi zmdi-comment-text"})),i.default.createElement("div",{className:"chat-main-header-info"},i.default.createElement("div",{className:"chat-avatar mr-2"},i.default.createElement("div",{className:"chat-avatar-mode"},i.default.createElement("img",{src:a.thumb,className:"rounded-circle size-60",alt:""}),i.default.createElement("span",{className:"chat-mode "+a.status}))),i.default.createElement("div",{className:"chat-contact-name"},a.name))),i.default.createElement(b.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},i.default.createElement(L.default,{conversationData:r,selectedUser:a})),i.default.createElement("div",{className:"chat-main-footer"},i.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},i.default.createElement("div",{className:"col"},i.default.createElement("div",{className:"form-group"},i.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:n,placeholder:"Type and hit enter to send message"}))),i.default.createElement("div",{className:"chat-sent"},i.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},i.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return i.default.createElement("div",{className:"chat-sidenav-main"},i.default.createElement("div",{className:" bg-primary chat-sidenav-header"},i.default.createElement("div",{className:"chat-user-hd"},i.default.createElement("span",{className:"icon-btn back-to-chats-button",onClick:function(){e.props.userInfoState(1)}},i.default.createElement("i",{className:"zmdi zmdi-arrow-back text-white"}))),i.default.createElement("div",{className:"chat-user chat-user-center"},i.default.createElement("div",{className:"chat-avatar"},i.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar rounded-circle size-60 huge",alt:"John Doe"})),i.default.createElement("div",{className:"user-name h4 my-2 text-white"},"Robert Johnson"))),i.default.createElement("div",{className:"chat-sidenav-content"},i.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},i.default.createElement("form",{className:"p-4"},i.default.createElement("div",{className:"form-group mt-4"},i.default.createElement("label",null,"Mood"),i.default.createElement(u.Input,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return i.default.createElement("div",{className:"chat-sidenav-main"},i.default.createElement("div",{className:"chat-sidenav-header"},i.default.createElement("div",{className:"chat-user-hd"},i.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.props.userInfoState(2)}},i.default.createElement("div",{className:"chat-avatar-mode"},i.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),i.default.createElement("span",{className:"chat-mode online"}))),i.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},i.default.createElement("div",{className:"module-title"},i.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),i.default.createElement("div",{className:"module-user-detail"},i.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),i.default.createElement("div",{className:"search-wrapper"},i.default.createElement(A.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.props.searchChatUser}))),i.default.createElement("div",{className:"chat-sidenav-content"},i.default.createElement(u.Nav,{tabs:!0,className:"nav-fill"},i.default.createElement(u.NavItem,{className:"nav-item"},i.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),i.default.createElement(u.NavItem,null,i.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),i.default.createElement(u.TabContent,{activeTab:e.state.activeTab},i.default.createElement(u.TabPane,{tabId:"1"},i.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.chatUsers.length?i.default.createElement("div",{className:"p-5"},e.props.userNotFound):i.default.createElement(C.default,{chatUsers:e.props.chatUsers,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),i.default.createElement(u.TabPane,{tabId:"2"},i.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.contactList.length?i.default.createElement("div",{className:"p-5"},e.props.userNotFound):i.default.createElement(R.default,{contactList:e.props.contactList,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e.handleChange=function(t,n){e.setState({value:n})},e.handleChangeIndex=function(t){e.setState({value:t})},e.showCommunication=function(){return i.default.createElement("div",{className:"chat-box"},i.default.createElement("div",{className:"chat-box-main"},null===e.props.selectedUser?i.default.createElement("div",{className:"loader-view"},i.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),i.default.createElement("h1",{className:"text-muted"}," ",i.default.createElement(g.default,{id:"chat.selectUserChat"})),i.default.createElement(u.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onChatToggleDrawer.bind(e)},i.default.createElement(g.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={activeTab:"1"},e}return c(t,e),d(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),d(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.hideLoader()},1500)}},{key:"updateSearchChatUser",value:function(e){this.props.updateSearchChatUser(e.target.value),this.props.filterContacts(e.target.value),this.props.filterUsers(e.target.value)}},{key:"onChatToggleDrawer",value:function(){this.props.onChatToggleDrawer()}},{key:"render",value:function(){var e=this.props,t=e.loader,n=e.userState,a=e.drawerState;e.selectedUser;return i.default.createElement("div",{className:"app-wrapper app-wrapper-module"},i.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},i.default.createElement("div",{className:"chat-module-box"},i.default.createElement("div",{className:"d-block d-xl-none"},i.default.createElement(f.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:a,onOpenChange:this.onChatToggleDrawer.bind(this),sidebar:1===n?this.ChatUsers():this.AppUsersInfo()()})),i.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===n?this.ChatUsers():this.AppUsersInfo()),t?i.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},i.default.createElement(p.default,null)):this.showCommunication())))}}]),t}(o.Component),P=function(e){var t=e.chatData;return{width:e.settings.width,loader:t.loader,userNotFound:t.userNotFound,drawerState:t.drawerState,selectedSectionId:t.selectedSectionId,userState:t.userState,searchChatUser:t.searchChatUser,contactList:t.contactList,selectedUser:t.selectedUser,message:t.message,chatUsers:t.chatUsers,conversationList:t.conversationList,conversation:t.conversation}},H=(0,_.connect)(P,{fetchChatUser:U.fetchChatUser,fetchChatUserConversation:U.fetchChatUserConversation,filterContacts:U.filterContacts,filterUsers:U.filterUsers,onSelectUser:U.onSelectUser,hideLoader:U.hideLoader,userInfoState:U.userInfoState,submitComment:U.submitComment,updateMessageValue:U.updateMessageValue,updateSearchChatUser:U.updateSearchChatUser,onChatToggleDrawer:U.onChatToggleDrawer})(N);t.default=H;var j=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"mapStateToProps","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(H,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_createClass","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(i,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(f,"_rcDrawer2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(p,"_CircularProgress2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(C,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(L,"_index4","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(R,"_index6","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(A,"_SearchBox2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(g,"_IntlMessages2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(b,"_CustomScrollbars2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"mapStateToProps","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(H,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(j,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/redux/index.js"))}()},1937:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1938),l=a(c),d=function(e){var t=e.chatUsers,n=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(l.default,{key:t,chat:e,selectedSectionId:n,onSelectUser:a})}))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ChatUserList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"ChatUserList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"))}()},1938:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.chat,n=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(n===t.id?"active":""),onClick:function(){a(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1939:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1940),l=a(c),d=n(1941),o=a(d),i=function(e){var t=e.conversationData,n=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(o.default,{key:t,conversation:e}):r.default.createElement(l.default,{key:t,conversation:e,user:n})}))},u=i;t.default=u;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Conversation","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(o,"_index4","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"Conversation","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"))}()},1940:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.conversation,n=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:n.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1941:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1942:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1943),l=a(c),d=function(e){var t=e.onSelectUser,n=e.selectedSectionId,a=e.contactList;return r.default.createElement("div",{className:"chat-user"},a.map(function(e,a){return r.default.createElement(l.default,{key:a,user:e,selectedSectionId:n,onSelectUser:t})}))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ContactList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"ContactList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"))}()},1943:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.onSelectUser,n=e.selectedSectionId,a=e.user;return r.default.createElement("div",{className:"chat-user-item "+(n===a.id?"active":""),onClick:function(){t(a)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:a.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+a.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},a.name),r.default.createElement("div",{className:"chat-info-des"},a.mood.substring(0,30)+"..."))))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=37.bfb04f15418d16526a84.chunk.js.map