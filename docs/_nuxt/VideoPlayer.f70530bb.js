import{C as m,s as f}from"./index.52fe7a95.js";import{f as _,h as i,r as h,q as s,x as c,u as e,B as v,D as u,F as k,A as w,y as g,L as b,M as B,E as x}from"./runtime-core.esm-bundler.c752936e.js";/* empty css                        */const C=t=>(b("data-v-3c798ec4"),t=t(),B(),t),I={key:1,class:"loaded"},S=["poster"],V=["src"],$=["src","type"],E=["autoplay","src"],N=C(()=>x("button",null,null,-1)),P=[N],q=_({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=h(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,n;return r.src||((n=(o=r.sources)==null?void 0:o[0])==null?void 0:n.src)||!1});return(o,n)=>{const y=m;return s(),c("div",{class:g(["video-player",{loaded:e(p)}])},[(e(a)?e(a).poster:t.poster)?(s(),v(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),c("div",I,[e(a)?e(a).name==="youtube"?(s(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,E)):u("",!0):(s(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),c("source",{key:0,src:e(d)},null,8,V)):u("",!0),(s(!0),c(k,null,w(t.sources,l=>(s(),c("source",{key:l.src||l,src:l.src||l,type:l.type},null,8,$))),128))],8,S))])):u("",!0),e(p)?u("",!0):(s(),c("div",{key:2,class:"play-button",onClick:n[0]||(n[0]=l=>p.value=!0)},P))],2)}}}),j=f(q,[["__scopeId","data-v-3c798ec4"]]);export{j as default};
