"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7279],{656:function(e,n,t){var i=t(5893),r=t(7357),o=t(3965),l=t(3321),s=t(5861),a=t(1458),c=t(7036),d=t(7294),u=t(5617),x=t(7705),h=t(4995);n.Z=function(e){var n=(0,u.I0)(),t=(0,u.v9)((function(e){return e.image})),m=e.setImageField,f=e.image,p=d.useRef();return d.useEffect((function(){t.image&&!f&&m(t.image)}),[t,m,f]),(0,i.jsxs)(i.Fragment,{children:[f?(0,i.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"end",width:"100%"},children:[(0,i.jsx)(o.Z,{component:"img",alt:f,sx:{maxWidth:"300px",maxHeight:"300px"},src:"".concat(x.LS,"storage/").concat(f)}),(0,i.jsxs)(l.Z,{variant:"text",color:"error",sx:{mt:2},onClick:function(){m(void 0),n((0,h.ig)(void 0))},children:[" ","Remove"," "]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{onClick:function(){p.current.click()},sx:{display:"flex",cursor:"pointer",justifyContent:"center",alignItems:"center",height:"200px",border:"2px dashed ".concat(c.Z[200]),backgroundColor:c.Z[100]},children:(0,i.jsx)(s.Z,{variant:"body1",component:"p",children:"Upload image"})}),t.loading&&(0,i.jsx)(a.Z,{color:"info"})]}),(0,i.jsx)("input",{ref:p,style:{display:"none"},type:"file",accept:"image/jpeg, image/png",onChange:function(){p.current.files.length&&(console.log(p.current.files[0]),n((0,h.Ix)(p.current.files[0])))}})]})}},7279:function(e,n,t){t.r(n);var i=t(5893),r=t(7294),o=t(6886),l=t(5861),s=t(2963),a=t(122),c=t(7357),d=t(6901),u=t(5113),x=t(1903),h=t(4054),m=t(480),f=t(2852),p=t(3841),j=t(7709),v=t(7109),Z=t(8360),b=t(8972),g=t(3321),y=t(8456),k=t(4524),P=t(7536),_=t(3082),C=t(656),S=t(5617),I=t(1163);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){W(e,n,t[n])}))}return e}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,o=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(i=t.next()).done)&&(o.push(i.value),!n||o.length!==n);l=!0);}catch(a){s=!0,r=a}finally{try{l||null==t.return||t.return()}finally{if(s)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(e){var n,t,w=A(r.useState(""),2),W=w[0],E=w[1],M=e.pid,F=(0,I.useRouter)(),D=A(r.useState(!1),2),q=D[0],L=D[1],N=A(r.useState(!1),2),R=N[0],T=N[1],$=A(r.useState(!1),2),U=$[0],z=$[1],B=A(r.useState(!1),2),H=B[0],J=B[1],V=A(r.useState(void 0),2),X=V[0],G=V[1],K=(0,S.I0)(),Q=(0,S.v9)((function(e){return e.condition})),Y=(0,S.v9)((function(e){return e.home})),ee=(0,S.v9)((function(e){return e.task})),ne=(0,S.v9)((function(e){return e.category})),te=(0,P.cI)(),ie=te.register,re=te.handleSubmit,oe=(te.watch,te.setValue);return te.formState.errors,r.useEffect((function(){var e,n,t,i,r,o;(M&&!ee.task&&K((0,_._X)(M)),M&&ee.task)&&(oe("name",ee.task.name),oe("min_price",ee.task.min_price),oe("price_by_hour",ee.task.price_by_hour),oe("description",ee.task.description),T(null!==(t=1==ee.task.can_be_urgent)&&void 0!==t&&t),L(null!==(i=1==ee.task.can_be_booked)&&void 0!==i&&i),z(null!==(r=1==ee.task.accept_offer)&&void 0!==r&&r),J(null!==(o=1==(null===(e=ee.task.condition)||void 0===e?void 0:e.value))&&void 0!==o&&o),G(ee.task.image),E(null===(n=ee.task.category)||void 0===n?void 0:n.id));ee.success&&F.reload()}),[K,M,F,oe,ee.success,ee.task]),(0,i.jsx)(k.ZP,{children:(0,i.jsx)(o.ZP,{container:!0,children:(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto",my:4},children:[(0,i.jsxs)(l.Z,{variant:"h3",component:"h1",sx:{fontWeight:"bold"},children:[M?"Edit":"Create"," a task"]}),(0,i.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(a.Z,{underline:"hover",color:"inherit",href:"/",children:"Dashboard"}),(0,i.jsx)(a.Z,{underline:"hover",color:"inherit",href:"/material-ui/getting-started/installation/",children:"Task"})]}),(0,i.jsxs)(c.Z,{component:"form",sx:{mt:5},onSubmit:re((function(e){var n,t;if(X&&W){var i,r=null===Q||void 0===Q||null===(n=Q.list)||void 0===n?void 0:n.filter((function(e){return e.value==+H}));if(M)K((0,_.xJ)(O({},e,{image:X,can_be_booked:+q,can_be_urgent:+R,accept_offer:+U,active:{id:H},category:{id:W},user:{id:null===(i=Y.user)||void 0===i?void 0:i.id},condition:r&&r[0],id:M})));else K((0,_.gI)(O({},e,{image:X,can_be_booked:+q,can_be_urgent:+R,accept_offer:+U,active:{id:H},category:{id:W},user:{id:null===(t=Y.user)||void 0===t?void 0:t.id},condition:r&&r[0]})))}else K((0,_.MM)("Please select image and category"))})),children:[ee.error&&(0,i.jsx)(d.Z,{severity:"error",sx:{my:1},children:ee.error}),ee.success&&(0,i.jsx)(d.Z,{severity:"success",sx:{my:1},children:"Operation Successful"}),(0,i.jsx)(u.Z,{elevation:0,sx:{p:4},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Basic details"})}),(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,i.jsx)(x.Z,O({id:"name",label:"Name",variant:"outlined",fullWidth:!0,color:"info",InputLabelProps:{shrink:!0},sx:{my:1}},ie("name",{required:!0}))),(0,i.jsx)(x.Z,O({id:"outlined-multiline-static",label:"Description",multiline:!0,fullWidth:!0,sx:{my:1},color:"info",InputLabelProps:{shrink:!0},rows:4},ie("description",{required:!0})))]})]})}),(0,i.jsx)(u.Z,{elevation:0,sx:{mt:2,p:4},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:4,sx:{pr:5},children:[(0,i.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Images"}),(0,i.jsx)(l.Z,{variant:"body2",component:"p",children:"The image will appear on website and mobile app."})]}),(0,i.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,i.jsx)(C.Z,{setImageField:G,image:X})})]})}),(0,i.jsx)(u.Z,{elevation:0,sx:{mt:4,p:4},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Options"})}),(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,i.jsx)(h.Z,{fullWidth:!0,sx:{my:1},children:(0,i.jsx)(m.Z,{control:(0,i.jsx)(f.Z,{color:"info",value:R,checked:R,onChange:function(){return T(!R)}}),label:"Can be urgent"})}),(0,i.jsx)(h.Z,{fullWidth:!0,sx:{my:1},children:(0,i.jsx)(m.Z,{control:(0,i.jsx)(f.Z,{color:"info",checked:q,value:q,onChange:function(){return L(!q)}}),label:"Can be booked"})}),(0,i.jsx)(h.Z,{fullWidth:!0,sx:{my:1},children:(0,i.jsx)(m.Z,{control:(0,i.jsx)(f.Z,{color:"info",checked:U,value:U,onChange:function(){return z(!U)}}),label:"Can accept offer"})}),(0,i.jsx)(h.Z,{fullWidth:!0,sx:{my:1},children:(0,i.jsx)(m.Z,{control:(0,i.jsx)(f.Z,{color:"info",checked:H,value:H,onChange:function(){return J(!H)}}),label:"Active"})}),(0,i.jsxs)(h.Z,{fullWidth:!0,sx:{my:1},children:[(0,i.jsx)(p.Z,{htmlFor:"outlined-adornment-amount",children:"Price by hour"}),(0,i.jsx)(j.Z,O({id:"outlined-adornment-amount",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},startAdornment:(0,i.jsx)(v.Z,{position:"start",children:"$"}),label:"Price"},ie("price_by_hour",{required:!0})))]}),(0,i.jsxs)(h.Z,{fullWidth:!0,sx:{my:1},children:[(0,i.jsx)(p.Z,{htmlFor:"outlined-adornment-amount",children:"Min Price"}),(0,i.jsx)(j.Z,O({id:"outlined-adornment-amount",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},startAdornment:(0,i.jsx)(v.Z,{position:"start",children:"$"}),label:"Min Price"},ie("min_price",{required:!1})))]})]})]})}),(0,i.jsx)(u.Z,{elevation:0,sx:{mt:4,p:4},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Category *"})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(h.Z,{fullWidth:!0,children:[(0,i.jsx)(p.Z,{id:"demo-simple-select-label",children:"Category"}),(0,i.jsx)(Z.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:W,label:"Category",onChange:function(e){E(e.target.value)},children:(null!==(t=null===ne||void 0===ne||null===(n=ne.list)||void 0===n?void 0:n.filter((function(e){var n;return 1==(null===(n=e.condition)||void 0===n?void 0:n.value)})))&&void 0!==t?t:[]).map((function(e){return(0,i.jsx)(b.Z,{value:e.id,children:e.name},e.id)}))})]})})]})}),(0,i.jsxs)(o.ZP,{container:!0,sx:{mt:4},children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,i.jsx)(g.Z,{variant:"text",color:"error",children:"Delete"})}),(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:4,sx:{justifyContent:"end",display:"flex"},children:[(0,i.jsx)(g.Z,{variant:"outlined",color:"info",sx:{mx:2},children:"Cancel"}),(0,i.jsxs)(g.Z,{variant:"contained",color:"info",disableElevation:!0,type:"submit",children:["Create"," ",ee.isLoading&&(0,i.jsx)(y.Z,{color:"secondary",size:20,sx:{ml:2}})]})]})]})]})]})})})}}}]);