webpackJsonp([58],{1178:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),u=r(3),d=s(u),i=r(41),_=r(11),m=r(94),f=r(58),p=s(f),E=r(1714),b=s(E),g=r(218),R=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={userList:[],showData:!1,SN:0},r}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.userList()}},{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:"faqMainContainer"},d.default.createElement("div",{className:"faqContainer"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-12"},d.default.createElement("div",{className:"jr-card"},d.default.createElement("div",{className:"jr-card-header d-flex align-items-center"}),d.default.createElement("div",{className:"table-responsive-material"},d.default.createElement(m.Table,null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",{className:"border-top-0"},"S/N"),d.default.createElement("th",{className:"border-top-0"},"Last Names"),d.default.createElement("th",{className:"border-top-0"},"Other Names"),d.default.createElement("th",{className:"border-top-0"},"Phone Number"),d.default.createElement("th",{className:"border-top-0"},"Loan Level"),d.default.createElement("th",{className:"border-top-0"},"Gender"),d.default.createElement("th",{className:"border-top-0"},"Action"))),d.default.createElement("tbody",null,this.props.user.userList.map(function(t,r){return d.default.createElement("tr",{key:t.id},d.default.createElement("td",null,r+1),d.default.createElement("td",null,t.last_name," ",t.other_names),d.default.createElement("td",null,t.email),d.default.createElement("td",null,t.phone_number),d.default.createElement("td",null,t.loan_level),d.default.createElement("td",null,t.gender),d.default.createElement("td",null,d.default.createElement("div",null,d.default.createElement(_.Link,{to:e.props.match.url+"/"+t.phone_number},d.default.createElement(m.Button,{className:"jr-btn btn-primary text-white mb-0",color:"primary"},d.default.createElement("i",{className:"zmdi zmdi-eye",style:{paddingRight:5}}),d.default.createElement("span",null,"View Profile"))))))})))))))))}}]),t}(d.default.Component),T=function(e){return{user:e.userList}},D=(0,i.connect)(T,{userList:g.userList})(R);t.default=D;var O=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"UserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(T,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(D,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(p,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(b,"_DataTableCell2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(n,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(l,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(R,"UserList","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(T,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(D,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"),__REACT_HOT_LOADER__.register(O,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/index.js"))}()},1714:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),n=s(a),l=function(e){return n.default.createElement("tr",{role:"checkbox",tabIndex:-1,key:e.data.id,selected:!0},n.default.createElement("td",null,n.default.createElement("div",{className:"form-control-checkbox d-flex"},n.default.createElement("div",{className:"form-checkbox"},n.default.createElement("input",{type:"checkbox",value:"checked"}),n.default.createElement("span",{className:"check"},n.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-lg"}))))),n.default.createElement("td",null,n.default.createElement("img",{className:"rounded-circle",alt:e.data.name,src:e.data.image,style:{width:32,height:32,textDecoration:"none"}})),n.default.createElement("td",null,e.data.name),n.default.createElement("td",null,e.data.memberFrom),n.default.createElement("td",null,e.data.lastLogin),n.default.createElement("td",null,e.data.role),n.default.createElement("td",null,"active"===e.data.status?n.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-2x text-primary"}):n.default.createElement("i",{className:"zmdi zmdi-close zmdi-hc-2x text-red"})))},o=l;t.default=o;var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"DataTableCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"),__REACT_HOT_LOADER__.register(l,"DataTableCell","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"),__REACT_HOT_LOADER__.register(c,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/table/routes/basic/Components/DataTableCell.js"))}()}});
//# sourceMappingURL=58.5fb938fcadd65974a875.chunk.js.map