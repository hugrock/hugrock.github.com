import{s as x,n as u,c as S}from"../chunks/scheduler.CGGfjE9Y.js";import{S as j,i as q,e as h,t as d,s as y,c as v,a as g,b,d as c,f as C,g as _,h as E,j as $}from"../chunks/index.BTwfTk3j.js";import{p as H}from"../chunks/stores.Cn-uaOCm.js";function P(p){var f;let a,s=p[0].status+"",r,o,n,i=((f=p[0].error)==null?void 0:f.message)+"",m;return{c(){a=h("h1"),r=d(s),o=y(),n=h("p"),m=d(i)},l(e){a=v(e,"H1",{});var t=g(a);r=b(t,s),t.forEach(c),o=C(e),n=v(e,"P",{});var l=g(n);m=b(l,i),l.forEach(c)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,m)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&$(r,s),t&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&$(m,i)},i:u,o:u,d(e){e&&(c(a),c(o),c(n))}}}function k(p,a,s){let r;return S(p,H,o=>s(0,r=o)),[r]}class B extends j{constructor(a){super(),q(this,a,k,P,x,{})}}export{B as component};
