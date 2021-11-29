(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2476,734],{40734:(o,e,t)=>{"use strict";t.r(e);t.d(e,{OfflineNotebookButtons:()=>O,default:()=>F});var n=t(58578);var l=t(2334);var r=t(88597);var a=t(48775);var i=t(64432);var s=t.n(i);let c=null;let d=null;let f=null;let u=null;let p=null;const b="jupyter-offlinenotebook";class k extends(s()){constructor(){super(b);this.version(1).stores({offlinenotebook:"pk, repoid, name, type"});this.offlinenotebook=this.table("offlinenotebook")}}function h(o){c=o["repoid"];if(c){console.log("offline-notebook repoid: "+c)}else{console.log("offline-notebook repoid not found, disabled")}d=o["binder_repo_label"]||"Repo";console.log("offline-notebook repoLabel: "+d);f=o["binder_ref_url"];console.log("offline-notebook binderRefUrl: "+f);u=o["binder_persistent_url"];console.log("offline-notebook binderPersistentUrl: "+u)}function w(){if(!p){p=new k;console.log("offline-notebook: Opened IndexedDB")}return p}function g(o,e,t,n){const l="repoid:"+c+" path:"+o;w().offlinenotebook.put({pk:l,repoid:c,name:o.replace(/.*\//,""),path:o,format:"json",type:"notebook",content:e}).then((o=>t(o))).catch((o=>n(o)))}function m(o,e,t){const n="repoid:"+c+" path:"+o;w().offlinenotebook.get(n).then((o=>e(o))).catch((o=>t(o)))}function v(o,e){const t=new Blob([JSON.stringify(e)],{type:"application/x-ipynb+json"});const n=window.URL.createObjectURL(t);const l=document.createElement("a");document.body.appendChild(l);l.href=n;l.style.display="none";l.download=o;console.log("offlinenotebook: "+o,t);l.click();window.URL.revokeObjectURL(n);document.body.removeChild(l)}function y(){const o=document.createElement("a");document.body.appendChild(o);o.href=f;o.target="_blank";o.style.display="none";o.click();document.body.removeChild(o)}function B(){return c}function C(){return d}function x(){return f}function N(){return u}var D=t(86554);var _=t.n(D);const L="jp-OfflineNotebookToolbarIcon";const E={activate:V,id:"offlinenotebook:offlineNotebookButtons",autoStart:true};class O{createNew(o,e){const t=[];t.push(["downloadVisible",new a.ToolbarButton({className:"downloadVisible",iconClass:"fas fa-download "+L,onClick:()=>{U(o)},tooltip:"Download visible",label:"Download"})]);if(B()){t.push(["saveToBrowser",new a.ToolbarButton({className:"saveToBrowser",iconClass:"fas fa-cloud-download-alt "+L,onClick:()=>{T(o)},tooltip:"Save to browser storage"})]);t.push(["loadFromBrowser",new a.ToolbarButton({className:"loadFromBrowser",iconClass:"fas fa-cloud-upload-alt "+L,onClick:()=>{S(o)},tooltip:"Restore from browser storage"})])}if(x()){const o={GitHub:"fab fa-github",GitLab:"fab fa-gitlab",Git:"fab fa-git"};t.push(["openRepo",new a.ToolbarButton({className:"openRepo",iconClass:(o[C()]||"fas fa-external-link-alt")+" "+L,onClick:y,tooltip:"Visit Binder repository",label:C()})])}if(N()){t.push(["linkToBinder",new a.ToolbarButton({className:"linkToBinder",iconClass:"fas fa-link "+L,onClick:()=>{G(o)},tooltip:"Link to this Binder",label:"Binder"})])}t.reverse();t.forEach((e=>{o.toolbar.insertItem(9,e[0],e[1])}));return new n.DisposableDelegate((()=>{t.forEach((o=>{o[1].dispose()}))}))}}function R(o){return"repoid: "+B()+" path: "+o}function T(o){var e;const t=o.context.path;const n=(e=o.content.model)===null||e===void 0?void 0:e.toJSON();if(!n){const o="Content model is null";(0,a.showErrorMessage)("Local storage error",o);throw o}const l=R(t);g(t,n,(o=>{console.log("offline-notebook saved: ",o);return(0,a.showDialog)({title:"Notebook saved to browser storage",body:l,buttons:[a.Dialog.okButton()]})}),(o=>{(0,a.showErrorMessage)("Local storage IndexedDB error",o);throw o}))}function j(o,e){return e in o}function S(o){const e=o.context.path;const t=R(e);const n="repoid:"+B()+" path:"+e;m(e,(e=>{if(e){console.log("offline-notebook found "+n);return(0,a.showDialog)({title:"This will replace your current notebook with",body:t,buttons:[a.Dialog.cancelButton(),a.Dialog.warnButton({label:"OK"})]}).then((t=>{const n="content";if(t.button.accept&&!o.context.isDisposed){if(j(e,n)){o.context.model.fromJSON(e[n])}else{(0,a.showErrorMessage)("Invalid notebook",'"content" not found')}}}))}else{console.log("offline-notebook not found "+n);(0,a.showErrorMessage)("Notebook not found in browser storage",n)}}),(o=>{(0,a.showErrorMessage)("Local storage IndexedDB error",o);throw o}))}function U(o){var e;const t=o.context.path.replace(/.*\//,"");const n=(e=o.content.model)===null||e===void 0?void 0:e.toJSON();if(!n){const o="Content model is null";(0,a.showErrorMessage)("Local storage error",o);throw o}v(t,n)}class I extends l.Widget{constructor(o){super({node:M(o)})}}function J(o){const e=_()("<input>");_()(o).parent().append(e);e.val(_()(o).data("url")).select();document.execCommand("copy");e.remove()}function M(o){const e=_()("<div/>",{style:"flex-direction: row;","data-url":o}).append(_()("<pre/>",{text:o,style:"margin: 0; white-space: pre-wrap; word-break: break-all;"}));const t=_()("<button/>",{title:"Copy binder link to clipboard","data-url":o}).click((()=>{J(t)}));t.append(_()("<i/>",{class:"fas fa-clipboard"}));e.append(t);return e.get(0)}function G(o){const e=o.context.path;const t=N()+"?urlpath="+encodeURIComponent("lab/tree/"+e);return(0,a.showDialog)({title:"Share Binder link",body:new I(t),buttons:[a.Dialog.okButton()]})}function V(o){console.log("Activating jupyter-offlinenotebook JupyterLab extension");const e=r.PageConfig.getBaseUrl();_().getJSON(e+"offlinenotebook/config",(o=>{h(o)}));o.docRegistry.addWidgetExtension("Notebook",new O)}const F=E}}]);
//# sourceMappingURL=2476.2e89d8d26cac1c825094.js.map