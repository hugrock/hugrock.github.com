function S(){}const et=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function nt(){return Object.create(null)}function B(t){t.forEach(W)}function L(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function rt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function j(t,...e){if(t==null){for(const i of e)i(void 0);return S}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ct(t){let e;return j(t,n=>e=n)(),e}function ot(t,e,n){t.$$.on_destroy.push(j(e,n))}function lt(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function ut(t,e,n,i,r,c){if(r){const s=D(e,n,i,c);t.p(s,r)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function ht(t,e,n){return t.set(n),e}function mt(t){return t&&L(t.destroy)?t.destroy:S}function pt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let b=!1;function yt(){b=!0}function bt(){b=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:O(1,r,M=>e[n[M]].claim_order,a))-1;i[o]=n[u]+1;const k=u+1;n[k]=o,r=Math.max(k,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(s[o],u)}}function T(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=v("style");return e.textContent="/* empty */",I(F(t),e),e.sheet}function I(t,e){return T(t.head||t,e),e.sheet}function U(t,e){if(b){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){b&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function vt(){return E(" ")}function Et(){return E("")}function N(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return t.dataset.svelteH}function At(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,r=!1){K(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function q(t,e,n,i){return z(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ct(t,e,n){return q(t,e,n,v)}function St(t,e,n){return q(t,e,n,J)}function Q(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function jt(t){return Q(t," ")}function Dt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let p;function V(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=v("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=V();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=N(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=N(i.contentWindow,"resize",e),e()}),T(t,i),()=>{(r||c&&i.contentWindow)&&c(),G(i)}}function qt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ht(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Mt(t,e){return new t(e)}let y;function g(t){y=t}function h(){if(!y)throw new Error("Function called outside component initialization");return y}function Pt(t){h().$$.on_mount.push(t)}function Wt(t){h().$$.after_update.push(t)}function Bt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=X(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function Lt(t,e){return h().$$.context.set(t,e),e}function Ot(t){return h().$$.context.get(t)}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const _=[],A=[];let d=[];const C=[],H=Promise.resolve();let w=!1;function Y(){w||(w=!0,H.then($))}function Ft(){return Y(),H}function Z(t){d.push(t)}const x=new Set;let f=0;function $(){if(f!==0)return;const t=y;do{try{for(;f<_.length;){const e=_[f];f++,g(e),tt(e.$$)}}catch(e){throw _.length=0,f=0,e}for(g(null),_.length=0,f=0;A.length;)A.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(_.length);for(;C.length;)C.pop()();w=!1,x.clear(),g(t)}function tt(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function It(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{_ as $,qt as A,_t as B,Wt as C,P as D,dt as E,lt as F,ut as G,ft as H,at as I,Pt as J,Et as K,A as L,Mt as M,Ft as N,ct as O,F as P,gt as Q,Z as R,X as S,et as T,nt as U,$ as V,st as W,It as X,y as Y,g as Z,W as _,vt as a,Y as a0,yt as a1,bt as a2,Ot as a3,Lt as a4,pt as a5,Bt as a6,mt as a7,Rt as a8,ht as a9,zt as aa,At as b,Ct as c,Q as d,v as e,G as f,jt as g,U as h,xt as i,Dt as j,ot as k,j as l,L as m,S as n,Ht as o,Nt as p,kt as q,B as r,it as s,E as t,N as u,wt as v,rt as w,J as x,St as y,Tt as z};
