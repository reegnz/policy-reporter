import{T as f,_ as y}from"./DocsAsideTree.54c4f4d1.js";import{s as C}from"./index.52fe7a95.js";import{f as h}from"./Container.580a96c7.js";import{u as B}from"./index.04aabe90.js";import{f as w,r as x,q as t,x as k,E as l,G as v,C as b,B as r,u as i,y as I,L as S,M as T}from"./runtime-core.esm-bundler.c752936e.js";/* empty css                      */import"./cookie.059535a7.js";const z=o=>(S("data-v-5fa3121e"),o=o(),T(),o),g=z(()=>l("span",{class:"sr-only"},"Copy to clipboard",-1)),E={class:"icon-wrapper"},N=w({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const d=o,{copy:u}=B(),{prose:s}=h(),e=x("init"),m=_=>{u(d.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(a=>{console.warn("Couldn't copy to clipboard!",a)})};return(_,a)=>{const n=y;return t(),k("button",{class:I([(o.show||e.value==="copied")&&"show"]),onClick:m},[g,l("span",E,[v(f,{name:"fade"},{default:b(()=>{var c,p;return[e.value==="copied"?(t(),r(n,{key:0,name:(c=i(s).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(t(),r(n,{key:1,name:(p=i(s).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),$=C(N,[["__scopeId","data-v-5fa3121e"]]);export{$ as default};
