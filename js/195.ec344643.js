"use strict";(self["webpackChunkhkmodmanager_github_io"]=self["webpackChunkhkmodmanager_github_io"]||[]).push([[195],{5195:function(l,e,n){n.r(e),n.d(e,{default:function(){return H}});var a=n(3396),o=n(9242),i=n(7139),t=n(4870);const s={class:"form-floating mb-3"},r=(0,a._)("label",{for:"name"},"Name",-1),u={class:"form-floating mb-3"},m=(0,a._)("label",{for:"ver"},"Version",-1),d={class:"form-floating mb-3"},c=(0,a._)("label",{for:"desc"},"Description",-1),f={class:"form-floating mb-3"},v=(0,a._)("label",{for:"authors"},"Authors (Use ';' to split)",-1),_={class:"form-floating mb-3"},p=(0,a._)("label",{for:"skinName"},"Skin Name",-1),g={class:"form-floating mb-3"},h=(0,a._)("label",{for:"skin"},"Skin URL",-1),b={class:"input-group mb-3"},k={class:"mb-3"},w=(0,a._)("h2",null,"Output",-1),y=["textContent"];var C=(0,a.aZ)({__name:"View-T-Skin",setup(l){const e=(0,t.iH)(""),n=(0,t.iH)(""),C=(0,t.iH)("1.0.0.0"),U=(0,t.iH)(""),H=(0,t.iH)(""),V=(0,t.iH)(""),N=(0,t.iH)(""),R=(0,t.iH)();async function S(){const l=R.value?.files?.item(0);let a;l&&(a=await new Promise((e=>{const n=new FileReader;n.onloadend=()=>{e(n.result)},n.readAsDataURL(l)}))),e.value=JSON.stringify({name:n.value.trim(),description:U.value.trim(),version:C.value.trim(),authors:H.value.trim().split(";"),icon:a,additionalAssets:[{installRootDir:"mods",installPath:"Custom Knight/Skins"+(""==N.value?"":"/"+N.value.trim()),downloadUrl:encodeURI(V.value).trim()}],dependencies:["Custom Knight"]},void 0,4)}return(l,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a._)("div",s,[(0,a.wy)((0,a._)("input",{class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),onChange:S},null,544),[[o.nr,n.value]]),r]),(0,a._)("div",u,[(0,a.wy)((0,a._)("input",{class:"form-control",id:"ver","onUpdate:modelValue":t[1]||(t[1]=l=>C.value=l),onChange:S},null,544),[[o.nr,C.value]]),m]),(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{class:"form-control",id:"desc","onUpdate:modelValue":t[2]||(t[2]=l=>U.value=l),onChange:S},null,544),[[o.nr,U.value]]),c]),(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{class:"form-control",id:"authors","onUpdate:modelValue":t[3]||(t[3]=l=>H.value=l),onChange:S},null,544),[[o.nr,H.value]]),v]),(0,a._)("div",_,[(0,a.wy)((0,a._)("input",{class:"form-control",id:"skinName","onUpdate:modelValue":t[4]||(t[4]=l=>N.value=l),onChange:S},null,544),[[o.nr,N.value]]),p]),(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control",id:"skin","onUpdate:modelValue":t[5]||(t[5]=l=>V.value=l),onChange:S},null,544),[[o.nr,V.value]]),h]),(0,a._)("div",b,[(0,a._)("label",{for:"icon",class:"input-group-text",onChange:S},"Icon",32),(0,a._)("input",{class:"form-control",type:"file",id:"icon",ref_key:"icon",ref:R},null,512)])]),(0,a._)("div",k,[w,(0,a._)("textarea",{class:"form-control",textContent:(0,i.zw)(e.value),readonly:"",style:{"min-height":"40em"}},null,8,y)])],64))}});const U=C;var H=U}}]);
//# sourceMappingURL=195.ec344643.js.map