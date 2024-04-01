import{u as k}from"./B_Zr4wsM.js";import{E as R,h as M,F as L,j as _,p as T,G as E,H as U,I as $,l as D,m as N,c as p,d as O,r as I,o as F,g as G,t as V,v as C,z as J,x as P}from"./B_rJQ3Pw.js";function Y(e,t){const{title:r,titleTemplate:i,...n}=e;return k({title:r,titleTemplate:i,_flatMeta:n},{...t,transform(o){const s=R({...o._flatMeta});return delete o._flatMeta,{...o,meta:s}}})}async function Q(e,t){return await X(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function X(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function W(e){return t=>t?e[t]||t:e.missingValue}function Z({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=W(t));const n=i||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=W(n[o]))}),(o={})=>Object.entries(o).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(o[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function K(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function ee(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function te(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ie(e){const t={options:e},r=(n,o={})=>q(t,n,o),i=(n,o={},s={})=>r(n,{...s,modifiers:E(o,s.modifiers||{})}).url;for(const n in e.presets)i[n]=(o,s,d)=>i(o,s,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,o)=>re(t,n,o),i.getSizes=(n,o)=>se(t,n,o),t.$img=i,i}async function re(e,t,r){const i=q(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await Q(e,i.url)}function q(e,t,r){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=ne(e,r.provider||e.options.provider),o=oe(e,r.preset);if(t=M(t)?t:L(t),!i.supportsAlias)for(const h in e.options.alias)t.startsWith(h)&&(t=_(e.options.alias[h],t.substr(h.length)));if(i.validateDomains&&M(t)){const h=T(t).host;if(!e.options.domains.find(w=>w===h))return{url:t}}const s=E(r,o,n);s.modifiers={...s.modifiers};const d=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=m(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=m(s.modifiers.height));const c=i.getImage(t,s,e);return c.format=c.format||d||"",c}function ne(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function oe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function se(e,t,r){var g,S,b,x,z;const i=m((g=r.modifiers)==null?void 0:g.width),n=m((S=r.modifiers)==null?void 0:S.height),o=te(r.sizes),s=(b=r.densities)!=null&&b.trim()?K(r.densities.trim()):e.options.densities;ee(s);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(o).length>=1){for(const f in o){const v=j(f,String(o[f]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of s)l.push({width:v._cWidth*y,src:A(e,t,r,v,y)})}}ae(c)}else for(const f of s){const v=Object.keys(o)[0];let y=j(v,String(o[v]),n,d,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(x=r.modifiers)==null?void 0:x.width,_cHeight:(z=r.modifiers)==null?void 0:z.height}),l.push({width:f,src:A(e,t,r,y,f)})}de(l);const u=l[l.length-1],h=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,w=h?"w":"x",a=l.map(f=>`${f.src} ${f.width}${w}`).join(", ");return{sizes:h,srcset:a,src:u==null?void 0:u.src}}function j(e,t,r,i,n){const o=n.options.screens&&n.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let d=parseInt(t);if(!o||!d)return;s&&(d=Math.round(d/100*o));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:o,_cWidth:d,_cHeight:c}}function A(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function ae(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function de(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ce=Z({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>$(e)+"_"+$(t)}),le=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=ce(t)||"_";return r||(r=_(i.options.nuxt.baseURL,"/_ipx")),{url:_(r,n,U(e))}},ue=!0,fe=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,getImage:le,supportsAlias:fe,validateDomains:ue},Symbol.toStringTag,{value:"Module"})),H={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"],quality:80};H.providers={ipxStatic:{provider:ge,defaults:{}}};const B=()=>{const e=D(),t=N();return t.$img||t._img||(t._img=ie({...H,nuxt:{baseURL:e.app.baseURL}}))};function me(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const he={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ve=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=B(),n=p(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},pe={...he,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ye=O({name:"NuxtImg",props:pe,emits:["load","error"],setup:(e,t)=>{const r=B(),i=ve(e),n=I(!1),o=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:m(e.width),height:m(e.height)}})),s=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=o.value.sizes,a.srcset=o.value.srcset),a}),d=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const g=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),c=p(()=>e.sizes?o.value.src:r(e.src,i.modifiers.value,i.options.value)),l=p(()=>d.value?d.value:c.value);if(e.preload){const a=Object.values(o.value).every(g=>g);k({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const u=I(),w=N().isHydrating;return F(()=>{if(d.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=o.value.sizes||"",a.srcset=o.value.srcset),a.onload=g=>{n.value=!0,t.emit("load",g)},me("nuxt-image");return}u.value&&(u.value.complete&&w&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>G("img",{ref:u,src:l.value,...s.value,...t.attrs})}}),we=P("div",{class:"block h-10 w-10 bg-[url('/favicon.png')] bg-cover bg-center"},null,-1),_e=P("h1",{class:"text-c_blue font-mont text-center text-xl font-bold"}," Hello World! ",-1),xe=O({__name:"index",setup(e){return Y({title:"My Amazing Site",ogTitle:"My Amazing Site",description:"This is my amazing site, let me tell you all about it.",keywords:"keywords1, keywords2"}),(t,r)=>{const i=ye;return V(),C("div",null,[we,_e,J(i,{src:"/favicon.png"})])}}});export{xe as default};