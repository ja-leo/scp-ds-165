(()=>{"use strict";var e,v={},m={};function a(e){var f=m[e];if(void 0!==f)return f.exports;var r=m[e]={exports:{}};return v[e].call(r.exports,r,r.exports,a),r.exports}a.m=v,e=[],a.O=(f,r,d,b)=>{if(!r){var t=1/0;for(c=0;c<e.length;c++){for(var[r,d,b]=e[c],l=!0,n=0;n<r.length;n++)(!1&b||t>=b)&&Object.keys(a.O).every(p=>a.O[p](r[n]))?r.splice(n--,1):(l=!1,b<t&&(t=b));if(l){e.splice(c--,1);var o=d();void 0!==o&&(f=o)}}return f}b=b||0;for(var c=e.length;c>0&&e[c-1][2]>b;c--)e[c]=e[c-1];e[c]=[r,d,b]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},a.d=(e,f)=>{for(var r in f)a.o(f,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:f[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,r)=>(a.f[r](e,f),f),[])),a.u=e=>(8592===e?"common":e)+"."+{514:"62ac6a0d9d17660b",883:"dc717f8847ba9709",1484:"0e7508a49f27766b",1617:"83d3a2a71ee4f89c",1652:"448f42078acbd390",1780:"1310ec7d50f01274",1884:"7531a2326a3f3856",1901:"16d7ca4860941964",1956:"4c038f3223595c0c",1989:"1138f5a6472b06b0",2033:"e9fe36b742b18b03",2680:"5bf3e80bc59f1f89",2795:"f7a30b68b7061760",2979:"f0bebd23a6f01be3",3004:"d76657999af681c3",3695:"3ba7f12e265548b2",3874:"8a7e06ae1c5814a0",4124:"b89c3c5240ec37d1",4246:"3f721b301f3f9da3",4369:"507ffb37d921bced",4393:"52ea97a741d68ea9",4412:"cd55a718044d63bb",4445:"0a8083c292c0c99a",4537:"3870013c768f3615",5033:"b08e5f1b730d3dcf",5196:"3a36bb1046ddd901",5212:"e9725e23f897ffba",5249:"69bd770a818a24a2",5726:"e46379f286f760e0",5768:"e6c35e43ef10903f",5811:"8b3112c5d4999868",5968:"b7f6031ada2ede3a",6123:"0a616731fa04180b",6255:"671436b86317ea53",6307:"d33453e12a77ce97",6729:"a85c75cc176d7d7e",6748:"336af36460d9e708",7540:"f7b251ef46af0694",7547:"cbace11efc2f41d9",7677:"448d55b256caf3b7",7859:"9fcba7dd50ec965c",7866:"2d529bb1a096a556",8066:"60e2ac988b9f803c",8095:"b7ad90d5ecb4af59",8204:"15e1a538e1dc857b",8438:"66aa95254d4195f9",8585:"ea831776772695ee",8592:"18ba28d86eaa8d52",8616:"78c239ccf53a9ec4",8850:"4163fc3d82de3ec7",8977:"574930edb6be499a",9015:"a2b4a30a0cb7e91e",9326:"fb5c6d50b8d65714",9328:"e60c9380049902a1",9574:"ba66e68cfe6af66f",9814:"cec14a1bcc8a3b94",9921:"bd53d3cb8e9228c1",9995:"047ed4243993fe74"}[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="scales-doc-site:";a.l=(r,d,b,c)=>{if(e[r])e[r].push(d);else{var t,l;if(void 0!==b)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==r||i.getAttribute("data-webpack")==f+b){t=i;break}}t||(l=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",f+b),t.src=a.tu(r)),e[r]=[d];var u=(_,p)=>{t.onerror=t.onload=null,clearTimeout(s);var g=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),g&&g.forEach(h=>h(p)),_)return _(p)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),l&&document.head.appendChild(t)}}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(d,b)=>{var c=a.o(e,d)?e[d]:void 0;if(0!==c)if(c)b.push(c[2]);else if(3666!=d){var t=new Promise((i,u)=>c=e[d]=[i,u]);b.push(c[2]=t);var l=a.p+a.u(d),n=new Error;a.l(l,i=>{if(a.o(e,d)&&(0!==(c=e[d])&&(e[d]=void 0),c)){var u=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;n.message="Loading chunk "+d+" failed.\n("+u+": "+s+")",n.name="ChunkLoadError",n.type=u,n.request=s,c[1](n)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var f=(d,b)=>{var n,o,[c,t,l]=b,i=0;if(c.some(s=>0!==e[s])){for(n in t)a.o(t,n)&&(a.m[n]=t[n]);if(l)var u=l(a)}for(d&&d(b);i<c.length;i++)a.o(e,o=c[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[];r.forEach(f.bind(null,0)),r.push=f.bind(null,r.push.bind(r))})()})();