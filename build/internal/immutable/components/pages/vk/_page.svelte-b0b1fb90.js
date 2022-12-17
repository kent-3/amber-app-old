import{S as j,i as A,s as B,k,l as v,m as y,h as _,n as f,b as E,O as I,B as b,Q as K,R as H,a as S,c as w,D as p,T as L,P as V,e as z,q as T,r as q,H as R,p as N,u as x,E as G}from"../../../chunks/index-8bf57f5b.js";import{b as C}from"../../../chunks/paths-ab5e31c5.js";import{g as D,a as U}from"../../../chunks/keplr-646d5aeb.js";import{t as M}from"../../../chunks/stores-d40a8b2b.js";import{b as Q}from"../../../chunks/index-8ef77974.js";const W=[{address:"secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",codeHash:"af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e",name:"Secret SCRT",symbol:"sSCRT",logo:"/scrt.svg",type:"SECRET"},{address:"secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",codeHash:"5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",name:"Amber",symbol:"AMBER",logo:"/amber.svg",type:"SECRET"},{address:"secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",codeHash:"fa824c4504f21fc59250da0cdf549dd392fd862baf2689d246a07b9e941f04a9",name:"Shade",symbol:"SHD",logo:"/shade.svg",type:"SECRET"},{address:"secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",codeHash:"",name:"SCRT Staking Derivatives",symbol:"stkd-SCRT",logo:"/stkd-scrt.svg",type:"SECRET"},{address:"secret14mzwd0ps5q277l20ly2q3aetqe3ev4m4260gf4",codeHash:"ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",name:"Cosmos Hub",symbol:"sATOM",logo:"/atom.jpg",type:"SECRET"},{address:"secret1zwwealwm0pcl9cul4nt6f38dsy6vzplw8lp3qg",codeHash:"ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",name:"Osmosis",symbol:"sOSMO",logo:"/osmo.jpeg",type:"SECRET"}];function O(r,e,o){const n=r.slice();return n[3]=e[o],n}function F(r){return{c:b,l:b,m:b,p:b,d:b}}function J(r){let e;function o(s,a){return s[6]==null?Y:X}let n=o(r),t=n(r);return{c(){t.c(),e=z()},l(s){t.l(s),e=z()},m(s,a){t.m(s,a),E(s,e,a)},p(s,a){n===(n=o(s))&&t?t.p(s,a):(t.d(1),t=n(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){t.d(s),s&&_(e)}}}function X(r){let e,o,n,t,s=r[3].symbol+"",a,l,i,c;return{c(){e=k("p"),o=k("img"),t=S(),a=T(s),l=S(),i=k("button"),c=T("key set"),this.h()},l(u){e=v(u,"P",{class:!0});var d=y(e);o=v(d,"IMG",{src:!0,alt:!0,class:!0}),t=w(d),a=q(d,s),l=w(d),i=v(d,"BUTTON",{style:!0,class:!0});var g=y(i);c=q(g,"key set"),g.forEach(_),d.forEach(_),this.h()},h(){R(o.src,n=""+(C+r[3].logo))||f(o,"src",n),f(o,"alt","logo"),f(o,"class","svelte-ox28eq"),i.disabled=!0,N(i,"cursor","default"),f(i,"class","svelte-ox28eq"),f(e,"class","svelte-ox28eq")},m(u,d){E(u,e,d),p(e,o),p(e,t),p(e,a),p(e,l),p(e,i),p(i,c)},p(u,d){d&1&&!R(o.src,n=""+(C+u[3].logo))&&f(o,"src",n),d&1&&s!==(s=u[3].symbol+"")&&x(a,s)},d(u){u&&_(e)}}}function Y(r){let e,o,n,t,s=r[3].symbol+"",a,l,i,c,u,d;function g(){return r[1](r[3])}return{c(){e=k("p"),o=k("img"),t=S(),a=T(s),l=S(),i=k("button"),c=T("set key"),this.h()},l(h){e=v(h,"P",{class:!0});var m=y(e);o=v(m,"IMG",{src:!0,alt:!0,class:!0}),t=w(m),a=q(m,s),l=w(m),i=v(m,"BUTTON",{class:!0});var $=y(i);c=q($,"set key"),$.forEach(_),m.forEach(_),this.h()},h(){R(o.src,n=""+(C+r[3].logo))||f(o,"src",n),f(o,"alt","logo"),f(o,"class","svelte-ox28eq"),f(i,"class","svelte-ox28eq"),f(e,"class","svelte-ox28eq")},m(h,m){E(h,e,m),p(e,o),p(e,t),p(e,a),p(e,l),p(e,i),p(i,c),u||(d=G(i,"click",g),u=!0)},p(h,m){r=h,m&1&&!R(o.src,n=""+(C+r[3].logo))&&f(o,"src",n),m&1&&s!==(s=r[3].symbol+"")&&x(a,s)},d(h){h&&_(e),u=!1,d()}}}function Z(r){return{c:b,l:b,m:b,p:b,d:b}}function P(r){let e,o,n,t={ctx:r,current:null,token:null,hasCatch:!1,pending:Z,then:J,catch:F,value:6};return H(o=D(r[3].address),t),{c(){e=k("div"),t.block.c(),n=S(),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=y(e);t.block.l(a),n=w(a),a.forEach(_),this.h()},h(){f(e,"class","card svelte-ox28eq")},m(s,a){E(s,e,a),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=n,p(e,n)},p(s,a){r=s,t.ctx=r,a&1&&o!==(o=D(r[3].address))&&H(o,t)||L(t,r,a)},d(s){s&&_(e),t.block.d(),t.token=null,t=null}}}function ee(r){let e,o,n=r[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=P(O(r,n,s));return{c(){e=k("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var a=y(e);for(let l=0;l<t.length;l+=1)t[l].l(a);a.forEach(_),this.h()},h(){f(e,"class","container svelte-ox28eq")},m(s,a){E(s,e,a);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(s,[a]){if(a&1){n=s[0];let l;for(l=0;l<n.length;l+=1){const i=O(s,n,l);t[l]?t[l].p(i,a):(t[l]=P(i),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i(s){o||I(()=>{o=V(e,Q,{}),o.start()})},o:b,d(s){s&&_(e),K(t,s)}}}function se(r,e,o){let n;return M.subscribe(a=>{a&&o(0,n=[...a].map(([l,i])=>i))}),(async()=>{var i;const a=new Map,l=new Map;for(const c of W){if(c.address in a&&console.error(`Duplicate tokens ${c} and ${a.get(c.address)}`),c.type=="LP"){const[u,d]=c.assets;if(!a.has(u)||!a.has(d)){console.log(`Skipping LP token ${c.address} because ${u} or ${d} is unknown.`);continue}l.set(u,new Set([...new Set(l.get(u)),c.address])),[...new Set(l.get(d)),c.address],c.address;continue}else if(c.type=="REWARDS"){const[u,d]=c.assets;if(!a.has(u)||!a.has(d)){console.log(`Skipping Rewards token ${c.address} because ${u} or ${d} is unknown.`);continue}if(l.set(d,new Set([...new Set(l.get(d)),c.address])),((i=a.get(u))==null?void 0:i.type)==="LP"){const[g,h]=a.get(u).assets;c.assets=[g,h,d],l.set(g,new Set([...new Set(l.get(g)),c.address])),[...new Set(l.get(h)),c.address]}else l.set(u,new Set([...new Set(l.get(u)),c.address]));a.set(c.address,c);continue}a.set(c.address,c)}M.set(a)})(),[n,a=>U(a.address)]}class ce extends j{constructor(e){super(),A(this,e,se,ee,B,{})}}export{ce as default};