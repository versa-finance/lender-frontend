webpackJsonp([37],{1210:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),d=a(3),_=s(d),u=a(96),m=a(212),f=s(m),p=a(39),g=a(214),E=s(g),h=a(1),R=s(h),v=a(1917),C=s(v),b=a(503),T=s(b),O=a(1919),A=s(O),D=a(502),U=s(D),L=a(1922),x=s(L),N=a(488),k=s(N),P=a(60),j=s(P),H=a(109),y=s(H),J=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContact=function(e){return""===e?U.default.filter(function(e){return!e.recent}):U.default.filter(function(t){return!t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filterUsers=function(e){return""===e?U.default.filter(function(e){return e.recent}):U.default.filter(function(t){return t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.Communication=function(){var t=(e.props,e.state),a=t.message,s=t.selectedUser,n=t.conversation,r=n.conversationData;return _.default.createElement("div",{className:"chat-main"},_.default.createElement("div",{className:"chat-main-header"},_.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onToggleDrawer.bind(e)},_.default.createElement("i",{className:"zmdi zmdi-comment-text"})),_.default.createElement("div",{className:"chat-main-header-info"},_.default.createElement("div",{className:"chat-avatar mr-2"},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{src:s.thumb,className:"rounded-circle size-60",alt:""}),_.default.createElement("span",{className:"chat-mode "+s.status}))),_.default.createElement("div",{className:"chat-contact-name"},s.name))),_.default.createElement(y.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},_.default.createElement(A.default,{conversationData:r,selectedUser:s})),_.default.createElement("div",{className:"chat-main-footer"},_.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},_.default.createElement("div",{className:"col"},_.default.createElement("div",{className:"form-group"},_.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:a,placeholder:"Type and hit enter to send message"}))),_.default.createElement("div",{className:"chat-sent"},_.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},_.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd mb-0"},_.default.createElement("span",{className:"icon-btn back-to-chats-button size-30",onClick:function(){e.setState({userState:1})}},_.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),_.default.createElement("div",{className:"chat-user chat-user-center"},_.default.createElement("div",{className:"chat-avatar mx-auto"},_.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),_.default.createElement("div",{className:"user-name h4 my-2"},"Robert Johnson"))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},_.default.createElement("form",{className:"p-4"},_.default.createElement("div",{className:"form-group mt-4"},_.default.createElement("label",null,"Mood"),_.default.createElement(u.Input,{id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status"}))))))},e.ChatUsers=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd"},_.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.setState({userState:2})}},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),_.default.createElement("span",{className:"chat-mode online"}))),_.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},_.default.createElement("div",{className:"module-title"},_.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),_.default.createElement("div",{className:"module-user-detail"},_.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),_.default.createElement("div",{className:"search-wrapper"},_.default.createElement(k.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.state.searchChatUser}))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement(u.Nav,{tabs:!0,className:"nav-fill"},_.default.createElement(u.NavItem,{className:"nav-item"},_.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),_.default.createElement(u.NavItem,null,_.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),_.default.createElement(u.TabContent,{activeTab:e.state.activeTab},_.default.createElement(u.TabPane,{tabId:"1"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.chatUsers.length?_.default.createElement("div",{className:"p-5"},e.state.userNotFound):_.default.createElement(C.default,{chatUsers:e.state.chatUsers,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),_.default.createElement(u.TabPane,{tabId:"2"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.contactList.length?_.default.createElement("div",{className:"p-5"},e.state.userNotFound):_.default.createElement(x.default,{contactList:e.state.contactList,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e.onSelectUser=function(t){e.setState({loader:!0,selectedSectionId:t.id,drawerState:e.props.drawerState,selectedUser:t,conversation:e.state.conversationList.find(function(e){return e.id===t.id})}),setTimeout(function(){e.setState({loader:!1})},1500)},e.showCommunication=function(){return _.default.createElement("div",{className:"chat-box"},_.default.createElement("div",{className:"chat-box-main"},null===e.state.selectedUser?_.default.createElement("div",{className:"loader-view"},_.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),_.default.createElement("h1",{className:"text-muted"},_.default.createElement(j.default,{id:"chat.selectUserChat"})),_.default.createElement(u.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onToggleDrawer.bind(e)},_.default.createElement(j.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={loader:!1,userNotFound:"No user found",drawerState:!1,selectedSectionId:"",selectedTabIndex:0,userState:1,activeTab:"1",searchChatUser:"",contactList:U.default.filter(function(e){return!e.recent}),selectedUser:null,message:"",chatUsers:U.default.filter(function(e){return e.recent}),conversationList:T.default,conversation:null},e}return c(t,e),i(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),i(t,[{key:"submitComment",value:function(){var e=this;if(""!==this.state.message){var t=this.state.conversation.conversationData.concat({type:"sent",message:this.state.message,sentAt:(0,R.default)(new Date).format("hh:mm:ss A")});this.setState({conversation:o({},this.state.conversation,{conversationData:t}),message:"",conversationList:this.state.conversationList.map(function(a){return a.id===e.state.conversation.id?o({},e.state.conversation,{conversationData:t}):a})})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"updateSearchChatUser",value:function(e){this.setState({searchChatUser:e.target.value,contactList:this.filterContact(e.target.value),chatUsers:this.filterUsers(e.target.value)})}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.loader,a=e.drawerState,s=e.userState;return _.default.createElement("div",{className:"app-wrapper app-wrapper-module"},_.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},_.default.createElement("div",{className:"chat-module-box"},_.default.createElement("div",{className:"d-block d-xl-none"},_.default.createElement(f.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:a,onOpenChange:this.onToggleDrawer.bind(this),sidebar:1===s?this.ChatUsers():this.AppUsersInfo()})),_.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===s?this.ChatUsers():this.AppUsersInfo()),t?_.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},_.default.createElement(E.default,null)):this.showCommunication())))}}]),t}(d.Component),W=function(e){return{width:e.settings.width}},S=(0,p.connect)(W)(J);t.default=S;var w=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(J,"ChatPanel","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(W,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(S,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_extends","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(i,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(_,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(f,"_rcDrawer2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(E,"_CircularProgress2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(R,"_moment2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(C,"_ChatUserList2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(T,"_conversationList2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(A,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(U,"_chatUsers2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(x,"_index4","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(k,"_index6","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(j,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(y,"_CustomScrollbars2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(J,"ChatPanel","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(W,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(S,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(w,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/chatPanel/basic/index.js"))}()},1917:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1918),l=s(c),o=function(e){var t=e.chatUsers,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(l.default,{key:t,chat:e,selectedSectionId:a,onSelectUser:s})}))},i=o;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ChatUserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"ChatUserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/index.js"))}()},1918:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.chat,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(a===t.id?"active":""),onClick:function(){s(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},l=c;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1919:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1920),l=s(c),o=a(1921),i=s(o),d=function(e){var t=e.conversationData,a=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(i.default,{key:t,conversation:e}):r.default.createElement(l.default,{key:t,conversation:e,user:a})}))},_=d;t.default=_;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Conversation","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"_index4","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"Conversation","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/index.js"))}()},1920:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.conversation,a=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:a.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1921:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1922:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=a(1923),l=s(c),o=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.contactList;return r.default.createElement("div",{className:"chat-user"},s.map(function(e,s){return r.default.createElement(l.default,{key:s,user:e,selectedSectionId:a,onSelectUser:t})}))},i=o;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ContactList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"ContactList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/index.js"))}()},1923:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),c=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.user;return r.default.createElement("div",{className:"chat-user-item "+(a===s.id?"active":""),onClick:function(){t(s)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:s.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+s.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},s.name),r.default.createElement("div",{className:"chat-info-des"},s.mood.substring(0,30)+"..."))))},l=c;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=37.796fe7315a5223059323.chunk.js.map