webpackJsonp([65],{1193:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(3),m=n(d),f=a(42),p=a(95),b=a(58),_=n(b),k=a(490),g=a(96),h=function(e){function t(e){s(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={bank:{name:""},submitText:"submit",indexCount:0,saveText:""},a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){console.log("ffhdss"),this.props.getBankFilterList()}},{key:"componentWillReceiveProps",value:function(e){"create"===this.state.saveText?(console.log(e.bankSmsFilter.bankSuccess.Message),k.ToastsStore.success(e.bankSmsFilter.bankSuccess.Message),this.props.bankSmsFilter.bankFilters.unshift(e.bankSmsFilter.bankSuccess.Data),this.toggle()):"update"===this.state.saveText?(k.ToastsStore.success(e.bankSmsFilter.bankSuccess.Message),this.props.bankSmsFilter.bankFilters[this.state.indexCount]={id:e.bankSmsFilter.bankSuccess.Data.id,name:e.bankSmsFilter.bankSuccess.Data.name},this.toggle()):"delete"===this.state.saveText&&(k.ToastsStore.success(e.bankSmsFilter.bankSuccess.Message),this.props.bankSmsFilter.bankFilters.splice(this.state.indexCount,1))}},{key:"submit",value:function(e){"cancel"===e?this.toggle():"submit"===e&&"submit"===this.state.submitText?""!==this.state.bank.name?this.props.createBank(this.state.bank):(this.setState(c({},this.state,{required:!0})),k.ToastsStore.error("Some required field* are empty")):"submit"===e&&"update"===this.state.submitText&&(""!==this.state.bank.name?this.props.updateBank(this.state.bank):k.ToastsStore.error("Some required field* are empty"))}},{key:"toggle",value:function(e,t,a){var n=this;switch(e){case"create":this.setState(c({},this.state,{modal:!this.state.modal,bank:c({},this.state.bank,{id:"",name:"",data_id:""}),saveText:"create"}));break;case"edit":this.setState({modal:!this.state.modal,indexCount:t},function(){var e=n.props.bankSmsFilter.bankFilters[t];n.setState(c({},n.state,{bank:{data_id:e.id,name:e.name},submitText:"update",saveText:"update"}))});break;case"delete":this.setState({indexCount:t,saveText:"delete"});var r={data_id:a};console.log(r),this.props.deleteBank(r);break;default:this.setState({modal:!this.state.modal})}}},{key:"changeValue",value:function(e){var t=this;this.setState(c({},this.state,{bank:c({},this.state.bank,r({},e.target.name,e.target.value))}),function(){console.log(t.state.network)})}},{key:"render",value:function(){var e=this;return m.default.createElement("div",{className:"loanContainer"},m.default.createElement(p.Button,{className:"jr-btn btn-primary text-white mb-3",color:"primary",style:{backgroundColor:"#0066f5"},onClick:function(){return e.toggle("create",null,null)}},"Create Loans"),m.default.createElement(k.ToastsContainer,{store:k.ToastsStore,position:k.ToastsContainerPosition.TOP_RIGHT,color:"white"}),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-12"},m.default.createElement("div",{className:"jr-card"},m.default.createElement("div",{className:"jr-card-header d-flex align-items-center"},m.default.createElement("h3",{className:"mb-0"},m.default.createElement(_.default,{id:"faq.category"})),m.default.createElement("div",{className:"ml-3"},m.default.createElement("span",{className:"text-white badge badge-success"},m.default.createElement(_.default,{id:"faq.aboutLender"})))),this.props.bankSmsFilter.bankFilters?m.default.createElement("div",{className:"table-responsive-material"},m.default.createElement(p.Table,null,m.default.createElement("thead",null,m.default.createElement("tr",null,m.default.createElement("th",{className:"border-top-0"}),m.default.createElement("th",{className:"border-top-0"},"Bank"),m.default.createElement("th",{className:"border-top-0"},"Actions"))),m.default.createElement("tbody",null,this.props.bankSmsFilter.bankFilters.map(function(t,a){return m.default.createElement("tr",{key:t.id},m.default.createElement("td",null,a+1),m.default.createElement("td",null,t.name),m.default.createElement("td",null,m.default.createElement("div",{className:"actionBtn"},m.default.createElement("div",null,m.default.createElement("i",{className:"zmdi zmdi-edit cursorChange",onClick:function(){return e.toggle("edit",a,t.id)}})),m.default.createElement("div",null,m.default.createElement("i",{className:"zmdi zmdi-delete cursorChange",onClick:function(){return e.toggle("delete",a,t.id)}})))))})))):""))),m.default.createElement(p.Modal,{isOpen:this.state.modal,toggle:function(){return e.toggle(null,null,null)},className:this.props.className},m.default.createElement(p.ModalHeader,{toggle:function(){return e.toggle(null,null,null)}},"Create Network"),m.default.createElement(p.ModalBody,null,m.default.createElement("div",{className:"form-group row"},m.default.createElement("label",{htmlFor:"level",className:"col-xl-2 col-md-3 col-sm-2 control-label",style:{alignSelf:"center"}},"Bank Name *"),m.default.createElement("div",{className:"col-xl-10 col-md-9 col-sm-8"},m.default.createElement("input",{type:"text",className:"form-control",id:"level",placeholder:"Bank Name",name:"name",onChange:function(t){return e.changeValue(t)},value:this.state.bank.name})))),m.default.createElement(p.ModalFooter,null,m.default.createElement(p.Button,{color:"link",onClick:function(){return e.submit("cancel")}}," Cancel")," ",m.default.createElement(p.Button,{color:"link",onClick:function(){return e.submit("submit")}},this.state.submitText))))}}]),t}(m.default.Component),E=function(e){return{bankSmsFilter:e.bankFilter}},T=(0,f.connect)(E,{getBankFilterList:g.getBankFilterList,createBank:g.createBank,updateBank:g.updateBank,deleteBank:g.deleteBank})(h);t.default=T;var R=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"bankFilter","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(E,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(T,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_extends","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(u,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(m,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(_,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(r,"_defineProperty","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(l,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(o,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(h,"bankFilter","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(E,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(T,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"),__REACT_HOT_LOADER__.register(R,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/bankFilter/index.js"))}()}});
//# sourceMappingURL=65.9c8052db1d786b26a18b.chunk.js.map