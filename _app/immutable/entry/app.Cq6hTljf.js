const __vite__fileDeps=["../nodes/0.CDsJSUDt.js","../chunks/scheduler.BbHEdU_o.js","../chunks/index.C4_LZXI8.js","../chunks/stores.Df-Nr_c-.js","../chunks/entry.BfRdR7Xx.js","../chunks/index.C86LX6bd.js","../chunks/cartStore.Tgt-CBTH.js","../chunks/ProgressBar.svelte_svelte_type_style_lang.DIIN_Lwg.js","../assets/ProgressBar.Cirlo5Z8.css","../assets/0.E3sZfnG9.css","../nodes/1.CYhGcfp6.js","../nodes/2.MF5Q_83y.js","../assets/2.Z52YbOiG.css","../nodes/3.O2Mf9SZm.js","../chunks/index.R8ovVqwX.js","../nodes/4.DgXazfzM.js","../chunks/each.C4iFGr7S.js","../nodes/5.B7wzmU8R.js","../chunks/item.DoH6dnPr.js","../assets/5.Bj4M_SNO.css","../nodes/6.BSIrvvt8.js","../chunks/transform.CrWt3WPY.js","../nodes/7.CewLNmaL.js","../nodes/8.COGVj44q.js","../assets/8.B6wHnLy3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as q,a as B,K as h,g as U,i as v,f as g,C as j,J as z,e as J,c as K,b as W,q as I,z as d,t as F,d as G,j as H,L as O,M as P,N as Q}from"../chunks/scheduler.BbHEdU_o.js";import{S as X,i as Y,a as w,c as A,t as b,g as D,b as R,d as T,m as L,e as y}from"../chunks/index.C4_LZXI8.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=P(r,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=P(r,_(t)),t[12](e),R(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=P(r,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=P(r,_(t)),t[11](e),R(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=P(r,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=P(r,_(t)),t[10](e),R(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&y(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=J("div"),n&&n.c(),this.h()},l(i){e=K(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=W(e);n&&n.l(r),r.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function C(a){let e;return{c(){e=F(a[7])},l(n){e=G(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&H(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=B(),f&&f.c(),r=h()},l(l){n.l(l),i=U(l),f&&f.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),w(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),b(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(b(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;j(i.page.notify);let l=!1,m=!1,u=null;z(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function E(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function N(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,E,k,N]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.CDsJSUDt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>p(()=>import("../nodes/1.CYhGcfp6.js"),__vite__mapDeps([10,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/2.MF5Q_83y.js"),__vite__mapDeps([11,1,2,12]),import.meta.url),()=>p(()=>import("../nodes/3.O2Mf9SZm.js"),__vite__mapDeps([13,14,1,2]),import.meta.url),()=>p(()=>import("../nodes/4.DgXazfzM.js"),__vite__mapDeps([15,14,1,16,2,6,5]),import.meta.url),()=>p(()=>import("../nodes/5.B7wzmU8R.js"),__vite__mapDeps([17,14,1,2,18,5,6,19]),import.meta.url),()=>p(()=>import("../nodes/6.BSIrvvt8.js"),__vite__mapDeps([20,14,1,2,16,7,5,8,21]),import.meta.url),()=>p(()=>import("../nodes/7.CewLNmaL.js"),__vite__mapDeps([22,14,1,2,16,18,5,4]),import.meta.url),()=>p(()=>import("../nodes/8.COGVj44q.js"),__vite__mapDeps([23,14,1,2,16,5,21,24]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/cart":[4],"/itemPage":[5],"/leaderboard":[6],"/shop":[7],"/stats":[8]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
