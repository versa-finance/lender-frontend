webpackJsonp([60],{1191:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(3),d=n(u),i=r(42),_=r(95),p=r(490),f=r(509),m=r(58),R=n(m),E=r(502),g=n(E),b=function(e){function t(){return s(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.getLoanRequests()}},{key:"componentWillReceiveProps",value:function(e){200===e.requestLoans.approveLoanSuccessMessage.StatusCode&&p.ToastsStore.success(e.requestLoans.approveLoanSuccessMessage.Message)}},{key:"approveLoan",value:function(e,t){var r={request_id:t};this.props.approveLoan(r)}},{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:"loanContainer"},d.default.createElement(p.ToastsContainer,{store:p.ToastsStore,position:p.ToastsContainerPosition.TOP_RIGHT,color:"white"}),d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-12"},d.default.createElement("div",{className:"jr-card"},d.default.createElement("div",{className:"jr-card-header d-flex align-items-center"},d.default.createElement("h3",{className:"mb-0"},d.default.createElement(R.default,{id:"faq.category"})),d.default.createElement("div",{className:"ml-3"},d.default.createElement("span",{className:"text-white badge badge-success"},d.default.createElement(R.default,{id:"faq.aboutLender"})))),this.props.requestLoans.loanRequests?d.default.createElement("div",{className:"table-responsive-material"},d.default.createElement(_.Table,null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",{className:"border-top-0"},"S/N"),d.default.createElement("th",{className:"border-top-0"},"Account Balance (N)"),d.default.createElement("th",{className:"border-top-0"},"Recharge Card (N)"),d.default.createElement("th",{className:"border-top-0"},"Merit Amount (N)"),d.default.createElement("th",{className:"border-top-0"},"Credit Rating (%)"),d.default.createElement("th",{className:"border-top-0"},"Loan History Rating (%)"),d.default.createElement("th",{className:"border-top-0"},"Approve"),d.default.createElement("th",{className:"border-top-0"},"Paid"),d.default.createElement("th",{className:"border-top-0"},"Platform"),d.default.createElement("th",{className:"border-top-0"},"Actions"))),d.default.createElement("tbody",null,this.props.requestLoans.loanRequests.map(function(t,r){var n=void 0;return n="1"===t.is_approved?"Approved":"-1"===t.is_approved?"Disapproved":"Pending",d.default.createElement("tr",{key:r},d.default.createElement("td",null,r+1),d.default.createElement("td",null,t.discounted_sum_of_account_balance),d.default.createElement("td",null,t.discounted_sum_of_recharge_cards),d.default.createElement("td",null,t.total_merit_amount),d.default.createElement("td",null,t.credit_rating),d.default.createElement("td",null,t.loan_history_rating),d.default.createElement("td",null,n),d.default.createElement("td",null,"1"===t.is_fully_paid?"Paid":"Not Paid"),d.default.createElement("td",null,t.platform),d.default.createElement("td",null,d.default.createElement("div",{className:"actionBtn"},d.default.createElement("div",null,d.default.createElement("i",{className:"zmdi zmdi-check cursorChange",onClick:function(){return e.approveLoan(r,t.id)}})),d.default.createElement("div",null,d.default.createElement("i",{className:"zmdi zmdi-close"})))))})))):""))))}}]),t}(d.default.Component),T=function(e){return{requestLoans:e.loanRequests}},O=(0,i.connect)(T,{getLoanRequests:f.getLoanRequests,approveLoan:f.approveLoan})(b);t.default=O;var v=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"loanRequests","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(T,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(O,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(R,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(g,"_Spinner2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(a,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(o,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(b,"loanRequests","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(T,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(O,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"),__REACT_HOT_LOADER__.register(v,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/loanRequests/index.js"))}()}});
//# sourceMappingURL=60.60e6d86c1ccde9984fdc.chunk.js.map