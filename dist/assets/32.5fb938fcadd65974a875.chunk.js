webpackJsonp([32],{1189:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),d=a(3),i=s(d),_=a(94),u=a(41),m=a(212),f=s(m),p=a(214),g=s(p),h=a(1735),E=s(h),R=a(1737),C=s(R),v=a(1740),T=s(v),O=a(487),A=s(O),D=a(58),b=s(D),U=a(224),x=a(107),L=s(x),N=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContacts=function(t){e.props.filterContacts(t)},e.filterUsers=function(t){e.props.filterUsers(t)},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.onSelectUser=function(t){e.props.onSelectUser(t),setTimeout(function(){e.props.hideLoader()},1500)},e.submitComment=function(){""!==e.props.message&&e.props.submitComment()},e.updateMessageValue=function(t){e.props.updateMessageValue(t.target.value)},e.Communication=function(){var t=e.props,a=t.message,s=t.selectedUser,n=t.conversation,r=n.conversationData;return i.default.createElement("div",{className:"chat-main"},i.default.createElement("div",{className:"chat-main-header"},i.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onChatToggleDrawer.bind(e)},i.default.createElement("i",{className:"zmdi zmdi-comment-text"})),i.default.createElement("div",{className:"chat-main-header-info"},i.default.createElement("div",{className:"chat-avatar mr-2"},i.default.createElement("div",{className:"chat-avatar-mode"},i.default.createElement("img",{src:s.thumb,className:"rounded-circle size-60",alt:""}),i.default.createElement("span",{className:"chat-mode "+s.status}))),i.default.createElement("div",{className:"chat-contact-name"},s.name))),i.default.createElement(L.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},i.default.createElement(C.default,{conversationData:r,selectedUser:s})),i.default.createElement("div",{className:"chat-main-footer"},i.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},i.default.createElement("div",{className:"col"},i.default.createElement("div",{className:"form-group"},i.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:a,placeholder:"Type and hit enter to send message"}))),i.default.createElement("div",{className:"chat-sent"},i.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},i.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return i.default.createElement("div",{className:"chat-sidenav-main"},i.default.createElement("div",{className:" bg-primary chat-sidenav-header"},i.default.createElement("div",{className:"chat-user-hd"},i.default.createElement("span",{className:"icon-btn back-to-chats-button",onClick:function(){e.props.userInfoState(1)}},i.default.createElement("i",{className:"zmdi zmdi-arrow-back text-white"}))),i.default.createElement("div",{className:"chat-user chat-user-center"},i.default.createElement("div",{className:"chat-avatar"},i.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar rounded-circle size-60 huge",alt:"John Doe"})),i.default.createElement("div",{className:"user-name h4 my-2 text-white"},"Robert Johnson"))),i.default.createElement("div",{className:"chat-sidenav-content"},i.default.createElement(L.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},i.default.createElement("form",{className:"p-4"},i.default.createElement("div",{className:"form-group mt-4"},i.default.createElement("label",null,"Mood"),i.default.createElement(_.Input,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return i.default.createElement("div",{className:"chat-sidenav-main"},i.default.createElement("div",{className:"chat-sidenav-header"},i.default.createElement("div",{className:"chat-user-hd"},i.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.props.userInfoState(2)}},i.default.createElement("div",{className:"chat-avatar-mode"},i.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),i.default.createElement("span",{className:"chat-mode online"}))),i.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},i.default.createElement("div",{className:"module-title"},i.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),i.default.createElement("div",{className:"module-user-detail"},i.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),i.default.createElement("div",{className:"search-wrapper"},i.default.createElement(A.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.props.searchChatUser}))),i.default.createElement("div",{className:"chat-sidenav-content"},i.default.createElement(_.Nav,{tabs:!0,className:"nav-fill"},i.default.createElement(_.NavItem,{className:"nav-item"},i.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),i.default.createElement(_.NavItem,null,i.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),i.default.createElement(_.TabContent,{activeTab:e.state.activeTab},i.default.createElement(_.TabPane,{tabId:"1"},i.default.createElement(L.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.chatUsers.length?i.default.createElement("div",{className:"p-5"},e.props.userNotFound):i.default.createElement(E.default,{chatUsers:e.props.chatUsers,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),i.default.createElement(_.TabPane,{tabId:"2"},i.default.createElement(L.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.contactList.length?i.default.createElement("div",{className:"p-5"},e.props.userNotFound):i.default.createElement(T.default,{contactList:e.props.contactList,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e.showCommunication=function(){return i.default.createElement("div",{className:"chat-box"},i.default.createElement("div",{className:"chat-box-main"},null===e.props.selectedUser?i.default.createElement("div",{className:"loader-view"},i.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),i.default.createElement("h1",{className:"text-muted"}," ",i.default.createElement(b.default,{id:"chat.selectUserChat"})),i.default.createElement(_.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onChatToggleDrawer.bind(e)},i.default.createElement(b.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={activeTab:"1"},e}return c(t,e),l(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),l(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.hideLoader()},1500)}},{key:"updateSearchChatUser",value:function(e){this.props.updateSearchChatUser(e.target.value),this.props.filterContacts(e.target.value),this.props.filterUsers(e.target.value)}},{key:"onChatToggleDrawer",value:function(){this.props.onChatToggleDrawer()}},{key:"render",value:function(){var e=this.props,t=e.loader,a=e.userState,s=e.drawerState;e.selectedUser;return i.default.createElement("div",{className:"app-wrapper app-wrapper-module"},i.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},i.default.createElement("div",{className:"chat-module-box"},i.default.createElement("div",{className:"d-block d-xl-none"},i.default.createElement(f.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:s,onOpenChange:this.onChatToggleDrawer.bind(this),sidebar:1===a?this.ChatUsers():this.AppUsersInfo()()})),i.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===a?this.ChatUsers():this.AppUsersInfo()),t?i.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},i.default.createElement(g.default,null)):this.showCommunication())))}}]),t}(d.Component),k=function(e){var t=e.chatData;return{width:e.settings.width,loader:t.loader,userNotFound:t.userNotFound,drawerState:t.drawerState,selectedSectionId:t.selectedSectionId,userState:t.userState,searchChatUser:t.searchChatUser,contactList:t.contactList,selectedUser:t.selectedUser,message:t.message,chatUsers:t.chatUsers,conversationList:t.conversationList,conversation:t.conversation}},P=(0,u.connect)(k,{fetchChatUser:U.fetchChatUser,fetchChatUserConversation:U.fetchChatUserConversation,filterContacts:U.filterContacts,filterUsers:U.filterUsers,onSelectUser:U.onSelectUser,hideLoader:U.hideLoader,userInfoState:U.userInfoState,submitComment:U.submitComment,updateMessageValue:U.updateMessageValue,updateSearchChatUser:U.updateSearchChatUser,onChatToggleDrawer:U.onChatToggleDrawer})(N);t.default=P;var H=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(i,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(f,"_rcDrawer2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(g,"_CircularProgress2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(E,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(C,"_index4","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(T,"_index6","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(A,"_SearchBox2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(b,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(L,"_CustomScrollbars2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(H,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/redux/index.js"))}()},1735:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1736),o=s(c),l=function(e){var t=e.chatUsers,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(o.default,{key:t,chat:e,selectedSectionId:a,onSelectUser:s})}))},d=l;t.default=d;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ChatUserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"ChatUserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"))}()},1736:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.chat,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(a===t.id?"active":""),onClick:function(){s(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},o=c;t.default=o;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1737:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1738),o=s(c),l=a(1739),d=s(l),i=function(e){var t=e.conversationData,a=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(d.default,{key:t,conversation:e}):r.default.createElement(o.default,{key:t,conversation:e,user:a})}))},_=i;t.default=_;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Conversation","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(o,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"_index4","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"Conversation","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"))}()},1738:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.conversation,a=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:a.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},o=c;t.default=o;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1739:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},o=c;t.default=o;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1740:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1741),o=s(c),l=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.contactList;return r.default.createElement("div",{className:"chat-user"},s.map(function(e,s){return r.default.createElement(o.default,{key:s,user:e,selectedSectionId:a,onSelectUser:t})}))},d=l;t.default=d;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ContactList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"ContactList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"))}()},1741:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.user;return r.default.createElement("div",{className:"chat-user-item "+(a===s.id?"active":""),onClick:function(){t(s)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:s.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+s.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},s.name),r.default.createElement("div",{className:"chat-info-des"},s.mood.substring(0,30)+"..."))))},o=c;t.default=o;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=32.5fb938fcadd65974a875.chunk.js.map