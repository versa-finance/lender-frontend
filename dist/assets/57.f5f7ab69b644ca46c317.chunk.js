webpackJsonp([57],{1140:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(3),l=r(d),_=n(213),u=n(1216),f=r(u),p=n(1214),g=r(p),m=n(60),E=r(m),R=function(e){function t(){var e,n,r,a;s(this,t);for(var i=arguments.length,c=Array(i),d=0;d<i;d++)c[d]=arguments[d];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.createNotification=function(e){return function(){switch(e){case"info":_.NotificationManager.info(l.default.createElement(E.default,{id:"notification.infoMsg"}));break;case"success":_.NotificationManager.success(l.default.createElement(E.default,{id:"notification.successMessage"}),l.default.createElement(E.default,{id:"notification.titleHere"}));break;case"warning":_.NotificationManager.warning(l.default.createElement(E.default,{id:"notification.warningMessage"}),l.default.createElement(E.default,{id:"notification.closeAfter3000ms"}),3e3);break;case"error":_.NotificationManager.error(l.default.createElement(E.default,{id:"notification.errorMessage"}),l.default.createElement(E.default,{id:"notification.clickMe"}),5e3,function(){alert("callback")})}}},a=n,o(r,a)}return a(t,e),c(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(g.default,{title:l.default.createElement(E.default,{id:"extension.notification"}),match:this.props.match}),l.default.createElement("div",{className:"row"},l.default.createElement(f.default,{styleName:"col-12",heading:"React Notification",childrenStyle:"text-center"},l.default.createElement("div",null,l.default.createElement("button",{className:"btn btn-info",onClick:this.createNotification("info")},l.default.createElement(E.default,{id:"notification.info"})),l.default.createElement("button",{className:"btn btn-success",onClick:this.createNotification("success")},l.default.createElement(E.default,{id:"notification.success"})),l.default.createElement("button",{className:"btn btn-warning",onClick:this.createNotification("warning")},l.default.createElement(E.default,{id:"notification.warning"})),l.default.createElement("button",{className:"btn btn-danger",onClick:this.createNotification("error")},l.default.createElement(E.default,{id:"notification.error"}))))),l.default.createElement(_.NotificationContainer,null))}}]),t}(l.default.Component),O=R;t.default=O;var b=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"Example","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(O,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(l,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(g,"_index4","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(E,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(a,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(R,"Example","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(O,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"),__REACT_HOT_LOADER__.register(b,"_temp2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/extensions/routes/notification/index.js"))}()},1214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=r(s),a=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},i=function(e,t,n){return 0===n?"#/":"#/"+e.split(t)[0]+t},c=function(e){var t=e.title,n=e.match,r=n.path.substr(1);r.split("/");return o.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},o.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},d=c;t.default=d;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"getDisplayString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"getUrlString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"getDisplayString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"getUrlString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"))}()},1216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=r(s),a=function(e){var t=e.heading,n=e.children,r=e.styleName,s=e.cardStyle,a=e.childrenStyle,i=e.headerOutside;return o.default.createElement("div",{className:""+r},i&&o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading heading"},t),n.length>1&&o.default.createElement("div",{className:"entry-description"},n[0])),o.default.createElement("div",{className:"jr-card "+s},!i&&t&&o.default.createElement("div",{className:"jr-card-header"},o.default.createElement("h3",{className:"card-heading"},t),n.length>1&&o.default.createElement("div",{className:"sub-heading"},n[0])),o.default.createElement("div",{className:"jr-card-body "+a},n.length>1?n[1]:n)))},i=a;t.default=i,a.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"CardBox","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(a,"CardBox","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(c,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/CardBox/index.js"))}()}});
//# sourceMappingURL=57.f5f7ab69b644ca46c317.chunk.js.map