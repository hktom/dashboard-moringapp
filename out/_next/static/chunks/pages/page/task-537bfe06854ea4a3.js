(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4759],{6540:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(4938)),o=t(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=a},2761:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(4938)),o=t(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=a},3965:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(3366),i=t(7462),o=t(7294),a=t(6010),s=t(7192),d=t(7623),l=t(1496),c=t(8979);function u(e){return(0,c.Z)("MuiCardMedia",e)}(0,t(6087).Z)("MuiCardMedia",["root","media","img"]);var m=t(5893);const h=["children","className","component","image","src","style"],f=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{isMediaComponent:r,isImageComponent:i}=t;return[n.root,r&&n.media,i&&n.img]}})((({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),p=["video","audio","picture","iframe","img"],v=["picture","img"];var x=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:l,component:c="div",image:x,src:g,style:y}=t,Z=(0,r.Z)(t,h),b=-1!==p.indexOf(c),j=!b&&x?(0,i.Z)({backgroundImage:`url("${x}")`},y):y,w=(0,i.Z)({},t,{component:c,isMediaComponent:b,isImageComponent:-1!==v.indexOf(c)}),C=(e=>{const{classes:n,isMediaComponent:t,isImageComponent:r}=e,i={root:["root",t&&"media",r&&"img"]};return(0,s.Z)(i,u,n)})(w);return(0,m.jsx)(f,(0,i.Z)({className:(0,a.Z)(C.root,l),as:c,role:!b&&x?"img":void 0,ref:n,style:j,ownerState:w,src:b?x||g:void 0},Z,{children:o}))}))},1131:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/task",function(){return t(1200)}])},1200:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7357),o=t(3965),a=t(7918),s=t(6886),d=t(5861),l=t(3321),c=t(5113),u=t(4054),m=t(3841),h=t(7709),f=t(830),p=t(7294),v=t(4524),x=t(6540),g=t(2761),y=t(5617),Z=t(1163),b=t(7705);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(d){s=!0,i=d}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=[{field:"image",width:200,headerName:"Image",renderCell:function(e){return(0,r.jsx)(i.Z,{sx:{display:"flex",justifyContent:"end",py:5},children:(0,r.jsx)(o.Z,{component:"img",sx:{height:"100px",width:"100px",py:1},image:b.LS+"storage/"+e.value,alt:"green iguana"})})}},{field:"name",headerName:"Name",width:200},{field:"price_by_hour",headerName:"Price By Hour ($)",width:200},{field:"min_price",headerName:"Min Price ($)",width:200},{field:"can_be_booked",headerName:"Can be booked",width:200},{field:"can_be_urgent",headerName:"Can be Urgent",width:200},{field:"accept_offer",headerName:"Accept offer",width:200},{field:"category",headerName:"Category",width:200,sortable:!1,valueGetter:function(e){var n;return null===(n=e.value)||void 0===n?void 0:n.name}},{field:"condition",width:200,headerName:"Status",renderCell:function(e){var n;return(0,r.jsx)(i.Z,{sx:{display:"flex",justifyContent:"end"},children:(0,r.jsx)(a.Z,{size:"small",label:null===(n=e.value)||void 0===n?void 0:n.name,color:"success",sx:{color:"secondary.main",textTransform:"uppercase",fontSize:"0.7rem",fontWeight:"bold"}})})}}];n.default=function(){var e,n=(0,Z.useRouter)(),t=w(p.useState(""),2),o=(t[0],t[1],(0,y.v9)((function(e){return e.task}))),a=(0,y.v9)((function(e){return e.home}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v.ZP,{children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto",my:4},children:(0,r.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(d.Z,{variant:"h3",component:"h1",sx:{fontWeight:"bold"},children:"Task"}),(0,r.jsxs)(l.Z,{variant:"contained",size:"small",color:"info",disableElevation:!0,onClick:function(){return n.push("/page/task/create")},children:[(0,r.jsx)(x.Z,{sx:{fontSize:"1rem"}})," Add"]})]})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto"},children:(0,r.jsxs)(c.Z,{elevation:0,sx:{py:3,px:3},children:[(0,r.jsxs)(u.Z,{fullWidth:!0,sx:{m:1},children:[(0,r.jsx)(m.Z,{htmlFor:"outlined-adornment-amount",children:"Search"}),(0,r.jsx)(h.Z,{id:"outlined-adornment-amount",startAdornment:(0,r.jsx)(g.Z,{}),label:"Amount"})]}),(0,r.jsx)(i.Z,{style:{height:650,width:"100%"},sx:{mt:4},children:(0,r.jsx)("div",{style:{display:"flex",height:"100%"},children:(0,r.jsx)("div",{style:{flexGrow:1},children:(0,r.jsx)(f._,{sx:{border:"none"},rowHeight:100,rows:(1==(null===a||void 0===a||null===(e=a.role)||void 0===e?void 0:e.value)?o.list:null===a||void 0===a?void 0:a.tasks)||[],columns:C,pageSize:5,rowsPerPageOptions:[5],onRowClick:function(e,t){n.push("/page/task/update?pid="+e.id),console.log("params",e)}})})})})]})})]})})})}}},function(e){e.O(0,[5404,79,8227,778,830,4524,9774,2888,179],(function(){return n=1131,e(e.s=n);var n}));var n=e.O();_N_E=n}]);