const __vite__fileDeps=["../nodes/0.7rV_Hwt-.js","../chunks/scheduler.aa7Px5UK.js","../chunks/index.IZOBbkxX.js","../chunks/stores.BSEKzA2q.js","../chunks/entry.BEp9UxVt.js","../chunks/index.CSM-hGIt.js","../chunks/ProgressBar.svelte_svelte_type_style_lang.qLKMncw-.js","../assets/ProgressBar.Cirlo5Z8.css","../chunks/cartStore.B89L4kNd.js","../assets/0.C7gUAZHH.css","../nodes/1.BLcPer4Z.js","../nodes/2.eEWbRFc_.js","../nodes/3.Dmc5upf_.js","../chunks/index.R8ovVqwX.js","../nodes/4.C3JVncHs.js","../chunks/each.NCSBAA2m.js","../nodes/5.BgtZZ0db.js","../chunks/item.m6guThZA.js","../assets/5.Bj4M_SNO.css","../nodes/6.V_tCF7Qc.js","../chunks/transform.CrWt3WPY.js","../nodes/7.Cm3rsnOV.js","../chunks/index.xJp9Kd2E.js","../nodes/8.6bTGtZM_.js","../assets/8.B6wHnLy3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as C,f as N,o as U,g as I,t as j}from"../chunks/scheduler.aa7Px5UK.js";import{S as z,i as W,s as F,A as h,f as G,g as v,r as g,u as A,k as w,d as b,e as H,c as J,a as K,n as O,q as d,t as Q,b as X,j as Y,v as D,B as P,w as R,x as T,y,z as L}from"../chunks/index.IZOBbkxX.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=P(r,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=P(r,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=P(r,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=P(r,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=P(r,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=P(r,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&q(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(b),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&b(e),n&&n.d()}}}function q(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=F(),f&&f.c(),r=h()},l(l){n.l(l),i=G(l),f&&f.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),g(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(b(i),b(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;N(i.page.notify);let l=!1,m=!1,u=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function E(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,E,k,B]}class oe extends z{constructor(e){super(),W(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.7rV_Hwt-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>p(()=>import("../nodes/1.BLcPer4Z.js"),__vite__mapDeps([10,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/2.eEWbRFc_.js"),__vite__mapDeps([11,1,2]),import.meta.url),()=>p(()=>import("../nodes/3.Dmc5upf_.js"),__vite__mapDeps([12,13,1,2]),import.meta.url),()=>p(()=>import("../nodes/4.C3JVncHs.js"),__vite__mapDeps([14,13,1,2,15,8,5]),import.meta.url),()=>p(()=>import("../nodes/5.BgtZZ0db.js"),__vite__mapDeps([16,13,1,2,17,5,8,18]),import.meta.url),()=>p(()=>import("../nodes/6.V_tCF7Qc.js"),__vite__mapDeps([19,13,1,2,15,6,5,7,20]),import.meta.url),()=>p(()=>import("../nodes/7.Cm3rsnOV.js"),__vite__mapDeps([21,13,1,2,15,17,5,4,22]),import.meta.url),()=>p(()=>import("../nodes/8.6bTGtZM_.js"),__vite__mapDeps([23,13,1,2,15,22,5,20,24]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/cart":[4],"/itemPage":[5],"/leaderboard":[6],"/shop":[7],"/stats":[8]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
