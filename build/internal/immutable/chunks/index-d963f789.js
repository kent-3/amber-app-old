function $(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function N(t){t.forEach(K)}function L(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Lt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function lt(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,o){if(r){const s=Q(e,n,i,o);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window<"u";let at=W?()=>window.performance.now():()=>Date.now(),R=W?t=>requestAnimationFrame(t):$;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&R(U)}function ft(t){let e;return x.size===0&&R(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let T=!1;function _t(){T=!0}function dt(){T=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ht(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function pt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(V(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(T){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){T&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Jt(){return z(" ")}function Kt(){return z("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){wt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return tt(t,e,n,Y)}function Vt(t,e,n){return tt(t,e,n,$t)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Xt(t){return vt(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function te(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ne(t,e){return new t(e)}const k=new Map;let D=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:yt(e),rules:{}};return k.set(t,n),n}function St(t,e,n,i,r,o,s,u=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*o(m);l+=m*100+`%{${s(g,1-g)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${u}`,_=V(t),{stylesheet:d,rules:h}=k.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Ct())}function Ct(){R(()=>{D||(k.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),k.clear())})}let E;function v(t){E=t}function et(){if(!E)throw new Error("Function called outside component initialization");return E}function ie(t){et().$$.on_mount.push(t)}function re(t){et().$$.after_update.push(t)}const w=[],G=[],C=[],I=[],nt=Promise.resolve();let q=!1;function it(){q||(q=!0,nt.then(rt))}function se(){return it(),nt}function M(t){C.push(t)}const P=new Set;let S=0;function rt(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(w.length);for(;I.length;)I.pop()();q=!1,P.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let b;function kt(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function J(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function oe(){p={r:0,c:[],p}}function ce(){p.r||N(p.c),p=p.p}function Dt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function ue(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,u,c=0;function l(){s&&F(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ot,tick:y=$,css:m}=r||Mt;m&&(s=St(t,0,1,d,_,h,m,c++)),y(0,1);const g=at()+_,st=g+d;u&&u.abort(),o=!0,M(()=>J(t,!0,"start")),u=ft(O=>{if(o){if(O>=st)return y(1,0),J(t,!0,"end"),l(),o=!1;if(O>=g){const B=h((O-g)/d);y(B,1-B)}}return o})}let a=!1;return{start(){a||(a=!0,F(t),L(r)?(r=r(i),kt().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(K).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),o.forEach(M)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,o,s,u=[-1]){const c=E;v(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Pt(t,a)),_}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){_t();const a=bt(e.target);l.fragment&&l.fragment.l(a),a.forEach(X)}else l.fragment&&l.fragment.c();e.intro&&Dt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),dt(),rt()}v(c)}class de{$destroy(){Ot(this,1),this.$destroy=$}$on(e,n){if(!L(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,$ as B,te as C,xt as D,Qt as E,$t as F,Vt as G,Lt as H,Rt as I,zt as J,Ht as K,Ft as L,Bt as M,ee as N,M as O,ue as P,It as Q,de as S,Jt as a,Gt as b,Xt as c,ce as d,Kt as e,Dt as f,oe as g,X as h,_e as i,re as j,Y as k,Ut as l,bt as m,Wt as n,ie as o,Zt as p,z as q,vt as r,qt as s,le as t,Yt as u,ne as v,ae as w,fe as x,Tt as y,Ot as z};