!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.play=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.play=t())}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){var a=r(1);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(3)(a,n);a.locals&&(e.exports=a.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var n=(p=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(p))))+" */"),l=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[r].concat(l).concat([n]).join("\n")}var p;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var l=this[n][0];"number"==typeof l&&(a[l]=!0)}for(n=0;n<e.length;n++){var p=e[n];"number"==typeof p[0]&&a[p[0]]||(r&&!p[2]?p[2]=r:r&&(p[2]="("+p[2]+") and ("+r+")"),t.push(p))}},t}},function(e,t,r){var a,n,l={},p=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=a.apply(this,arguments)),n}),i=function(e){return document.querySelector(e)},o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=i.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,y=0,u=[],g=r(4);function c(e,t){for(var r=0;r<e.length;r++){var a=e[r],n=l[a.id];if(n){n.refs++;for(var p=0;p<n.parts.length;p++)n.parts[p](a.parts[p]);for(;p<a.parts.length;p++)n.parts.push(m(a.parts[p],t))}else{var i=[];for(p=0;p<a.parts.length;p++)i.push(m(a.parts[p],t));l[a.id]={id:a.id,refs:1,parts:i}}}}function f(e,t){for(var r=[],a={},n=0;n<e.length;n++){var l=e[n],p=t.base?l[0]+t.base:l[0],i={css:l[1],media:l[2],sourceMap:l[3]};a[p]?a[p].parts.push(i):r.push(a[p]={id:p,parts:[i]})}return r}function d(e,t){var r=o(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===e.insertAt)a?a.nextSibling?r.insertBefore(t,a.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=o(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,n)}}function x(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),d(e,t),t}function v(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function m(e,t){var r,a,n,l;if(t.transform&&e.css){if(!(l=t.transform(e.css)))return function(){};e.css=l}if(t.singleton){var p=y++;r=s||(s=h(t)),a=w.bind(null,r,p,!1),n=w.bind(null,r,p,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),d(e,t),t}(t),a=L.bind(null,r,t),n=function(){x(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(t),a=j.bind(null,r),n=function(){x(r)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=p()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=f(e,t);return c(r,t),function(e){for(var a=[],n=0;n<r.length;n++){var p=r[n];(i=l[p.id]).refs--,a.push(i)}e&&c(f(e,t),t);for(n=0;n<a.length;n++){var i;if(0===(i=a[n]).refs){for(var o=0;o<i.parts.length;o++)i.parts[o]();delete l[i.id]}}}};var b,k=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=k(t,n);else{var l=document.createTextNode(n),p=e.childNodes;p[t]&&e.removeChild(p[t]),p.length?e.insertBefore(l,p[t]):e.appendChild(l)}}function j(e,t){var r=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function L(e,t,r){var a=r.css,n=r.sourceMap,l=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||l)&&(a=g(a)),n&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var p=new Blob([a],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(p),i&&URL.revokeObjectURL(i)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,a=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,l=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(n=0===l.indexOf("//")?l:0===l.indexOf("/")?r+l:a+l.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(e,t,r){"use strict";r.r(t);var a={name:"play",method:function(){let e=this;function t(){if(e.config.allowPlayAfterEnded||!e.ended)if(e.paused){let t=e.play();void 0!==t&&t&&t.catch(e=>{})}else e.pause()}e.on("playBtnClick",t),e.once("destroy",(function r(){e.off("playBtnClick",t),e.off("destroy",r)}))}};function n(e="div",t="",r={},a=""){let n=document.createElement(e);return n.className=a,n.innerHTML=t,Object.keys(r).forEach(t=>{let a=t,l=r[t];"video"===e||"audio"===e?l&&n.setAttribute(a,l):n.setAttribute(a,l)}),n}function l(e,t,r,a){let l=n("xg-"+e,"",{},`xgplayer-${e}-img`);if(l.style.backgroundImage=`url("${t}")`,r&&a){let t,n,p;["px","rem","em","pt","dp","vw","vh","vm","%"].every(e=>!(r.indexOf(e)>-1&&a.indexOf(e)>-1)||(t=Number(r.slice(0,r.indexOf(e)).trim()),n=Number(a.slice(0,a.indexOf(e)).trim()),p=e,!1)),l.style.width=`${t}${p}`,l.style.height=`${n}${p}`,l.style.backgroundSize=`${t}${p} ${n}${p}`,l.style.margin="start"===e?`-${n/2}${p} auto auto -${t/2}${p}`:"auto 5px auto 5px"}return l}r(0);var p={name:"s_play",method:function(){let e,t=this,r=t.config.playBtn?t.config.playBtn:{};e="img"===r.type?l("play",r.url.play,r.width,r.height):n("xg-play",'<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n</div>\n                                      <div class="xgplayer-icon-pause"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n</div>\n                                     </xg-icon>',{},"xgplayer-play");let a={};a.play=t.lang.PLAY_TIPS,a.pause=t.lang.PAUSE_TIPS;let p=n("xg-tips",`<span class="xgplayer-tip-play">${a.play}</span>\n                                        <span class="xgplayer-tip-pause">${a.pause}</span>`,{},"xgplayer-tips");e.appendChild(p),t.once("ready",()=>{t.controls&&t.controls.appendChild(e)}),["click","touchend"].forEach(r=>{e.addEventListener(r,(function(e){e.preventDefault(),e.stopPropagation(),t.userGestureTrigEvent("playBtnClick")}))})}};t.default={name:"play",method:function(){a.method.call(this),p.method.call(this)}}}])}));