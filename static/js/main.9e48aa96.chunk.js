(this.webpackJsonpcardgame=this.webpackJsonpcardgame||[]).push([[0],[,,,,,function(e,t){},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(6),r=n.n(i),u=(n(13),n(7)),o=n(1);n(14);function l(e){var t=e.disabled,n=e.solved,a=e.handleClick,i=e.id,r=e.type,u=e.flipped,o=e.height,l=e.width;return c.a.createElement("div",{className:"flip-container ".concat(u?"flipped":""),style:{width:l,height:o},onClick:function(){return t?null:a(i)}},c.a.createElement("div",{className:"flipper"},c.a.createElement("img",{alt:"",style:{height:o,width:l},className:u?"front":"back",src:u||n?"/img/".concat(r,".png"):"/img/back.png"})))}n(15);function s(e){var t=e.dimension,n=e.cards,a=e.flipped,i=e.solved,r=e.handleClick,u=e.disabled;return c.a.createElement("div",{className:"board"},n.map((function(e){return c.a.createElement(l,{key:e.id,id:e.id,type:e.type,width:t/4.5,height:t/4.5,flipped:a.includes(e.id),solved:i.includes(e.id),handleClick:r,disabled:u||i.includes(e.id)})})))}n(5);function d(){var e=0;return function(e){for(var t=e.slice(0),n=0;n<e.length-1;n++){var a=Math.floor(Math.random()*(n+1)),c=t[n];t[n]=t[a],t[a]=c}return t}(["armadillo","humpback","otter","panda","parrot","prayingmantis","redfox","slothsleeping"].reduce((function(t,n){return t.push({id:e++,type:n}),t.push({id:e++,type:n}),t}),[]))}function f(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),l=Object(o.a)(r,2),f=l[0],m=l[1],p=Object(a.useState)(400),b=Object(o.a)(p,2),h=b[0],v=b[1],j=Object(a.useState)(0),E=Object(o.a)(j,2),O=E[0],g=E[1],y=Object(a.useState)([]),k=Object(o.a)(y,2),w=k[0],S=k[1],C=Object(a.useState)(!1),N=Object(o.a)(C,2),G=N[0],x=N[1],M=Object(a.useState)(0),z=Object(o.a)(M,2),I=z[0],J=z[1],L=Object(a.useState)(0),T=Object(o.a)(L,2),W=T[0],B=T[1],D=Object(a.useState)([]),H=Object(o.a)(D,2),R=(H[0],H[1]);Object(a.useEffect)((function(){U(),i(d())}),[]),Object(a.useEffect)((function(){Y()})),Object(a.useEffect)((function(){F()}),[O]),Object(a.useEffect)((function(){var e=window.addEventListener("resize",U);return function(){return window.removeEventListener("resize",e)}}));var Y=function(){n.map((function(e){var t="/img/".concat(e.type,".png");(new Image).src=t}))},q=function(){m([]),x(!1)},A=function(e,t){var n=e+1;g(e+1),t(n)},F=function(e){e>7&&(B(W+1),setTimeout(K,3e3))},K=function(){S([]),i(d()),m([]),x(!1),J(0)},P=function(e){return f.includes(e)},Q=function(e){var t=n.find((function(t){return t.id===e}));return n.find((function(e){return f[0]===e.id})).type===t.type},U=function(){v(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight))};return c.a.createElement("div",null,c.a.createElement("h1",null,"Memory Game"),c.a.createElement("h2",null,"Click the cards to  play"),c.a.createElement("h3",null," You took ",I," turns"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},c.a.createElement("button",{className:"SaveGame",onClick:function(){return R(m([]),F(),S([]),x(!1))}},"Save Game"),c.a.createElement("button",{className:"restart",onClick:function(){return K()}},"Restart Game")),c.a.createElement("div",{className:"points"},"Games Won: ",W," "),c.a.createElement(s,{dimension:h,cards:n,flipped:f,solved:w,handleClick:function(e){x(!0),0===f.length?(m([e]),x(!1)):P(e)?x(!1):(m([f[0],e]),Q(e)?(S([].concat(Object(u.a)(w),[f[0],e])),J((function(e){return e+1})),A(O,F),q()):(J((function(e){return e+1})),setTimeout(q,2e3)))},disabled:G}))}r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.9e48aa96.chunk.js.map