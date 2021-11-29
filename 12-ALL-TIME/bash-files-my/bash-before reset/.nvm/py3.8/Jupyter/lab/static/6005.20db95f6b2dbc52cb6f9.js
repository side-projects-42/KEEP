(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6005,7113],{88334:(e,n,r)=>{"use strict";r.d(n,{Z:()=>a});var t=r(94015);var o=r.n(t);var c=r(23645);var i=r.n(c);var s=i()(o());s.push([e.id,"/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/seti.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA,gCAAgC,+BAA+B,EAAE;AACjE,oCAAoC,cAAc,EAAE;AACpD,wDAAwD,qCAAqC,EAAE;AAC/F,8IAA8I,qCAAqC,EAAE;AACrL,6JAA6J,qCAAqC,EAAE;AACpM,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,0BAA0B,cAAc,EAAE;AAC1C,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,yDAAyD,cAAc,EAAE;AACzE,6BAA6B,cAAc,EAAE;AAC7C,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,0BAA0B,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],sourceRoot:""}]);const a=s},23645:e=>{"use strict";e.exports=function(e){var n=[];n.toString=function n(){return this.map((function(n){var r=e(n);if(n[2]){return"@media ".concat(n[2]," {").concat(r,"}")}return r})).join("")};n.i=function(e,r,t){if(typeof e==="string"){e=[[null,e,""]]}var o={};if(t){for(var c=0;c<this.length;c++){var i=this[c][0];if(i!=null){o[i]=true}}}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);if(t&&o[a[0]]){continue}if(r){if(!a[2]){a[2]=r}else{a[2]="".concat(r," and ").concat(a[2])}}n.push(a)}};return n}},94015:e=>{"use strict";function n(e,n){return i(e)||c(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(!e)return;if(typeof e==="string")return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}function o(e,n){if(n==null||n>e.length)n=e.length;for(var r=0,t=new Array(n);r<n;r++){t[r]=e[r]}return t}function c(e,n){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;var r=[];var t=true;var o=false;var c=undefined;try{for(var i=e[Symbol.iterator](),s;!(t=(s=i.next()).done);t=true){r.push(s.value);if(n&&r.length===n)break}}catch(a){o=true;c=a}finally{try{if(!t&&i["return"]!=null)i["return"]()}finally{if(o)throw c}}return r}function i(e){if(Array.isArray(e))return e}e.exports=function e(r){var t=n(r,4),o=t[1],c=t[3];if(typeof btoa==="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i);var a="/*# ".concat(s," */");var A=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[o].concat(A).concat([a]).join("\n")}return[o].join("\n")}},26005:(e,n,r)=>{"use strict";r.r(n);r.d(n,{default:()=>a});var t=r(93379);var o=r.n(t);var c=r(88334);var i={};i.insert="head";i.singleton=false;var s=o()(c.Z,i);const a=c.Z.locals||{}},93379:(e,n,r)=>{"use strict";var t=function e(){var n;return function e(){if(typeof n==="undefined"){n=Boolean(window&&document&&document.all&&!window.atob)}return n}}();var o=function e(){var n={};return function e(r){if(typeof n[r]==="undefined"){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement){try{t=t.contentDocument.head}catch(o){t=null}}n[r]=t}return n[r]}}();var c=[];function i(e){var n=-1;for(var r=0;r<c.length;r++){if(c[r].identifier===e){n=r;break}}return n}function s(e,n){var r={};var t=[];for(var o=0;o<e.length;o++){var s=e[o];var a=n.base?s[0]+n.base:s[0];var A=r[a]||0;var l="".concat(a," ").concat(A);r[a]=A+1;var m=i(l);var u={css:s[1],media:s[2],sourceMap:s[3]};if(m!==-1){c[m].references++;c[m].updater(u)}else{c.push({identifier:l,updater:p(u,n),references:1})}t.push(l)}return t}function a(e){var n=document.createElement("style");var t=e.attributes||{};if(typeof t.nonce==="undefined"){var c=true?r.nc:0;if(c){t.nonce=c}}Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}));if(typeof e.insert==="function"){e.insert(n)}else{var i=o(e.insert||"head");if(!i){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}i.appendChild(n)}return n}function A(e){if(e.parentNode===null){return false}e.parentNode.removeChild(e)}var l=function e(){var n=[];return function e(r,t){n[r]=t;return n.filter(Boolean).join("\n")}}();function m(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet){e.styleSheet.cssText=l(n,o)}else{var c=document.createTextNode(o);var i=e.childNodes;if(i[n]){e.removeChild(i[n])}if(i.length){e.insertBefore(c,i[n])}else{e.appendChild(c)}}}function u(e,n,r){var t=r.css;var o=r.media;var c=r.sourceMap;if(o){e.setAttribute("media",o)}else{e.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(e.styleSheet){e.styleSheet.cssText=t}else{while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(document.createTextNode(t))}}var d=null;var f=0;function p(e,n){var r;var t;var o;if(n.singleton){var c=f++;r=d||(d=a(n));t=m.bind(null,r,c,false);o=m.bind(null,r,c,true)}else{r=a(n);t=u.bind(null,r,n);o=function e(){A(r)}}t(e);return function n(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap){return}t(e=r)}else{o()}}}e.exports=function(e,n){n=n||{};if(!n.singleton&&typeof n.singleton!=="boolean"){n.singleton=t()}e=e||[];var r=s(e,n);return function e(t){t=t||[];if(Object.prototype.toString.call(t)!=="[object Array]"){return}for(var o=0;o<r.length;o++){var a=r[o];var A=i(a);c[A].references--}var l=s(t,n);for(var m=0;m<r.length;m++){var u=r[m];var d=i(u);if(c[d].references===0){c[d].updater();c.splice(d,1)}}r=l}}}}]);
//# sourceMappingURL=6005.20db95f6b2dbc52cb6f9.js.map