import"./index-8bf57f5b.js";function p(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function b(t,{delay:f=0,duration:c=400,easing:e=p,amount:r=5,opacity:n=0}={}){const s=getComputedStyle(t),o=+s.opacity,i=s.filter==="none"?"":s.filter,u=o*(1-n);return{delay:f,duration:c,easing:e,css:(y,l)=>`opacity: ${o-u*l}; filter: ${i} blur(${l*r}px);`}}function g(t,{delay:f=0,speed:c,duration:e,easing:r=p}={}){let n=t.getTotalLength();const s=getComputedStyle(t);return s.strokeLinecap!=="butt"&&(n+=parseInt(s.strokeWidth)),e===void 0?c===void 0?e=800:e=n/c:typeof e=="function"&&(e=e(n)),{delay:f,duration:e,easing:r,css:(o,i)=>`stroke-dasharray: ${o*n} ${i*n}`}}export{b,g as d};