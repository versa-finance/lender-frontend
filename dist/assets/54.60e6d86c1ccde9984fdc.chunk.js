webpackJsonp([54],{1188:function(e,r,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==(void 0===r?"undefined":c(r))&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+(void 0===r?"undefined":c(r)));e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},l=function(){function e(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(r,t,s){return t&&e(r.prototype,t),s&&e(r,s),r}}(),_=t(3),u=s(_),d=t(42),p=t(218),f=t(1502),m=s(f),g=function(e){function r(e){n(this,r);var t=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={userDetail:{phone_number:""}},t}return a(r,e),l(r,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.phoneNumber),this.setState(i({},this.state,{userDetail:i({},this.state.userDetail,{phone_number:this.props.match.params.phoneNumber})}),function(){e.props.getUserDetail(e.state.userDetail)})}},{key:"render",value:function(){return u.default.createElement("div",{className:"userDetail"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-12 col-sm-12 col-12 animation slideInRight"},u.default.createElement("div",{className:"sidebar"},u.default.createElement(m.default,{data:this.props.user.userDetail})))))}}]),r}(u.default.Component),R=function(e){return{user:e.userList}},E=(0,d.connect)(R,{getUserDetail:p.getUserDetail})(g);r.default=E;var D=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"UserDetail","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(R,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(E,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_extends","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(l,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(u,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(m,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(a,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(g,"UserDetail","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(R,"mapStateToProps","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(E,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"),__REACT_HOT_LOADER__.register(D,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/userList/userDetail.js"))}()},1425:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=r.LOGGER=function(e,r){console.log(e.toLowerCase(),r)},n=r.convertString=function(e){var r=[],t=[],s=e.split("");t.push(s[0].toUpperCase());for(var n=1;n<s.length;n++)if(s[n]===s[n].toUpperCase()){var o=n-1;r[o]=" ",r.push(s[n])}else r.push(s[n]);return[].concat(t,r).join("")},o=r.myIcon=function(e){var r=String(e).match(/\b(\w)/g);console.log(r);var t=[];return t.push(r[0].toUpperCase()),r.length>1&&t.push(r[1].toUpperCase()),t.join("")},a=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"LOGGER","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"),__REACT_HOT_LOADER__.register(n,"convertString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"),__REACT_HOT_LOADER__.register(o,"myIcon","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"LOGGER","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"),__REACT_HOT_LOADER__.register(n,"convertString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"),__REACT_HOT_LOADER__.register(o,"myIcon","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"),__REACT_HOT_LOADER__.register(a,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/shared/Methods.js"))}()},1502:function(e,r,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=t(3),o=s(n),a=t(1425),c=function(e){var r=e.data.length>0?e.data[0]:{},t=r.last_name,s=r.other_names;return console.log((0,a.myIcon)(t)),o.default.createElement("div",{className:"profile-intro card text-center"},o.default.createElement("div",{className:"pi-header"},o.default.createElement("div",{className:"card-image layer"},o.default.createElement("div",{className:"avatar-logo"},o.default.createElement("span",null,(0,a.myIcon)(t)),o.default.createElement("span",null,(0,a.myIcon)(s))))),o.default.createElement("div",{className:"pi-content"},o.default.createElement("h4",null,r.last_name," ",r.other_names),o.default.createElement("p",null,r.user_category),o.default.createElement("p",null,r.phone_number),o.default.createElement("p",{className:"card-text"},"Hello everyone, I am Maryam. My designs are used in several big companies in United State and other countries.")),o.default.createElement("div",{className:"pi-footer"},o.default.createElement("div",{className:"icons-wrapper"},o.default.createElement("a",{className:"icon facebook-icon",href:"javascript:void(0)"},o.default.createElement("i",{className:"zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"})),o.default.createElement("a",{className:"icon twitter-icon",href:"javascript:void(0)"},o.default.createElement("i",{className:"zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"})),o.default.createElement("a",{className:"icon linkedin-icon",href:"javascript:void(0)"},o.default.createElement("i",{className:"zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"})))))},i=c;r.default=i;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ProfileCard","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(c,"ProfileCard","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ProfileCard/index.js"))}()}});
//# sourceMappingURL=54.60e6d86c1ccde9984fdc.chunk.js.map