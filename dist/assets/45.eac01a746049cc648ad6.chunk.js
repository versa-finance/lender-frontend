webpackJsonp([45],{1251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),d=r(u),l=n(2466),_=r(l),p=n(1332),f=r(p),g=n(67),m=r(g),R=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateContent=n.updateContent.bind(n),n.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},n}return i(t,e),c(t,[{key:"updateContent",value:function(e){this.setState({content:e})}},{key:"onChange",value:function(e){var t=e.editor.getData();this.setState({content:t})}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(f.default,{title:d.default.createElement(m.default,{id:"sidebar.editors.CKEditor"}),match:this.props.match}),d.default.createElement("div",{className:"jr-card"},d.default.createElement(_.default,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}})))}}]),t}(d.default.Component),b=R;t.default=b;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"CK","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(_,"_reactCkeditorComponent2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(m,"_IntlMessages2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(i,"_inherits","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(R,"CK","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/app/routes/editors/routes/CK/index.js"))}()},1332:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=r(o),i=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},a=function(e,t,n){return 0===n?"#/":"#/"+e.split(t)[0]+t},c=function(e){var t=e.title,n=e.match,r=n.path.substr(1);r.split("/");return s.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},s.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},u=c;t.default=u;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"getUrlString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"_react2","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"getUrlString","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"_default","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/longbridge/Documents/Workspace/ReactJs/lenderfrontend/src/components/ContainerHeader/index.js"))}()},2466:function(e,t,n){"use strict";e.exports=n(2467)},2467:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),d=n(3),l=r(d),_=n(68),p=r(_),f=n(2468),g=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onLoad=n.onLoad.bind(n),n.state={isScriptLoaded:n.props.isScriptLoaded,config:n.props.config},n}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isScriptLoaded?this.onLoad():f(this.props.scriptUrl,this.onLoad)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting){if(this.setState({isScriptLoaded:!0}),!window.CKEDITOR)return void console.error("CKEditor not found");this.editorInstance=window.CKEDITOR.appendTo(p.default.findDOMNode(this),this.state.config,this.props.content);for(var e in this.props.events){var t=this.props.events[e];this.editorInstance.on(e,t)}}}},{key:"render",value:function(){return u.default.createElement("div",{className:this.props.activeClass})}}]),t}(u.default.Component);g.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},g.propTypes={content:l.default.any,config:l.default.object,isScriptLoaded:l.default.bool,scriptUrl:l.default.string,activeClass:l.default.string,events:l.default.object},t.default=g},2468:function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,s){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(s=t,t={}),t=t||{},s=s||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&n(a,t.attrs),t.text&&(a.text=""+t.text),("onload"in a?r:o)(a,s),a.onload||r(a,s),i.appendChild(a)}}});
//# sourceMappingURL=45.eac01a746049cc648ad6.chunk.js.map