import{c as i}from"./useTheme-Dd0E9xSW.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("PinOff",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=i("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);async function M(t){var a;if((a=navigator.clipboard)!=null&&a.writeText){await navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.append(e),e.focus(),e.select();const n=document.execCommand("copy");if(e.remove(),!n)throw new Error("Clipboard copy failed.")}function p(t){const e=t.pageTitle.trim();if(e)return e;try{return new URL(t.url).hostname}catch{return t.url}}function s(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([\\`*_{}[\]()#+.!|-])/g,"\\$1")}function S(t,e){const n=e==="zh-CN"?"来源：":"Source: ";return`${t.text}

${n}${p(t)}
${t.url}`}function d(t){return[...t].sort((e,n)=>e.isPinned!==n.isPinned?e.isPinned?-1:1:n.createdAt-e.createdAt)}function y(t,e,n=Date.now()){const a=e==="zh-CN",c=[`# ${a?"Tabloom 剪切板导出":"Tabloom Clipboard Export"}`,"",`${a?"导出时间":"Exported"}: ${new Date(n).toISOString()}`];return d(t).forEach((o,l)=>{const r=o.isPinned?` ${a?"（置顶）":"(Pinned)"}`:"";c.push("",`## ${l+1}. ${s(p(o))}${r}`,"",...o.text.split(`
`).map(u=>`> ${s(u)}`)),o.note&&c.push("",`**${a?"备注":"Note"}:** ${s(o.note)}`),c.push("",`**${a?"来源":"Source"}:** ${s(p(o))}`,`<${o.url.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}>`,"",`**${a?"颜色":"Color"}:** ${o.color}`,`**${a?"保存时间":"Saved"}:** ${new Date(o.createdAt).toISOString()}`)}),`${c.join(`
`)}
`}function h(t,e=Date.now()){return JSON.stringify({version:1,exportedAt:new Date(e).toISOString(),records:d(t)},null,2)}function b(t,e=new Date){return`tabloom-clipboard-${[e.getFullYear(),String(e.getMonth()+1).padStart(2,"0"),String(e.getDate()).padStart(2,"0")].join("-")}.${t==="markdown"?"md":"json"}`}function v(t,e,n){const a=e==="json"?h(t):y(t,n),c=e==="json"?"application/json":"text/markdown",o=new Blob([a],{type:`${c};charset=utf-8`}),l=URL.createObjectURL(o),r=document.createElement("a");r.href=l,r.download=b(e),r.rel="noopener",r.style.display="none",document.body.append(r);try{r.click()}finally{r.remove(),URL.revokeObjectURL(l)}}function j(t){return t.slice(0,3).map(e=>({...e}))}function z(t){return t?["workspace","clipboard"]:["workspace"]}function L(t){return t>0}function P(t,e){return[e,...t.filter(({id:n})=>n!==e.id)].sort((n,a)=>a.createdAt-n.createdAt)}export{g as C,k as D,m as L,x as M,w as P,C as S,$ as a,z as b,M as c,v as d,L as e,S as f,j as g,P as r};
