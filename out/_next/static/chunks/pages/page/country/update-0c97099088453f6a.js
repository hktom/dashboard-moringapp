(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9383],{26442:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/country/update",function(){return r(15976)}])},6460:function(e,n,r){"use strict";var t=r(85893),i=r(12963),o=r(41664);n.Z=function(e){var n=e.page,r=e.link;return(0,t.jsxs)(i.Z,{"aria-label":"breadcrumb",children:[(0,t.jsx)(o.default,{href:"/page/",children:(0,t.jsx)("a",{style:{textDecoration:"none"},children:"Dashboard"})}),(0,t.jsx)(o.default,{href:"/page/"+r,children:(0,t.jsx)("a",{style:{textDecoration:"none"},children:n})})]})}},94430:function(e,n,r){"use strict";r.r(n);var t=r(85893),i=r(67294),o=r(86886),s=r(15861),a=r(99226),l=r(46901),c=r(55113),u=r(61903),d=r(83321),f=r(98456),x=r(38571),h=r(87536),m=r(25617),j=r(11786),p=r(11163),v=r(6460),y=r(48280);function b(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Z(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){b(e,n,r[n])}))}return e}n.default=function(e){var n=e.pid,r=(0,y.C)((function(e){return e.country})),b=((0,p.useRouter)(),i.useRef(0)),P=(0,m.I0)(),_=(0,h.cI)(),g=_.register,w=_.handleSubmit,E=(_.watch,_.reset,_.setValue);return _.formState.errors,i.useEffect((function(){if(n&&0===b.current){var e,t=null===(e=r.list)||void 0===e?void 0:e.find((function(e){return e.id===n}));E("name",null===t||void 0===t?void 0:t.name),E("name_fr",null===t||void 0===t?void 0:t.name_fr)}}),[n,E,r.list]),(0,t.jsx)(x.Z,{children:(0,t.jsx)(o.ZP,{container:!0,children:(0,t.jsxs)(o.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto",my:4},children:[(0,t.jsxs)(s.Z,{variant:"h3",component:"h1",sx:{fontWeight:"bold"},children:[n?"Edit":"Create"," Country"]}),(0,t.jsx)(v.Z,{page:"Countries",link:"country"}),(0,t.jsxs)(a.Z,{component:"form",sx:{mt:5},onSubmit:w((function(e){P(n?{type:j.wG.UPDATE_ITEM,payload:Z({},e,{id:n})}:{type:j.wG.ADD_ITEM,payload:e}),b.current=1})),children:[r.error&&(0,t.jsx)(l.Z,{severity:"error",sx:{my:1},children:r.error}),r.success&&(0,t.jsx)(l.Z,{severity:"success",sx:{my:1},children:"Operation Successful"}),(0,t.jsx)(c.Z,{elevation:0,sx:{p:4},children:(0,t.jsxs)(o.ZP,{container:!0,children:[(0,t.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,t.jsx)(s.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Basic details"})}),(0,t.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,t.jsx)(u.Z,Z({id:"name",InputLabelProps:{shrink:!0},label:"Name EN",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},g("name",{required:!0}))),(0,t.jsx)(u.Z,Z({id:"name",InputLabelProps:{shrink:!0},label:"Name FR",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},g("name_fr",{required:!1})))]})]})}),(0,t.jsxs)(o.ZP,{container:!0,sx:{mt:4},children:[(0,t.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,t.jsx)(d.Z,{variant:"text",color:"error",children:"Delete"})}),(0,t.jsxs)(o.ZP,{item:!0,xs:12,md:4,sx:{justifyContent:"end",display:"flex"},children:[(0,t.jsx)(d.Z,{variant:"outlined",color:"info",sx:{mx:2},children:"Cancel"}),(0,t.jsxs)(d.Z,{variant:"contained",color:"info",disableElevation:!0,type:"submit",children:["Create"," ",r.isLoading&&(0,t.jsx)(f.Z,{color:"secondary",size:20,sx:{ml:2}})]})]})]})]})]})})})}},15976:function(e,n,r){"use strict";r.r(n);var t=r(85893),i=r(11163),o=r(94430);n.default=function(){var e=(0,i.useRouter)().query.pid;return(0,t.jsx)(o.default,{pid:null===e||void 0===e?void 0:e.toString()})}}},function(e){e.O(0,[759,2749,1903,3643,7536,5203,8571,9774,2888,179],(function(){return n=26442,e(e.s=n);var n}));var n=e.O();_N_E=n}]);