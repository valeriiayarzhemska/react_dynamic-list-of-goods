(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r=n(9),c=n.n(r),o=n(10),a=n(3),i=n(6),s=n.n(i),u=n(0),l=(n(21),n(15)),d=(n(24),n(1)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.color,r=t.name;return Object(d.jsx)("li",{"data-cy":"good",style:{color:n},children:r},e)}))})},j=n(14),f=n.n(j),p=function(t){var e=t.dataCy,n=t.onClick,r=t.clickedButton,c=t.children,o=r===e;return Object(d.jsx)("button",{type:"button","data-cy":e,onClick:n,className:f()("button is-light",{"is-warning":o}),children:c})};function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){return h().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},O=function(){return h().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},x=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(u.useState)(""),i=Object(a.a)(c,2),j=i[0],f=i[1],x=Object(u.useState)(!1),m=Object(a.a)(x,2),v=m[0],y=m[1],k=Object(u.useState)(!1),w=Object(a.a)(k,2),C=w[0],_=w[1],S=Object(u.useCallback)(function(){var t=Object(o.a)(s.a.mark((function t(e,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j!==n){t.next=2;break}return t.abrupt("return");case 2:return y(!0),t.prev=3,t.t0=r,t.next=7,e();case 7:t.t1=t.sent,(0,t.t0)(t.t1),f(n),y(!1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(3),_(!0);case 16:return t.prev=16,y(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})));return function(e,n){return t.apply(this,arguments)}}(),[j]);return Object(d.jsxs)("div",{className:"App page page__container",children:[Object(d.jsx)("h1",{className:"page page__title",children:"Dynamic list of Goods"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)(p,{dataCy:"all-button",onClick:function(){return S(h,"all-button")},clickedButton:j,children:"Load all goods"}),Object(d.jsx)(p,{dataCy:"first-five-button",onClick:function(){return S(g,"first-five-button")},clickedButton:j,children:"Load 5 first goods"}),Object(d.jsx)(p,{dataCy:"red-button",onClick:function(){return S(O,"red-button")},clickedButton:j,children:"Load red goods"})]}),v?Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}):Object(d.jsxs)(d.Fragment,{children:[C&&Object(d.jsx)("p",{children:"Sorry, something went wrong"}),Object(d.jsx)(b,{goods:n})]})]})};c.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.23e40dd3.chunk.js.map