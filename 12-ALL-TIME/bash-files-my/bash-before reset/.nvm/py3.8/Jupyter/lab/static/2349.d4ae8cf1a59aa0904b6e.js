(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2349,7113],{84732:(r,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(94015);var c=o.n(n);var t=o(23645);var a=o.n(t);var i=a()(c());i.push([r.id,"/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/mbo.css"],names:[],mappings:"AAAA,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;;AAEjE,uBAAuB,mBAAmB,EAAE,cAAc,EAAE;AAC5D,oCAAoC,mBAAmB,EAAE;AACzD,2IAA2I,mCAAmC,EAAE;AAChL,0JAA0J,mCAAmC,EAAE;AAC/L,gCAAgC,mBAAmB,EAAE,iBAAiB,EAAE;AACxE,qCAAqC,YAAY,EAAE;AACnD,4CAA4C,WAAW,EAAE;AACzD,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,8BAA8B,EAAE;;AAE/D,4BAA4B,cAAc,EAAE;AAC5C,yBAAyB,cAAc,EAAE;AACzC,2BAA2B,cAAc,EAAE;;AAE3C,0DAA0D,cAAc,EAAE;AAC1E,4BAA4B,cAAc,EAAE;AAC5C,2BAA2B,cAAc,EAAE;AAC3C,uCAAuC,cAAc,EAAE;;AAEvD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,wBAAwB,cAAc,EAAE;AACxC,4BAA4B,cAAc,EAAE,iBAAiB,EAAE;AAC/D,wBAAwB,cAAc,EAAE;AACxC,yBAAyB,cAAc,EAAE;AACzC,0BAA0B,sBAAsB,EAAE,cAAc,EAAE;AAClE,8BAA8B,cAAc,EAAE;;AAE9C,8CAA8C,mBAAmB,EAAE;AACnE,wCAAwC,yBAAyB,EAAE;AACnE,oCAAoC,oCAAoC,EAAE",sourcesContent:["/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n"],sourceRoot:""}]);const s=i},23645:r=>{"use strict";r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var o=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(o,"}")}return o})).join("")};e.i=function(r,o,n){if(typeof r==="string"){r=[[null,r,""]]}var c={};if(n){for(var t=0;t<this.length;t++){var a=this[t][0];if(a!=null){c[a]=true}}}for(var i=0;i<r.length;i++){var s=[].concat(r[i]);if(n&&c[s[0]]){continue}if(o){if(!s[2]){s[2]=o}else{s[2]="".concat(o," and ").concat(s[2])}}e.push(s)}};return e}},94015:r=>{"use strict";function e(r,e){return a(r)||t(r,e)||n(r,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,e){if(!r)return;if(typeof r==="string")return c(r,e);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor)o=r.constructor.name;if(o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(r,e)}function c(r,e){if(e==null||e>r.length)e=r.length;for(var o=0,n=new Array(e);o<e;o++){n[o]=r[o]}return n}function t(r,e){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(r)))return;var o=[];var n=true;var c=false;var t=undefined;try{for(var a=r[Symbol.iterator](),i;!(n=(i=a.next()).done);n=true){o.push(i.value);if(e&&o.length===e)break}}catch(s){c=true;t=s}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(c)throw t}}return o}function a(r){if(Array.isArray(r))return r}r.exports=function r(o){var n=e(o,4),c=n[1],t=n[3];if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var s="/*# ".concat(i," */");var m=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[c].concat(m).concat([s]).join("\n")}return[c].join("\n")}},42349:(r,e,o)=>{"use strict";o.r(e);o.d(e,{default:()=>s});var n=o(93379);var c=o.n(n);var t=o(84732);var a={};a.insert="head";a.singleton=false;var i=c()(t.Z,a);const s=t.Z.locals||{}},93379:(r,e,o)=>{"use strict";var n=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var c=function r(){var e={};return function r(o){if(typeof e[o]==="undefined"){var n=document.querySelector(o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(c){n=null}}e[o]=n}return e[o]}}();var t=[];function a(r){var e=-1;for(var o=0;o<t.length;o++){if(t[o].identifier===r){e=o;break}}return e}function i(r,e){var o={};var n=[];for(var c=0;c<r.length;c++){var i=r[c];var s=e.base?i[0]+e.base:i[0];var m=o[s]||0;var A="".concat(s," ").concat(m);o[s]=m+1;var f=a(A);var l={css:i[1],media:i[2],sourceMap:i[3]};if(f!==-1){t[f].references++;t[f].updater(l)}else{t.push({identifier:A,updater:d(l,e),references:1})}n.push(A)}return n}function s(r){var e=document.createElement("style");var n=r.attributes||{};if(typeof n.nonce==="undefined"){var t=true?o.nc:0;if(t){n.nonce=t}}Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var a=c(r.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(e)}return e}function m(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var A=function r(){var e=[];return function r(o,n){e[o]=n;return e.filter(Boolean).join("\n")}}();function f(r,e,o,n){var c=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet){r.styleSheet.cssText=A(e,c)}else{var t=document.createTextNode(c);var a=r.childNodes;if(a[e]){r.removeChild(a[e])}if(a.length){r.insertBefore(t,a[e])}else{r.appendChild(t)}}}function l(r,e,o){var n=o.css;var c=o.media;var t=o.sourceMap;if(c){r.setAttribute("media",c)}else{r.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(r.styleSheet){r.styleSheet.cssText=n}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(n))}}var u=null;var b=0;function d(r,e){var o;var n;var c;if(e.singleton){var t=b++;o=u||(u=s(e));n=f.bind(null,o,t,false);c=f.bind(null,o,t,true)}else{o=s(e);n=l.bind(null,o,e);c=function r(){m(o)}}n(r);return function e(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap){return}n(r=o)}else{c()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=n()}r=r||[];var o=i(r,e);return function r(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var c=0;c<o.length;c++){var s=o[c];var m=a(s);t[m].references--}var A=i(n,e);for(var f=0;f<o.length;f++){var l=o[f];var u=a(l);if(t[u].references===0){t[u].updater();t.splice(u,1)}}o=A}}}}]);
//# sourceMappingURL=2349.d4ae8cf1a59aa0904b6e.js.map