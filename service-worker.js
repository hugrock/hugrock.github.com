const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/_app/immutable/entry/app.i5CVlYsX.js",s+"/_app/immutable/nodes/0.D0KuHJJl.js",s+"/_app/immutable/assets/0.Ds18Pb4F.css",s+"/_app/immutable/nodes/1.B_dt_vlO.js",s+"/_app/immutable/nodes/2.CMibWBYp.js",s+"/_app/immutable/assets/2.Z52YbOiG.css",s+"/_app/immutable/assets/hugrock.o7cdR05u.png",s+"/_app/immutable/nodes/3.O2Mf9SZm.js",s+"/_app/immutable/nodes/4.DgXazfzM.js",s+"/_app/immutable/nodes/5.B7wzmU8R.js",s+"/_app/immutable/assets/5.Bj4M_SNO.css",s+"/_app/immutable/nodes/6.BSIrvvt8.js",s+"/_app/immutable/nodes/7.CILWSQzG.js",s+"/_app/immutable/assets/shirt.OX2xOGFr.png",s+"/_app/immutable/nodes/8.4cOmbwAD.js",s+"/_app/immutable/assets/8.B6wHnLy3.css",s+"/_app/immutable/assets/ProgressBar.Cirlo5Z8.css",s+"/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DIIN_Lwg.js",s+"/_app/immutable/chunks/cartStore.Tgt-CBTH.js",s+"/_app/immutable/chunks/each.C4iFGr7S.js",s+"/_app/immutable/chunks/entry.CjwxBuHq.js",s+"/_app/immutable/chunks/index.C4_LZXI8.js",s+"/_app/immutable/chunks/index.C86LX6bd.js",s+"/_app/immutable/chunks/index.R8ovVqwX.js",s+"/_app/immutable/chunks/index.xJp9Kd2E.js",s+"/_app/immutable/chunks/item.DoH6dnPr.js",s+"/_app/immutable/chunks/scheduler.BbHEdU_o.js",s+"/_app/immutable/chunks/stores.B8Hoag8v.js",s+"/_app/immutable/chunks/transform.CrWt3WPY.js",s+"/_app/immutable/entry/start.m5jb6dV1.js"],u=[s+"/favicon.ico",s+"/favicon.png",s+"/favicon.svg",s+"/fonts/Quicksand.ttf",s+"/manifest.json",s+"/robots.txt"],l="1715763079019",p=`cache-${l}`,c=[...m,...u];self.addEventListener("install",a=>{async function t(){await(await caches.open(p)).addAll(c)}a.waitUntil(t())});self.addEventListener("activate",a=>{async function t(){for(const e of await caches.keys())e!==p&&await caches.delete(e)}a.waitUntil(t())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function t(){const e=new URL(a.request.url),n=await caches.open(p);if(c.includes(e.pathname))return n.match(e.pathname);try{const i=await fetch(a.request);return i.status===200&&n.put(a.request,i.clone()),i}catch{return n.match(a.request)}}a.respondWith(t())});
