import T from"./ProseTh.b663100d.js";import $ from"./ProseTr.6ea986ae.js";import V from"./ProseThead.feef960e.js";import g from"./ProseCodeInline.25a0e13a.js";import b from"./ProseTd.0920f6da.js";import N from"./ProseTbody.3217ce2f.js";import R from"./ProseTable.5c66272d.js";import{s as A,A as F}from"./index.52fe7a95.js";import{u as S}from"./asyncData.4104abc4.js";import{f as p,h as c,q as a,B as l,C as e,G as r,J as d,D as s,x as I,A as J,F as x,I as m}from"./runtime-core.esm-bundler.c752936e.js";import"./entry.a6d383b7.js";import"./DocsAsideTree.54c4f4d1.js";import"./cookie.059535a7.js";import"./Container.580a96c7.js";import"./query.c3f7607a.js";const E=p({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${F(t.of)}`,{data:h}=await S(t.of,()=>$fetch(k),"$oSoCJtWFoC"),i=c(()=>h.value.props.filter(o=>{var n;return!((n=o.tags)!=null&&n.ignore.includes(o))})),w=c(()=>{var o;return t.required!==void 0?t.required:(o=i.value)==null?void 0:o.find(n=>n.required!==void 0)}),q=c(()=>{var o;return t.values!==void 0?t.values:(o=i.value)==null?void 0:o.find(n=>n.values)}),f=c(()=>{var o;return t.description!==void 0?t.description:(o=i.value)==null?void 0:o.find(n=>n.description)}),y=c(()=>{var o;return t.default!==void 0?t.default:(o=i.value)==null?void 0:o.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:q,showDescription:f,showDefault:y}}});function G(t,k,h,i,w,q){var v,D,P;const f=T,y=$,o=V,n=g,_=b,B=N,C=R;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(a(),l(C,{key:0},{default:e(()=>[r(o,null,{default:e(()=>[r(y,null,{default:e(()=>[r(f,null,{default:e(()=>[d("Prop")]),_:1}),r(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(a(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(a(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(a(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(a(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(B,null,{default:e(()=>[(a(!0),I(x,null,J(t.properties,u=>(a(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(a(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(a(),l(_,{key:1},{default:e(()=>[u.default?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(a(),l(_,{key:2},{default:e(()=>[u.values?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(a(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(a(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const ne=A(E,[["render",G]]);export{ne as default};
