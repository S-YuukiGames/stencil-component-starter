let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!u(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?$(null,l):l),o=s)};c(n);const i=$(e,null);return i.u=t,r.length>0&&(i.$=r),i},$=(e,t)=>({t:0,m:e,i:t,p:null,$:null}),d={},m=(t,n,l)=>{let o,r,c=n.$[l],i=0;if(null!==c.i)o=c.p=s.createTextNode(c.i);else if(o=c.p=s.createElement(c.m),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=m(t,c,i),r&&o.appendChild(r);return o},p=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=m(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},y=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},h=(e,t)=>e.m===t.m,w=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;o<=c&&r<=u;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:h(i,f)?(w(i,f),i=t[++o],f=l[++r]):h(a,$)?(w(a,$),a=t[--c],$=l[--u]):h(i,$)?(w(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],$=l[--u]):h(a,f)?(w(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=l[++r]):(s=m(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?p(e,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&y(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),p(n,null,t,s,0,s.length-1)):null!==l&&y(l,0,l.length-1):e.i!==o&&(n.data=o)},b=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.h=t)))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return b(e,e.g),B((()=>S(e,t)));e.t|=512},S=(e,t)=>{const n=e.S;return C(void 0,(()=>j(e,n,t)))},j=async(n,l,o)=>{const r=n.j,c=r["s-rc"];o&&(e=>{const t=e.M,n=e.j,l=t.t,o=((e,t)=>{let n=a(t),l=q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.j,o=n.v||$(null,null),r=(e=>e&&e.m===d)(l)?l:f(null,null,l);t=s.tagName,r.m=null,r.t|=4,n.v=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],w(o,r)})(n,M(n,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>v(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},M=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){R(t,e.j)}return t},v=e=>{const t=e.j,n=e.g;64&e.t||(e.t|=64,O(t),e.k(t),n||k()),e.h&&(e.h(),e.h=void 0),512&e.t&&z((()=>g(e,!1))),e.t&=-517},k=()=>{O(s.documentElement),z((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"stencil-starter-project-name"}});return e.dispatchEvent(t),t})(l)))},C=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>T(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=T(e),o=s.O.get(t),r=s.t,c=s.S;n=((e,t)=>null==e||u(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||(s.O.set(t,n),c&&2==(18&r)&&g(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},x=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let m,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,u=class extends HTMLElement{constructor(e){super(e),L(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=T(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){b(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=W(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(P(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){R(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=a(n);if(!q.has(t)){const l=()=>{};((e,t,n)=>{let l=q.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,r=()=>g(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return T(this).T}};l.A=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,P(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>m=setTimeout(k,30)))},E=new WeakMap,T=e=>E.get(e),A=(e,t)=>E.set(t.S=e,t),L=(e,t)=>{const n={t:0,j:e,M:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],E.set(e,n)},R=(e,t)=>(0,console.error)(e,t),U=new Map,W=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=U.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(U.set(n,e),e[t])),R)},q=new Map,F=[],H=[],N=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?z(_):o.raf(_))},V=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){R(e)}e.length=0},_=()=>{V(F),V(H),(n=F.length>0)&&o.raf(_)},z=e=>r().then(e),B=N(H,!0);export{x as b,f as h,r as p,A as r}