webpackJsonp([62],{1181:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=a(3),d=r(f),g=a(41),_=a(94),p=a(493),m=a(58),C=r(m),q=a(497),y=function(e){function t(e){s(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={modal:!1,faqCategory:{title:""},submitText:"submit",indexCount:"",faqCategoryLength:0},a}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.getFAQCategories()}},{key:"componentWillReceiveProps",value:function(e){200===e.faq.faqCategoryCreationMessage.StatusCode&&(p.ToastsStore.success(e.faq.faqCategoryCreationMessage.Message),console.log(e.faq.faqCategoryCreationMessage.Data.id),this.props.faq.faqCategories.unshift({title:this.state.faqCategory.title,id:e.faq.faqCategoryCreationMessage.Data.id}),setTimeout(function(){location.reload()},1e3))}},{key:"toggle",value:function(e,t,a){var r=this;switch(e){case"create":this.setState(c({},this.state,{modal:!this.state.modal,faqCategory:c({},this.state.faqCategory,{title:""}),submitText:"submit"}));break;case"edit":console.log(t),console.log(a),this.setState({modal:!this.state.modal,indexCount:t},function(){r.props.faq.faqCategories.forEach(function(e){e.id===a&&r.setState(c({},r.state,{faqCategory:c({},r.state.faqCategory,{title:e.title,faq_category_id:e.id}),submitText:"update"}))})});break;default:this.setState({modal:!this.state.modal})}}},{key:"changeValue",value:function(e){var t=this;this.setState(c({},this.state,{faqCategory:c({},this.state.faqCategory,o({},e.target.name,e.target.value)),required:!1}),function(){console.log(t.state.faqCategory)})}},{key:"submit",value:function(e){"cancel"===e?this.toggle():"submit"===e&&"submit"===this.state.submitText?""!==this.state.faqCategory.title?this.props.createFaqCategory(this.state.faqCategory):(this.setState(c({},this.state,{required:!0})),p.ToastsStore.error("Some required field* are empty")):"submit"===e&&"update"===this.state.submitText&&(""!==this.state.faqCategory.title?(this.props.updateFaqCategory(this.state.faqCategory),console.log(this.props.faq.faqCategories)):p.ToastsStore.error("Some required field* are empty"))}},{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:"faqMainContainer"},d.default.createElement(_.Button,{className:"jr-btn btn-primary text-white mb-3",color:"primary",onClick:function(){return e.toggle("create",null,null)}},"Create Faq Categories"),d.default.createElement(p.ToastsContainer,{store:p.ToastsStore,position:p.ToastsContainerPosition.TOP_RIGHT,color:"white"}),d.default.createElement("div",{className:"faqContainer"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-12"},d.default.createElement("div",{className:"jr-card"},d.default.createElement("div",{className:"table-responsive-material"},d.default.createElement(_.Table,null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"S/N"),d.default.createElement("th",null,"Faq Category"),d.default.createElement("th",{className:""},"Action"))),d.default.createElement("tbody",null,this.props.faq.faqCategories.map(function(t,a){return d.default.createElement("tr",{key:a},d.default.createElement("td",null,a+1),d.default.createElement("td",null,t.title),d.default.createElement("td",null,d.default.createElement("div",null,d.default.createElement("i",{className:"zmdi zmdi-edit cursorChange",onClick:function(){return e.toggle("edit",a,t.id)}}))))})))))))),d.default.createElement(_.Modal,{isOpen:this.state.modal,toggle:function(){return e.toggle(null,null,null)},className:this.props.className},d.default.createElement(_.ModalHeader,{toggle:function(){return e.toggle(null,null,null)}},"Create Faq"),d.default.createElement(_.ModalBody,null,this.state.required?d.default.createElement("div",{className:"requiredField"},"All fields are required"):null,d.default.createElement("div",{className:"form-group row"},d.default.createElement("label",{htmlFor:"title",className:"col-xl-2 col-md-3 col-sm-2 control-label",style:{alignSelf:"center"}},"Faq Category *"),d.default.createElement("div",{className:"col-xl-10 col-md-9 col-sm-8"},d.default.createElement("input",{type:"text",className:"form-control",id:"title",placeholder:"Title",name:"title",onChange:function(t){return e.changeValue(t)},value:this.state.faqCategory.title})))),d.default.createElement(_.ModalFooter,null,d.default.createElement(_.Button,{color:"link",onClick:function(){return e.submit("cancel")}}," Cancel")," ",d.default.createElement(_.Button,{color:"link",onClick:function(){return e.submit("submit")}},this.state.submitText))))}}]),t}(d.default.Component),b=function(e){return{faq:e.faq}},E=(0,g.connect)(b,{getFAQCategories:q.getFAQCategories,createFaqCategory:q.createFaqCategory,updateFaqCategory:q.updateFaqCategory})(y);t.default=E;var h=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"FaqCategories","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(b,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(E,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_extends","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(u,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(C,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(o,"_defineProperty","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(n,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(l,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(y,"FaqCategories","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(b,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(E,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"),__REACT_HOT_LOADER__.register(h,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/faq/faqCategories.js"))}()}});
//# sourceMappingURL=62.5fb938fcadd65974a875.chunk.js.map