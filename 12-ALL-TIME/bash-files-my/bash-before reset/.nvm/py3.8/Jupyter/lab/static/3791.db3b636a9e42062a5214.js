(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[3791,7113],{10638:(r,o,n)=>{"use strict";n.d(o,{Z:()=>i});var c=n(94015);var e=n.n(c);var t=n(23645);var a=n.n(t);var s=a()(e());s.push([r.id,".cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/colorforth.css"],names:[],mappings:"AAAA,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,uCAAuC,mBAAmB,EAAE,4BAA4B,EAAE;AAC1F,4CAA4C,cAAc,EAAE;AAC5D,mDAAmD,cAAc,EAAE;AACnE,0CAA0C,cAAc,EAAE;AAC1D,sCAAsC,4BAA4B,EAAE;;AAEpE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE,gBAAgB,EAAE;AACzE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;;AAEvD,uCAAuC,WAAW,EAAE;AACpD,qEAAqE,WAAW,EAAE;AAClF,sCAAsC;AACtC,sCAAsC;;AAEtC,uCAAuC,aAAa,EAAE;AACtD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;;AAEpD,2CAA2C,mBAAmB,EAAE;;AAEhE,uCAAuC,qCAAqC,EAAE;;AAE9E,qDAAqD,mBAAmB,EAAE",sourcesContent:[".cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n"],sourceRoot:""}]);const i=s},23645:r=>{"use strict";r.exports=function(r){var o=[];o.toString=function o(){return this.map((function(o){var n=r(o);if(o[2]){return"@media ".concat(o[2]," {").concat(n,"}")}return n})).join("")};o.i=function(r,n,c){if(typeof r==="string"){r=[[null,r,""]]}var e={};if(c){for(var t=0;t<this.length;t++){var a=this[t][0];if(a!=null){e[a]=true}}}for(var s=0;s<r.length;s++){var i=[].concat(r[s]);if(c&&e[i[0]]){continue}if(n){if(!i[2]){i[2]=n}else{i[2]="".concat(n," and ").concat(i[2])}}o.push(i)}};return o}},94015:r=>{"use strict";function o(r,o){return a(r)||t(r,o)||c(r,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,o){if(!r)return;if(typeof r==="string")return e(r,o);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,o)}function e(r,o){if(o==null||o>r.length)o=r.length;for(var n=0,c=new Array(o);n<o;n++){c[n]=r[n]}return c}function t(r,o){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(r)))return;var n=[];var c=true;var e=false;var t=undefined;try{for(var a=r[Symbol.iterator](),s;!(c=(s=a.next()).done);c=true){n.push(s.value);if(o&&n.length===o)break}}catch(i){e=true;t=i}finally{try{if(!c&&a["return"]!=null)a["return"]()}finally{if(e)throw t}}return n}function a(r){if(Array.isArray(r))return r}r.exports=function r(n){var c=o(n,4),e=c[1],t=c[3];if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var i="/*# ".concat(s," */");var l=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[e].concat(l).concat([i]).join("\n")}return[e].join("\n")}},13791:(r,o,n)=>{"use strict";n.r(o);n.d(o,{default:()=>i});var c=n(93379);var e=n.n(c);var t=n(10638);var a={};a.insert="head";a.singleton=false;var s=e()(t.Z,a);const i=t.Z.locals||{}},93379:(r,o,n)=>{"use strict";var c=function r(){var o;return function r(){if(typeof o==="undefined"){o=Boolean(window&&document&&document.all&&!window.atob)}return o}}();var e=function r(){var o={};return function r(n){if(typeof o[n]==="undefined"){var c=document.querySelector(n);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement){try{c=c.contentDocument.head}catch(e){c=null}}o[n]=c}return o[n]}}();var t=[];function a(r){var o=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===r){o=n;break}}return o}function s(r,o){var n={};var c=[];for(var e=0;e<r.length;e++){var s=r[e];var i=o.base?s[0]+o.base:s[0];var l=n[i]||0;var A="".concat(i," ").concat(l);n[i]=l+1;var f=a(A);var u={css:s[1],media:s[2],sourceMap:s[3]};if(f!==-1){t[f].references++;t[f].updater(u)}else{t.push({identifier:A,updater:p(u,o),references:1})}c.push(A)}return c}function i(r){var o=document.createElement("style");var c=r.attributes||{};if(typeof c.nonce==="undefined"){var t=true?n.nc:0;if(t){c.nonce=t}}Object.keys(c).forEach((function(r){o.setAttribute(r,c[r])}));if(typeof r.insert==="function"){r.insert(o)}else{var a=e(r.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(o)}return o}function l(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var A=function r(){var o=[];return function r(n,c){o[n]=c;return o.filter(Boolean).join("\n")}}();function f(r,o,n,c){var e=n?"":c.media?"@media ".concat(c.media," {").concat(c.css,"}"):c.css;if(r.styleSheet){r.styleSheet.cssText=A(o,e)}else{var t=document.createTextNode(e);var a=r.childNodes;if(a[o]){r.removeChild(a[o])}if(a.length){r.insertBefore(t,a[o])}else{r.appendChild(t)}}}function u(r,o,n){var c=n.css;var e=n.media;var t=n.sourceMap;if(e){r.setAttribute("media",e)}else{r.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(r.styleSheet){r.styleSheet.cssText=c}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(c))}}var m=null;var d=0;function p(r,o){var n;var c;var e;if(o.singleton){var t=d++;n=m||(m=i(o));c=f.bind(null,n,t,false);e=f.bind(null,n,t,true)}else{n=i(o);c=u.bind(null,n,o);e=function r(){l(n)}}c(r);return function o(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap){return}c(r=n)}else{e()}}}r.exports=function(r,o){o=o||{};if(!o.singleton&&typeof o.singleton!=="boolean"){o.singleton=c()}r=r||[];var n=s(r,o);return function r(c){c=c||[];if(Object.prototype.toString.call(c)!=="[object Array]"){return}for(var e=0;e<n.length;e++){var i=n[e];var l=a(i);t[l].references--}var A=s(c,o);for(var f=0;f<n.length;f++){var u=n[f];var m=a(u);if(t[m].references===0){t[m].updater();t.splice(m,1)}}n=A}}}}]);
//# sourceMappingURL=3791.db3b636a9e42062a5214.js.map