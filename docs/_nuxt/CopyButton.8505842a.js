import{_ as i}from"./DocsAsideTree.54c4f4d1.js";import{u as l}from"./index.04aabe90.js";import{f as m,r as u,q as t,x as f,u as d,B as n}from"./runtime-core.esm-bundler.c752936e.js";import"./index.52fe7a95.js";import"./cookie.059535a7.js";import"./Container.580a96c7.js";const C=m({__name:"CopyButton",props:{content:{type:String,default:""}},setup(c){const a=c,{copy:s}=l(),o=u("init"),p=r=>{s(a.content).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(r,y)=>{const e=i;return t(),f("button",{class:"copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black",onClick:p},[d(o)==="copied"?(t(),n(e,{key:0,name:"fa-check",class:"h-4 w-4"})):(t(),n(e,{key:1,name:"fa-copy",class:"h-4 w-4"}))])}}});export{C as default};
