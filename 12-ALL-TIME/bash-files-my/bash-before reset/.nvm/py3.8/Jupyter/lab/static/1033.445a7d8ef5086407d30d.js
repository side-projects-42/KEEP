(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1033],{91033:(t,e,n)=>{"use strict";n.d(e,{Z:()=>z});var r=function(){if(typeof Map!=="undefined"){return Map}function t(t,e){var n=-1;t.some((function(t,r){if(t[0]===e){n=r;return true}return false}));return n}return function(){function e(){this.__entries__=[]}Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:true,configurable:true});e.prototype.get=function(e){var n=t(this.__entries__,e);var r=this.__entries__[n];return r&&r[1]};e.prototype.set=function(e,n){var r=t(this.__entries__,e);if(~r){this.__entries__[r][1]=n}else{this.__entries__.push([e,n])}};e.prototype.delete=function(e){var n=this.__entries__;var r=t(n,e);if(~r){n.splice(r,1)}};e.prototype.has=function(e){return!!~t(this.__entries__,e)};e.prototype.clear=function(){this.__entries__.splice(0)};e.prototype.forEach=function(t,e){if(e===void 0){e=null}for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}};return e}()}();var i=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document;var o=function(){if(typeof n.g!=="undefined"&&n.g.Math===Math){return n.g}if(typeof self!=="undefined"&&self.Math===Math){return self}if(typeof window!=="undefined"&&window.Math===Math){return window}return Function("return this")()}();var s=function(){if(typeof requestAnimationFrame==="function"){return requestAnimationFrame.bind(o)}return function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)}}();var a=2;function u(t,e){var n=false,r=false,i=0;function o(){if(n){n=false;t()}if(r){c()}}function u(){s(o)}function c(){var t=Date.now();if(n){if(t-i<a){return}r=true}else{n=true;r=false;setTimeout(u,e)}i=t}return c}var c=20;var f=["top","right","bottom","left","width","height","size","weight"];var h=typeof MutationObserver!=="undefined";var d=function(){function t(){this.connected_=false;this.mutationEventsAdded_=false;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=u(this.refresh.bind(this),c)}t.prototype.addObserver=function(t){if(!~this.observers_.indexOf(t)){this.observers_.push(t)}if(!this.connected_){this.connect_()}};t.prototype.removeObserver=function(t){var e=this.observers_;var n=e.indexOf(t);if(~n){e.splice(n,1)}if(!e.length&&this.connected_){this.disconnect_()}};t.prototype.refresh=function(){var t=this.updateObservers_();if(t){this.refresh()}};t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));t.forEach((function(t){return t.broadcastActive()}));return t.length>0};t.prototype.connect_=function(){if(!i||this.connected_){return}document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);if(h){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true})}else{document.addEventListener("DOMSubtreeModified",this.refresh);this.mutationEventsAdded_=true}this.connected_=true};t.prototype.disconnect_=function(){if(!i||!this.connected_){return}document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect()}if(this.mutationEventsAdded_){document.removeEventListener("DOMSubtreeModified",this.refresh)}this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false};t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=e===void 0?"":e;var r=f.some((function(t){return!!~n.indexOf(t)}));if(r){this.refresh()}};t.getInstance=function(){if(!this.instance_){this.instance_=new t}return this.instance_};t.instance_=null;return t}();var v=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:false,writable:false,configurable:true})}return t};var p=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||o};var l=A(0,0,0,0);function _(t){return parseFloat(t)||0}function b(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}return e.reduce((function(e,n){var r=t["border-"+n+"-width"];return e+_(r)}),0)}function y(t){var e=["top","right","bottom","left"];var n={};for(var r=0,i=e;r<i.length;r++){var o=i[r];var s=t["padding-"+o];n[o]=_(s)}return n}function m(t){var e=t.getBBox();return A(0,0,e.width,e.height)}function w(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n){return l}var r=p(t).getComputedStyle(t);var i=y(r);var o=i.left+i.right;var s=i.top+i.bottom;var a=_(r.width),u=_(r.height);if(r.boxSizing==="border-box"){if(Math.round(a+o)!==e){a-=b(r,"left","right")+o}if(Math.round(u+s)!==n){u-=b(r,"top","bottom")+s}}if(!E(t)){var c=Math.round(a+o)-e;var f=Math.round(u+s)-n;if(Math.abs(c)!==1){a-=c}if(Math.abs(f)!==1){u-=f}}return A(i.left,i.top,a,u)}var g=function(){if(typeof SVGGraphicsElement!=="undefined"){return function(t){return t instanceof p(t).SVGGraphicsElement}}return function(t){return t instanceof p(t).SVGElement&&typeof t.getBBox==="function"}}();function E(t){return t===p(t).document.documentElement}function O(t){if(!i){return l}if(g(t)){return m(t)}return w(t)}function M(t){var e=t.x,n=t.y,r=t.width,i=t.height;var o=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;var s=Object.create(o.prototype);v(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e});return s}function A(t,e,n,r){return{x:t,y:e,width:n,height:r}}var T=function(){function t(t){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=A(0,0,0,0);this.target=t}t.prototype.isActive=function(){var t=O(this.target);this.contentRect_=t;return t.width!==this.broadcastWidth||t.height!==this.broadcastHeight};t.prototype.broadcastRect=function(){var t=this.contentRect_;this.broadcastWidth=t.width;this.broadcastHeight=t.height;return t};return t}();var k=function(){function t(t,e){var n=M(e);v(this,{target:t,contentRect:n})}return t}();var x=function(){function t(t,e,n){this.activeObservations_=[];this.observations_=new r;if(typeof t!=="function"){throw new TypeError("The callback provided as parameter 1 is not a function.")}this.callback_=t;this.controller_=e;this.callbackCtx_=n}t.prototype.observe=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof p(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(e.has(t)){return}e.set(t,new T(t));this.controller_.addObserver(this);this.controller_.refresh()};t.prototype.unobserve=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof p(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(!e.has(t)){return}e.delete(t);if(!e.size){this.controller_.removeObserver(this)}};t.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this)};t.prototype.gatherActive=function(){var t=this;this.clearActive();this.observations_.forEach((function(e){if(e.isActive()){t.activeObservations_.push(e)}}))};t.prototype.broadcastActive=function(){if(!this.hasActive()){return}var t=this.callbackCtx_;var e=this.activeObservations_.map((function(t){return new k(t.target,t.broadcastRect())}));this.callback_.call(t,e,t);this.clearActive()};t.prototype.clearActive=function(){this.activeObservations_.splice(0)};t.prototype.hasActive=function(){return this.activeObservations_.length>0};return t}();var R=typeof WeakMap!=="undefined"?new WeakMap:new r;var j=function(){function t(e){if(!(this instanceof t)){throw new TypeError("Cannot call a class as a function.")}if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}var n=d.getInstance();var r=new x(e,n,this);R.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach((function(t){j.prototype[t]=function(){var e;return(e=R.get(this))[t].apply(e,arguments)}}));var D=function(){if(typeof o.ResizeObserver!=="undefined"){return o.ResizeObserver}return j}();const z=D}}]);
//# sourceMappingURL=1033.445a7d8ef5086407d30d.js.map