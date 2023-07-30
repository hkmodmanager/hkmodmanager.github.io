(function(){"use strict";var n={9290:function(n,t,o){o.a(n,(async function(n,e){try{o(6229),o(7330),o(2062);var a=o(3396),r=o(4870),i=o(7139),u=o(9574),c=o(5658),s=o(2483),l=o(5286),f=n([l]);l=(f.then?(await f)():f)[0];const d={key:0,class:"navbar navbar-expand-lg bg-body-tertiary"},p={class:"container-fluid"},h=(0,a._)("img",{src:u,class:"d-inline-block align-text-top logo-svg",style:{width:"1.5em",height:"2.5em"}},null,-1),m={class:"collapse navbar-collapse"},b={class:"navbar-nav w-100",style:{"font-size":"1.5em","justify-content":"space-between"}},g=(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link"})],-1),v={key:0,class:"nav-item"},w={class:"nav-link",href:"https://github.com/hkmodmanager/HKModManager/releases/latest"},y=(0,a.uE)('<li class="nav-item"><a class="nav-link" href="https://discord.gg/VDsg3HmWuB"><i class="bi bi-discord"></i> <small>Discord</small></a></li><li class="nav-item"><a class="nav-link" href="https://github.com/hkmodmanager/HKModManager"><i class="bi bi-github"></i> <small>Repository</small></a></li>',2),k={key:1,class:"alert alert-danger"},_=["innerHTML"],M={class:"app"};t.Z=(0,a.aZ)({__name:"App",setup(n){const t=(0,c.QT)(),o=window.parent==window.self;function e(){console.log("Check lang");const n=new URL(window.location.href),o=n.searchParams.get("lang");console.log(n),o&&(console.log("Change lang: "+o),t.locale.value=o)}return(0,s.ao)(e),(0,a.Xn)(e),(0,a.wF)(e),(n,t)=>{const e=(0,a.up)("router-link"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o?((0,a.wg)(),(0,a.iD)("nav",d,[(0,a._)("div",p,[(0,a.Wm)(e,{class:"navbar-brand",to:"/"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a._)("div",m,[(0,a._)("ul",b,[g,(0,r.SU)(l.L)?((0,a.wg)(),(0,a.iD)("li",v,[(0,a._)("a",w,(0,i.zw)(n.$t("nav.download")),1)])):(0,a.kq)("",!0),y])])])])):(0,a.kq)("",!0),o&&!(0,r.SU)(l.L)?((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("span",{innerHTML:n.$t("nav.notsupported")},null,8,_)])):(0,a.kq)("",!0),(0,a._)("div",M,[(0,a.Wm)(u)])],64)}}}),e()}catch(d){e(d)}}))},3972:function(n,t){t.Z={zh:{test1:"你好，世界",nav:{download:"下载",notsupported:"HKMM不支持当前平台，请使用<a href='https://themulhima.github.io/Scarab/'>Scarab+</a>"},download:{thanks:"感谢你的下载"},home:{publishMod:"发布Mod",publishModpack:"发布Modpack",startModding:"Modding文档",notsupported:"HKMM不支持当前平台",supportPlatform:"支持的平台：Windows 10+"}},en:{test1:"Hello, World!",nav:{download:"Download",notsupported:"HKMM does not support the current platform, please use <a href='https://themulhima.github.io/Scarab/'>Scarab+</a>"},download:{thanks:"Thank you for downloading HKMM"},home:{publishMod:"Publish mod",publishModpack:"Publish modpack",startModding:"Modding Docs",notsupported:"Current platform is not supported",supportPlatform:"Supported platforms: Windows 10+"}}}},5286:function(n,t,o){o.a(n,(async function(n,e){try{o.d(t,{L:function(){return f}});var a=o(9242),r=o(8555),i=o(3824),u=o(5658),c=o(3972),s=n([r]);r=(s.then?(await s)():s)[0];const l=(0,u.o)({fallbackWarn:!1,missingWarn:!1,legacy:!1,messages:c.Z,fallbackLocale:"en-US",locale:navigator.language});let f=!1;const d=await(navigator.userAgentData?.getHighEntropyValues(["platformVersion"]));!d||"Windows"!=d.platform||(d.platformVersion?.split(".")[0]??0)<=0?(f=!1,console.error("current platform is not supported.")):f=!0,(0,a.ri)(r.Z).use(l).use(i.Z).mount("#app"),e()}catch(l){e(l)}}),1)},3824:function(n,t,o){var e=o(2483);const a=[{name:"home",path:"/",component:()=>o.e(70).then(o.bind(o,5070))},{name:"get-command",path:"/command/:cmd(.*)*",component:()=>o.e(70).then(o.bind(o,5070))},{path:"/about",component:()=>o.e(682).then(o.bind(o,6682))},{path:"/tools/skin",component:()=>o.e(195).then(o.bind(o,5195))}],r=(0,e.p7)({history:(0,e.r5)(),routes:a});t.Z=r},8555:function(n,t,o){o.a(n,(async function(n,e){try{var a=o(5580),r=(o(4050),n([a]));a=(r.then?(await r)():r)[0];const i=a.Z;t.Z=i,e()}catch(i){e(i)}}))},4050:function(){},5580:function(n,t,o){o.a(n,(async function(n,e){try{o.d(t,{Z:function(){return a.Z}});var a=o(9290),r=n([a]);a=(r.then?(await r)():r)[0],e()}catch(i){e(i)}}))},9574:function(n,t,o){n.exports=o.p+"img/logo.be82af0a.svg"}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var r=t[e]={exports:{}};return n[e].call(r.exports,r,r.exports,o),r.exports}o.m=n,function(){var n="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=function(n){n&&n.d<1&&(n.d=1,n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},r=function(o){return o.map((function(o){if(null!==o&&"object"===typeof o){if(o[n])return o;if(o.then){var r=[];r.d=0,o.then((function(n){i[t]=n,a(r)}),(function(n){i[e]=n,a(r)}));var i={};return i[n]=function(n){n(r)},i}}var u={};return u[n]=function(){},u[t]=o,u}))};o.a=function(o,i,u){var c;u&&((c=[]).d=-1);var s,l,f,d=new Set,p=o.exports,h=new Promise((function(n,t){f=t,l=n}));h[t]=p,h[n]=function(n){c&&n(c),d.forEach(n),h["catch"]((function(){}))},o.exports=h,i((function(o){var a;s=r(o);var i=function(){return s.map((function(n){if(n[e])throw n[e];return n[t]}))},u=new Promise((function(t){a=function(){t(i)},a.r=0;var o=function(n){n!==c&&!d.has(n)&&(d.add(n),n&&!n.d&&(a.r++,n.push(a)))};s.map((function(t){t[n](o)}))}));return a.r?u:i()}),(function(n){n?f(h[e]=n):l(p),a(c)})),c&&c.d<0&&(c.d=0)}}(),function(){var n=[];o.O=function(t,e,a,r){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],a=n[l][1],r=n[l][2];for(var u=!0,c=0;c<e.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(n){return o.O[n](e[c])}))?e.splice(c--,1):(u=!1,r<i&&(i=r));if(u){n.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[e,a,r]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.f={},o.e=function(n){return Promise.all(Object.keys(o.f).reduce((function(t,e){return o.f[e](n,t),t}),[]))}}(),function(){o.u=function(n){return"js/"+n+"."+{70:"d4effe59",195:"3c8e1ca9",682:"54079efe"}[n]+".js"}}(),function(){o.miniCssF=function(n){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="hkmodmanager.github.io:";o.l=function(e,a,r,i){if(n[e])n[e].push(a);else{var u,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+r){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+r),u.src=e),n[e]=[a];var d=function(t,o){u.onerror=u.onload=null,clearTimeout(p);var a=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(n){return n(o)})),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var n={143:0};o.f.j=function(t,e){var a=o.o(n,t)?n[t]:void 0;if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(o,e){a=n[t]=[o,e]}));e.push(a[2]=r);var i=o.p+o.u(t),u=new Error,c=function(e){if(o.o(n,t)&&(a=n[t],0!==a&&(n[t]=void 0),a)){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,r,i=e[0],u=e[1],c=e[2],s=0;if(i.some((function(t){return 0!==n[t]}))){for(a in u)o.o(u,a)&&(o.m[a]=u[a]);if(c)var l=c(o)}for(t&&t(e);s<i.length;s++)r=i[s],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(l)},e=self["webpackChunkhkmodmanager_github_io"]=self["webpackChunkhkmodmanager_github_io"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(5286)}));e=o.O(e)})();
//# sourceMappingURL=app.3b44e1a6.js.map