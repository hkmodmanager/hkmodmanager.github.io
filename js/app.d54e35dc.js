(function(){"use strict";var n={4399:function(n,t,e){var r=e(9242),o=e(3396),i=e.p+"img/logo.be82af0a.svg";const a={key:0,class:"navbar navbar-expand-lg bg-body-tertiary"},u={class:"container-fluid"},c=(0,o._)("img",{src:i,class:"d-inline-block align-text-top logo-svg",style:{width:"2.5em",height:"2.5em"}},null,-1),l={class:"collapse navbar-collapse"},f={class:"navbar-nav"},s={class:"nav-item"};var d=(0,o.aZ)({__name:"App",setup(n){const t=1!=window.isEmbedded;return(n,e)=>{const r=(0,o.up)("router-link"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[t?((0,o.wg)(),(0,o.iD)("nav",a,[(0,o._)("div",u,[(0,o.Wm)(r,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o._)("div",l,[(0,o._)("ul",f,[(0,o._)("li",s,[(0,o.Wm)(r,{class:"nav-link",to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})])])])])])):(0,o.kq)("",!0),(0,o.Wm)(i)],64)}}});const p=d;var v=p,b=e(2483);const m=[{path:"/",component:()=>e.e(898).then(e.bind(e,3898))},{path:"/about",component:()=>e.e(682).then(e.bind(e,6682))},{path:"/tools/skin",component:()=>e.e(195).then(e.bind(e,5195))}],h=(0,b.p7)({history:(0,b.r5)(),routes:m});var g=h;(0,r.ri)(v).use(g).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],i=n[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{195:"ec344643",682:"3eb4fcf3",898:"614a3f23"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="hkmodmanager.github.io:";e.l=function(r,o,i,a){if(n[r])n[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",t+i),u.src=r),n[r]=[o];var d=function(t,e){u.onerror=u.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=i);var a=e.p+e.u(t),u=new Error,c=function(r){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};e.l(a,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var f=c(e)}for(t&&t(r);l<a.length;l++)i=a[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(f)},r=self["webpackChunkhkmodmanager_github_io"]=self["webpackChunkhkmodmanager_github_io"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4399)}));r=e.O(r)})();
//# sourceMappingURL=app.d54e35dc.js.map