webpackJsonp([38],{1218:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),u=a(i),_=n(107),m=n(211),f=a(m),E=n(40),h=n(213),p=a(h),v=n(1),C=a(v),L=n(1937),T=a(L),O=n(500),R=a(O),A=n(1939),D=a(A),g=n(499),U=a(g),x=n(1942),b=a(x),N=n(488),P=a(N),j=n(60),H=a(j),y=n(109),S=a(y),w=function(e){function t(){s(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContact=function(e){return""===e?U.default.filter(function(e){return!e.recent}):U.default.filter(function(t){return!t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filterUsers=function(e){return""===e?U.default.filter(function(e){return e.recent}):U.default.filter(function(t){return t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.Communication=function(){var t=(e.props,e.state),n=t.message,a=t.selectedUser,s=t.conversation,r=s.conversationData;return u.default.createElement("div",{className:"chat-main"},u.default.createElement("div",{className:"chat-main-header"},u.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onToggleDrawer.bind(e)},u.default.createElement("i",{className:"zmdi zmdi-comment-text"})),u.default.createElement("div",{className:"chat-main-header-info"},u.default.createElement("div",{className:"chat-avatar mr-2"},u.default.createElement("div",{className:"chat-avatar-mode"},u.default.createElement("img",{src:a.thumb,className:"rounded-circle size-60",alt:""}),u.default.createElement("span",{className:"chat-mode "+a.status}))),u.default.createElement("div",{className:"chat-contact-name"},a.name))),u.default.createElement(S.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},u.default.createElement(D.default,{conversationData:r,selectedUser:a})),u.default.createElement("div",{className:"chat-main-footer"},u.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},u.default.createElement("div",{className:"col"},u.default.createElement("div",{className:"form-group"},u.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:n,placeholder:"Type and hit enter to send message"}))),u.default.createElement("div",{className:"chat-sent"},u.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},u.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return u.default.createElement("div",{className:"chat-sidenav-main"},u.default.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},u.default.createElement("div",{className:"chat-user-hd mb-0"},u.default.createElement("span",{className:"icon-btn back-to-chats-button size-30",onClick:function(){e.setState({userState:1})}},u.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),u.default.createElement("div",{className:"chat-user chat-user-center"},u.default.createElement("div",{className:"chat-avatar mx-auto"},u.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),u.default.createElement("div",{className:"user-name h4 my-2"},"Robert Johnson"))),u.default.createElement("div",{className:"chat-sidenav-content"},u.default.createElement(S.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},u.default.createElement("form",{className:"p-4"},u.default.createElement("div",{className:"form-group mt-4"},u.default.createElement("label",null,"Mood"),u.default.createElement(_.Input,{id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status"}))))))},e.ChatUsers=function(){return u.default.createElement("div",{className:"chat-sidenav-main"},u.default.createElement("div",{className:"chat-sidenav-header"},u.default.createElement("div",{className:"chat-user-hd"},u.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.setState({userState:2})}},u.default.createElement("div",{className:"chat-avatar-mode"},u.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),u.default.createElement("span",{className:"chat-mode online"}))),u.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},u.default.createElement("div",{className:"module-title"},u.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),u.default.createElement("div",{className:"module-user-detail"},u.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),u.default.createElement("div",{className:"search-wrapper"},u.default.createElement(P.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.state.searchChatUser}))),u.default.createElement("div",{className:"chat-sidenav-content"},u.default.createElement(_.Nav,{tabs:!0,className:"nav-fill"},u.default.createElement(_.NavItem,{className:"nav-item"},u.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),u.default.createElement(_.NavItem,null,u.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),u.default.createElement(_.TabContent,{activeTab:e.state.activeTab},u.default.createElement(_.TabPane,{tabId:"1"},u.default.createElement(S.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.chatUsers.length?u.default.createElement("div",{className:"p-5"},e.state.userNotFound):u.default.createElement(T.default,{chatUsers:e.state.chatUsers,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),u.default.createElement(_.TabPane,{tabId:"2"},u.default.createElement(S.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.contactList.length?u.default.createElement("div",{className:"p-5"},e.state.userNotFound):u.default.createElement(b.default,{contactList:e.state.contactList,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.handleChange=function(t,n){e.setState({value:n})},e.handleChangeIndex=function(t){e.setState({value:t})},e.onSelectUser=function(t){e.setState({loader:!0,selectedSectionId:t.id,drawerState:e.props.drawerState,selectedUser:t,conversation:e.state.conversationList.find(function(e){return e.id===t.id})}),setTimeout(function(){e.setState({loader:!1})},1500)},e.showCommunication=function(){return u.default.createElement("div",{className:"chat-box"},u.default.createElement("div",{className:"chat-box-main"},null===e.state.selectedUser?u.default.createElement("div",{className:"loader-view"},u.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),u.default.createElement("h1",{className:"text-muted"},u.default.createElement(H.default,{id:"chat.selectUserChat"})),u.default.createElement(_.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onToggleDrawer.bind(e)},u.default.createElement(H.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={loader:!1,userNotFound:"No user found",drawerState:!1,selectedSectionId:"",selectedTabIndex:0,userState:1,activeTab:"1",searchChatUser:"",contactList:U.default.filter(function(e){return!e.recent}),selectedUser:null,message:"",chatUsers:U.default.filter(function(e){return e.recent}),conversationList:R.default,conversation:null},e}return c(t,e),o(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),o(t,[{key:"submitComment",value:function(){var e=this;if(""!==this.state.message){var t=this.state.conversation.conversationData.concat({type:"sent",message:this.state.message,sentAt:(0,C.default)(new Date).format("hh:mm:ss A")});this.setState({conversation:d({},this.state.conversation,{conversationData:t}),message:"",conversationList:this.state.conversationList.map(function(n){return n.id===e.state.conversation.id?d({},e.state.conversation,{conversationData:t}):n})})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"updateSearchChatUser",value:function(e){this.setState({searchChatUser:e.target.value,contactList:this.filterContact(e.target.value),chatUsers:this.filterUsers(e.target.value)})}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.loader,n=e.drawerState,a=e.userState;return u.default.createElement("div",{className:"app-wrapper app-wrapper-module"},u.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},u.default.createElement("div",{className:"chat-module-box"},u.default.createElement("div",{className:"d-block d-xl-none"},u.default.createElement(f.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:n,onOpenChange:this.onToggleDrawer.bind(this),sidebar:1===a?this.ChatUsers():this.AppUsersInfo()})),u.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===a?this.ChatUsers():this.AppUsersInfo()),t?u.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},u.default.createElement(p.default,null)):this.showCommunication())))}}]),t}(i.Component),M=function(e){return{width:e.settings.width}},k=(0,E.connect)(M)(w);t.default=k;var I=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(w,"ChatPanel","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(M,"mapStateToProps","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(k,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_extends","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(o,"_createClass","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(u,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(f,"_rcDrawer2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(p,"_CircularProgress2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(C,"_moment2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(T,"_ChatUserList2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(R,"_conversationList2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(D,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(U,"_chatUsers2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(b,"_index4","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(P,"_index6","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(H,"_IntlMessages2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(S,"_CustomScrollbars2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(w,"ChatPanel","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(M,"mapStateToProps","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(k,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(I,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/app/routes/chatPanel/basic/index.js"))}()},1937:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1938),l=a(c),d=function(e){var t=e.chatUsers,n=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(l.default,{key:t,chat:e,selectedSectionId:n,onSelectUser:a})}))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ChatUserList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"ChatUserList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/index.js"))}()},1938:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.chat,n=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(n===t.id?"active":""),onClick:function(){a(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1939:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1940),l=a(c),d=n(1941),o=a(d),i=function(e){var t=e.conversationData,n=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(o.default,{key:t,conversation:e}):r.default.createElement(l.default,{key:t,conversation:e,user:n})}))},u=i;t.default=u;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Conversation","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(o,"_index4","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"Conversation","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/index.js"))}()},1940:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.conversation,n=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:n.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1941:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1942:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=n(1943),l=a(c),d=function(e){var t=e.onSelectUser,n=e.selectedSectionId,a=e.contactList;return r.default.createElement("div",{className:"chat-user"},a.map(function(e,a){return r.default.createElement(l.default,{key:a,user:e,selectedSectionId:n,onSelectUser:t})}))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ContactList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"ContactList","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/index.js"))}()},1943:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=a(s),c=function(e){var t=e.onSelectUser,n=e.selectedSectionId,a=e.user;return r.default.createElement("div",{className:"chat-user-item "+(n===a.id?"active":""),onClick:function(){t(a)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:a.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+a.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},a.name),r.default.createElement("div",{className:"chat-info-des"},a.mood.substring(0,30)+"..."))))},l=c;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/idmcalculus/Documents/Lender/lender-frontend/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=38.bfb04f15418d16526a84.chunk.js.map