(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6600],{6890:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/city/create",function(){return t(5643)}])},6460:function(e,n,t){"use strict";var r=t(5893),i=t(2963),o=t(1664);n.Z=function(e){var n=e.page,t=e.link;return(0,r.jsxs)(i.Z,{"aria-label":"breadcrumb",children:[(0,r.jsx)(o.default,{href:"/page/",children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:"Dashboard"})}),(0,r.jsx)(o.default,{href:"/page/"+t,children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:n})})]})}},5643:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),o=t(6886),l=t(5861),s=t(7357),c=t(6901),a=t(5113),u=t(1903),d=t(4054),f=t(3841),h=t(8360),m=t(8972),x=t(3321),y=t(8456),j=t(4524),p=t(7536),b=t(9627),v=t(5617),Z=t(1163),g=t(6460);function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(c){s=!0,i=c}finally{try{l||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(e){var n,t=e.pid,P=(0,v.v9)((function(e){return e.city})),w=S(i.useState(!1),2),O=(w[0],w[1],S(i.useState(void 0),2)),C=(O[0],O[1],S(i.useState(""),2)),E=C[0],k=C[1],I=(0,v.I0)(),N=(0,Z.useRouter)(),A=(0,p.cI)(),W=A.register,D=A.handleSubmit,L=(A.watch,A.reset,A.setValue),T=(A.formState.errors,(0,v.v9)((function(e){return e.country})));return i.useEffect((function(){var e;(P.success&&N.reload(),!P.city&&t&&I((0,b.hw)(t)),P.city&&t)&&(L("name",P.city.name),L("name_fr",P.city.name_fr),k(null===(e=P.city.country)||void 0===e?void 0:e.id))}),[I,t,N,L,P.city,P.success,T]),(0,r.jsx)(j.ZP,{children:(0,r.jsx)(o.ZP,{container:!0,children:(0,r.jsxs)(o.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto",my:4},children:[(0,r.jsxs)(l.Z,{variant:"h3",component:"h1",sx:{fontWeight:"bold"},children:[t?"Edit":"Create"," City"]}),(0,r.jsx)(g.Z,{page:"city",link:"city"}),(0,r.jsxs)(s.Z,{component:"form",sx:{mt:5},onSubmit:D((function(e){I(t?(0,b.$Q)(_({},e,{id:t,country:{id:E}})):(0,b.sZ)(_({},e,{country:{id:E}})))})),children:[P.error&&(0,r.jsx)(c.Z,{severity:"error",sx:{my:1},children:P.error}),P.success&&(0,r.jsx)(c.Z,{severity:"success",sx:{my:1},children:"Operation Successful"}),(0,r.jsx)(a.Z,{elevation:0,sx:{p:4},children:(0,r.jsxs)(o.ZP,{container:!0,children:[(0,r.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Basic details"})}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsx)(u.Z,_({id:"name",InputLabelProps:{shrink:!0},label:"Name EN",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},W("name",{required:!0}))),(0,r.jsx)(u.Z,_({id:"name",InputLabelProps:{shrink:!0},label:"Name FR",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},W("name_fr",{required:!1})))]})]})}),(0,r.jsx)(a.Z,{elevation:0,sx:{mt:4,p:4},children:(0,r.jsxs)(o.ZP,{container:!0,children:[(0,r.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Country"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(d.Z,{fullWidth:!0,children:[(0,r.jsx)(f.Z,{id:"demo-simple-select-label",children:"Country"}),(0,r.jsx)(h.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:E,label:"Country",onChange:function(e){k(e.target.value)},children:(null!==(n=T.list)&&void 0!==n?n:[]).map((function(e){return(0,r.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})})]})}),(0,r.jsxs)(o.ZP,{container:!0,sx:{mt:4},children:[(0,r.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(x.Z,{variant:"text",color:"error",children:"Delete"})}),(0,r.jsxs)(o.ZP,{item:!0,xs:12,md:4,sx:{justifyContent:"end",display:"flex"},children:[(0,r.jsx)(x.Z,{variant:"outlined",color:"info",sx:{mx:2},children:"Cancel"}),(0,r.jsxs)(x.Z,{variant:"contained",color:"info",disableElevation:!0,type:"submit",children:["Create"," ",P.isLoading&&(0,r.jsx)(y.Z,{color:"secondary",size:20,sx:{ml:2}})]})]})]})]})]})})})}}},function(e){e.O(0,[5404,79,8227,7536,5203,4524,9774,2888,179],(function(){return n=6890,e(e.s=n);var n}));var n=e.O();_N_E=n}]);