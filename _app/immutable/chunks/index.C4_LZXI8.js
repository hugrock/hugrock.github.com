var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(Y(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,f as U,P as Z,Q as q,r as v,m as R,R as k,S as G,T as V,U as M,b as H,V as J,W as K,X as tt,Y as et,Z as N,_ as nt,$ as st,a0 as it,a1 as rt,a2 as at}from"./scheduler.BbHEdU_o.js";const B=typeof window<"u";let D=B?()=>window.performance.now():()=>Date.now(),A=B?t=>requestAnimationFrame(t):w;const p=new Set;function F(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&A(F)}function L(t){let e;return p.size===0&&A(F),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const b=new Map;let O=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:q(e),rules:{}};return b.set(t,n),n}function Q(t,e,n,s,r,a,u,l=0){const _=16.666/s;let i=`{
`;for(let g=0;g<=1;g+=_){const m=e+(n-e)*a(g);i+=g*100+`%{${u(m,1-m)}}
`}const f=i+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,d=Z(t),{stylesheet:c,rules:$}=b.get(d)||ft(d,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${s}ms linear ${r}ms 1 both`,O+=1,o}function z(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),O-=r,O||ut())}function ut(){A(()=>{O||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),b.clear())})}let x;function T(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent(G(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(E.delete(t),t.i(e))}function pt(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const W={duration:0};function wt(t,e,n){const s={direction:"in"};let r=e(t,n,s),a=!1,u,l,_=0;function i(){u&&z(t,u)}function f(){const{delay:d=0,duration:c=300,easing:$=V,tick:h=w,css:g}=r||W;g&&(u=Q(t,0,1,c,d,$,g,_++)),h(0,1);const m=D()+d,S=m+c;l&&l.abort(),a=!0,k(()=>P(t,!0,"start")),l=L(C=>{if(a){if(C>=S)return h(1,0),P(t,!0,"end"),i(),a=!1;if(C>=m){const I=$((C-m)/c);h(I,1-I)}}return a})}let o=!1;return{start(){o||(o=!0,z(t),R(r)?(r=r(s),T().then(f)):f())},invalidate(){o=!1},end(){a&&(i(),a=!1)}}}function xt(t,e,n){const s={direction:"out"};let r=e(t,n,s),a=!0,u;const l=y;l.r+=1;let _;function i(){const{delay:f=0,duration:o=300,easing:d=V,tick:c=w,css:$}=r||W;$&&(u=Q(t,1,0,o,f,d,$));const h=D()+f,g=h+o;k(()=>P(t,!1,"start")),"inert"in t&&(_=t.inert,t.inert=!0),L(m=>{if(a){if(m>=g)return c(0,1),P(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const S=d((m-h)/o);c(1-S,S)}}return a})}return R(r)?T().then(()=>{r=r(s),i()}):i(),{end(f){f&&"inert"in t&&(t.inert=_),f&&r.tick&&r.tick(1,0),a&&(u&&z(t,u),a=!1)}}}function vt(t){t&&t.c()}function St(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),k(()=>{const a=t.$$.on_mount.map(nt).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(k)}function _t(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(st.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,s,r,a,u=null,l=[-1]){const _=et;N(t);const i=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||_.$$.root};u&&u(i.root);let f=!1;if(i.ctx=n?n(t,e.props||{},(o,d,...c)=>{const $=c.length?c[0]:d;return i.ctx&&r(i.ctx[o],i.ctx[o]=$)&&(!i.skip_bound&&i.bound[o]&&i.bound[o]($),f&&dt(t,o)),d}):[],i.update(),f=!0,v(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){rt();const o=H(e.target);i.fragment&&i.fragment.l(o),o.forEach(U)}else i.fragment&&i.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),J()}N(_)}class kt{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){_t(this,1),this.$destroy=w}$on(e,n){if(!R(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{kt as S,pt as a,vt as b,yt as c,St as d,_t as e,wt as f,gt as g,xt as h,Et as i,L as l,lt as m,D as n,ct as t};
