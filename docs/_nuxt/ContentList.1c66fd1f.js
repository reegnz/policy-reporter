import n from"./ContentQuery.6e1bd9d0.js";import{f as c,ad as h,j as p}from"./runtime-core.esm-bundler.c752936e.js";import"./index.52fe7a95.js";import"./asyncData.4104abc4.js";import"./entry.a6d383b7.js";import"./DocsAsideTree.54c4f4d1.js";import"./cookie.059535a7.js";import"./Container.580a96c7.js";import"./query.c3f7607a.js";const L=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{L as default};
