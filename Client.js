!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://localhost:3000/",n(n.s=14)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){t.exports={host:"localhost",port:3e3,https:!0,hot:!0,displayAwait:!0,dragTimeout:150,colors:{ready:"#C3CFE0",init:"#85D035",await:"#FFC000",warning:"#FD971F",error:"#F92672"}}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var o=n(7),r=n(8);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(9);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(13)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"body #livereload-HMR{--x: 0;--y: 0;position:fixed;z-index:9999;top:var(--y);left:var(--x)}body #livereload-HMR .livereload-HMR-btn{--color: #C3CFE0;display:flex;align-items:center;min-height:40px;padding:0 5px;font-size:10px;border-radius:5px;backdrop-filter:blur(4px);background-color:rgba(0,0,0,0.35);box-shadow:0 0 15px 0 rgba(0,0,0,0.6);text-shadow:0 0 3px rgba(0,0,0,0.6);cursor:pointer;user-select:none;color:var(--color) !important;border:1px solid var(--color) !important}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],e))}else{for(var c=[];a<o.parts.length;a++)c.push(y(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var o=n.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,v=0;function y(t,e){var n,o,r;if(e.singleton){var i=v++;n=h||(h=u(e)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t,e);return s(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i],u=r[a.id];u&&(u.refs--,o.push(u))}t&&s(c(t,e),e);for(var l=0;l<o.length;l++){var f=o[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete r[f.id]}}}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(1),a=n.n(i),c=n(3),s=n.n(c);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=null===e?{}:e;for(var n=document.createDocumentFragment(),o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];if(r.forEach((function(t){if(t instanceof HTMLElement)n.appendChild(t);else if("string"==typeof t){var e=document.createTextNode(t);n.appendChild(e)}else t instanceof DocumentFragment?n.appendChild(t):console.warn("not appendable",t)})),"function"==typeof t){e.children=n;var a=new t(e);return a=a.render?a.render():a}if("string"==typeof t){var c=document.createElement(t);return c.appendChild(n),Object.assign(c,e),c}}var l=n(2),f=n.n(l),d=n(4),p=n.n(d),h=n(5),v=n.n(h),y=n(6),m=n.n(y),g=function(){function t(){r()(this,t),this.events={}}return a()(t,[{key:"on",value:function(t,e){return this.events[t]=this.events[t]||new Set,this.events[t].add(e),this}},{key:"off",value:function(t,e){return!!this.events[t]&&this.events[t].delete(e)}},{key:"one",value:function(t,e){return this.events[t]=new Set([e]),this}},{key:"emit",value:function(t,e){this.events[t]&&this.events[t].forEach((function(t){return t(e)}))}}]),t}(),b=function(t){function e(t){var n;return r()(this,e),(n=p()(this,v()(e).call(this))).publicPath=t,n.init(),n}return m()(e,t),a()(e,[{key:"stop",value:function(){!0===window.hotClient.isOpen&&window.hotClient.stop()}},{key:"start",value:function(){!1===window.hotClient.isOpen&&window.hotClient.start()}},{key:"getResources",value:function(){var t=this;if(window.hotClient.isOpen)return this.emit("ok",window.hotClient),!1;this.emit("await"),this._fetchResourcesUrl().then((function(e){return t._loadResources(e)})).catch((function(){}))}},{key:"_fetchResourcesUrl",value:function(){var t=this;return fetch(this.publicPath+"index.html").then((function(t){return t.text()})).then((function(e){var n=[],o=(new DOMParser).parseFromString(e,"text/html");return o.querySelectorAll("script:not(.ignore)").forEach((function(e){var o={type:"script",url:t._normalizeSrc(e.getAttribute("src"))};n.push(o)})),o.querySelectorAll('link[rel="stylesheet"]:not(.ignore)').forEach((function(e){var o={type:"style",url:t._normalizeSrc(e.getAttribute("href"))};n.push(o)})),n})).catch((function(){return t.emit("close")}))}},{key:"_normalizeSrc",value:function(t){if(!t||"string"!=typeof t)return!1;var e=!1;if(-1!==t.search(/^http|^\/\//im))e=t;else{e=this.publicPath+t.replace(/^\W+/im,"")}return e}},{key:"_loadResources",value:function(t){var e=this,n=t.shift(),o=n.type,r=n.url;return fetch(r).then((function(t){if(200!==t.status)throw new Error("".concat(r," status: ").concat(t.status));return t.text()})).then((function(t){return e._appendResource(o,t)})).then((function(){return e.emit("loaded",r)})).catch((function(){return e.emit("warning",r)})).finally((function(){return!(t.length>0)||e._loadResources(t)}))}},{key:"_appendResource",value:function(t,e){var n=document.createElement(t);return n.textContent=e,document.head.appendChild(n),!0}},{key:"_messageAnalyze",value:function(t){try{(t=JSON.parse(t)).type&&this.emit(t.type,t.data)}catch(t){}}},{key:"init",value:function(){var t=this;window.hotClient||(window.hotClient=new g),window.hotClient.one("open",(function(){t.emit("open",window.hotClient),t.emit("ok",window.hotClient)})),window.hotClient.one("close",(function(){return t.emit("close",window.hotClient)})),window.hotClient.one("message",(function(e){return t._messageAnalyze(e)})),window.hotClient.one("error",(function(e){return t.emit("error",e)}))}}]),e}(g),w=function(){function t(){return r()(this,t),this.type={success:["color: #272822;","background-color: #A6E22E;","padding: 2px 10px;","width: 100%"].join(" "),info:["color: #272822;","background-color: #66D9EF;","padding: 2px 10px;"].join(" "),warning:["color: #272822;","background-color: #FD971F;","padding: 2px 10px;"].join(" "),error:["color: #272822;","background-color: #F92672;","padding: 2px 10px;"].join(" "),default:["color: #272822;","background-color: #E6DB74;","padding: 2px 10px;"].join(" ")},this.message.bind(this)}return a()(t,[{key:"_msgTemplate",value:function(t,e){console.log("%c%s",t,e)}},{key:"message",value:function(){for(var t=this.type.default,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(n.length>1){var r=n.shift();t=this.type[r]?this.type[r]:this.type.default}var i=n.join(" ");this._msgTemplate(t,i)}}]),t}();var x=function(t,e){return function(t,e){var n,o,r=!1;return function i(){if(r)return n=arguments,void(o=this);t.apply(this,arguments),r=!0,setTimeout((function(){r=!1,n&&(i.apply(o,n),n=o=null)}),e)}}(t,e)},S=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r()(this,t),this.props=e}return a()(t,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.onclick,o=t.color,r=t.dragMode,i="--color: ".concat(o,"; ");return r&&(i+="cursor: move; opacity: 0.5; background-color: rgba(0, 0, 0, .7)"),u("button",{className:"livereload-HMR-btn",title:e,onclick:n,style:i},"LiveReload")}}]),t}();n(10);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=function(){function t(e){var n=this;r()(this,t),s()(this,"moveHandler",(function(t){var e=t.clientX,o=t.clientY,r=n.state,i=r.offset,a=r.size,c=e-i.x>=0?e-i.x:0,s=o-i.y>=0?o-i.y:0;c=c+a.x<=window.innerWidth?c:window.innerWidth-a.x,s=s+a.y<=window.innerHeight?s:window.innerHeight-a.y,n.setState({position:{x:c,y:s}})})),s()(this,"dragHandler",(function(t){var e=t.offsetX,o=t.offsetY,r=t.currentTarget,i=getComputedStyle(r),a={x:parseInt(i.width),y:parseInt(i.height)},c={x:e,y:o},s=setTimeout((function(){n.setState({dragMode:!0,offset:c,size:a}),document.addEventListener("mousemove",n.moveHandler)}),n.state.dragTimeout);document.addEventListener("mouseup",(function(){requestAnimationFrame((function(){clearTimeout(s),n.setState({dragMode:!1}),document.removeEventListener("mousemove",n.moveHandler),n.setPosition(n.state.position)}))}),{once:!0})})),this.log=new w,this.target=null,this.id=e.startsWith("#")?e.slice(1):e,this.publicPath="".concat(f.a.https?"https":"http","://").concat(f.a.host,":").concat(f.a.port,"/"),this.clientController=new b(this.publicPath),this.moveHandler=x(this.moveHandler,5);var o=this.getPosition(),i=void 0!==f.a.dragTimeout?f.a.dragTimeout:150,a=O({ready:"#C3CFE0",init:"#85D035",await:"#FFC000",warning:"#FD971F",error:"#F92672"},f.a.colors);this.state={connectStatus:"ready",wasInit:!1,wasConnected:!1,isConnected:!1,dragMode:!1,position:o,offset:{x:0,y:0},notLoaded:new Set,dragTimeout:i},this.clientController.on("loaded",(function(t){n.log("default","*ScriptsAutoload* Загружен на страницу:",t);var e=n.state.notLoaded;e.delete(t),n.setState({notLoaded:e})})),this.clientController.on("open",(function(){n.log("success","*ScriptsAutoload* Подключен к серверу:",n.publicPath)})),this.clientController.on("invalid",(function(){f.a.displayAwait&&n.setState({connectStatus:"await"})})),this.clientController.on("ok",(function(){n.setState({connectStatus:"init",wasInit:!0,wasConnected:!0,isConnected:!0})})),this.clientController.on("await",(function(){var t={connectStatus:"await"};n.state.wasInit||(t.connectStatus="ready"),n.setState(t)})),this.clientController.on("warning",(function(t){n.log("warning","*ScriptsAutoload* Ошибка загрузки ресурса:",t);var e=n.state.notLoaded;e.add(t),n.setState({notLoaded:e})})),this.clientController.on("close",(function(){n.log("error","*ScriptsAutoload* Закрыто соединение с сервером:",n.publicPath);var t={isConnected:!1,connectStatus:"error"};n.state.wasInit||(t.connectStatus="ready"),n.setState(t)})),this.status={ready:{handler:function(){n.setState({connectStatus:"await",wasInit:!0}),n.state.wasConnected?n.clientController.start():n.tryConnect()},color:a.ready,title:"Подключиться к серверу ".concat(this.publicPath)},init:{handler:function(){n.setState({connectStatus:"ready"}),n.clientController.stop()},color:a.init,title:"Отключиться от сервера ".concat(this.publicPath)},await:{handler:function(){},color:a.await,title:"Ожидание ресурса"},error:{handler:function(){n.setState({connectStatus:"await",wasInit:!0}),n.state.wasConnected?n.clientController.start():n.tryConnect()},color:a.error,title:"Отключен от сервера "+this.publicPath}}}return a()(t,[{key:"tryConnect",value:function(){this.clientController.getResources()}},{key:"setState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=O({},this.state);this.state=O({},e,{},t),this.mount()}},{key:"getPosition",value:function(){var t={x:0,y:0};try{var e=window.localStorage.getItem("livereloadHMR");t=JSON.parse(e).position}catch(t){}return t}},{key:"setPosition",value:function(t){window.localStorage.setItem("livereloadHMR",JSON.stringify({position:t}))}},{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.target;this.target=t;var e=t.querySelector("#"+this.id);e?e.replaceWith(this.render()):t.appendChild(this.render())}},{key:"render",value:function(){var t=this.state,e=t.connectStatus,n=t.notLoaded,o=t.position,r=t.dragMode,i=this.status[e],a=i.handler,c=i.color,s=i.title;if(n.size>0){var l="";n.forEach((function(t){return l+="\n"+t})),s="Ошибка загрузки: ".concat(l),c=colors.warning}var f="--x: ".concat(o.x,"px; --y: ").concat(o.y,"px;");return r&&(a=function(){}),u("div",{id:this.id,onmousedown:this.dragHandler,style:f},u(S,{title:s,color:c,onclick:a,dragMode:r}))}}]),t}();if(window.top===window){var j=document.body,P=new k("#livereload-HMR");P.mount(j),P.tryConnect()}}]);