"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7092],{3965:function(e,n,i){i.d(n,{Z:function(){return f}});var r=i(3366),t=i(7462),o=i(7294),s=i(6010),l=i(7192),a=i(7623),d=i(1496),c=i(8979);function u(e){return(0,c.Z)("MuiCardMedia",e)}(0,i(6087).Z)("MuiCardMedia",["root","media","img"]);var m=i(5893);const v=["children","className","component","image","src","style"],p=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{isMediaComponent:r,isImageComponent:t}=i;return[n.root,r&&n.media,t&&n.img]}})((({ownerState:e})=>(0,t.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),h=["video","audio","picture","iframe","img"],x=["picture","img"];var f=o.forwardRef((function(e,n){const i=(0,a.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:d,component:c="div",image:f,src:Z,style:j}=i,b=(0,r.Z)(i,v),g=-1!==h.indexOf(c),y=!g&&f?(0,t.Z)({backgroundImage:`url("${f}")`},j):j,w=(0,t.Z)({},i,{component:c,isMediaComponent:g,isImageComponent:-1!==x.indexOf(c)}),P=(e=>{const{classes:n,isMediaComponent:i,isImageComponent:r}=e,t={root:["root",i&&"media",r&&"img"]};return(0,l.Z)(t,u,n)})(w);return(0,m.jsx)(p,(0,t.Z)({className:(0,s.Z)(P.root,d),as:c,role:!g&&f?"img":void 0,ref:n,style:y,ownerState:w,src:g?f||Z:void 0},b,{children:o}))}))},7109:function(e,n,i){i.d(n,{Z:function(){return g}});var r=i(3366),t=i(7462),o=i(7294),s=i(6010),l=i(7192),a=i(8216),d=i(5861),c=i(7167),u=i(4423),m=i(1496),v=i(8979);function p(e){return(0,v.Z)("MuiInputAdornment",e)}var h,x=(0,i(6087).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=i(7623),Z=i(5893);const j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,n[`position${(0,a.Z)(i.position)}`],!0===i.disablePointerEvents&&n.disablePointerEvents,n[i.variant]]}})((({theme:e,ownerState:n})=>(0,t.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},"filled"===n.variant&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})));var g=o.forwardRef((function(e,n){const i=(0,f.Z)({props:e,name:"MuiInputAdornment"}),{children:m,className:v,component:x="div",disablePointerEvents:g=!1,disableTypography:y=!1,position:w,variant:P}=i,C=(0,r.Z)(i,j),I=(0,u.Z)()||{};let S=P;P&&I.variant,I&&!S&&(S=I.variant);const _=(0,t.Z)({},i,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:g,position:w,variant:S}),k=(e=>{const{classes:n,disablePointerEvents:i,hiddenLabel:r,position:t,size:o,variant:s}=e,d={root:["root",i&&"disablePointerEvents",t&&`position${(0,a.Z)(t)}`,s,r&&"hiddenLabel",o&&`size${(0,a.Z)(o)}`]};return(0,l.Z)(d,p,n)})(_);return(0,Z.jsx)(c.Z.Provider,{value:null,children:(0,Z.jsx)(b,(0,t.Z)({as:x,ownerState:_,className:(0,s.Z)(k.root,v),ref:n},C,{children:"string"!==typeof m||y?(0,Z.jsxs)(o.Fragment,{children:["start"===w?h||(h=(0,Z.jsx)("span",{className:"notranslate",children:"\u200b"})):null,m]}):(0,Z.jsx)(d.Z,{color:"text.secondary",children:m})}))})}))},656:function(e,n,i){var r=i(5893),t=i(7357),o=i(3965),s=i(3321),l=i(5861),a=i(1458),d=i(7036),c=i(7294),u=i(5617),m=i(7705),v=i(4995);n.Z=function(e){var n=(0,u.I0)(),i=(0,u.v9)((function(e){return e.image})),p=e.setImageField,h=e.image,x=c.useRef();return c.useEffect((function(){i.image&&!h&&p(i.image)}),[i,p,h]),(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"end",width:"100%"},children:[(0,r.jsx)(o.Z,{component:"img",alt:h,sx:{maxWidth:"300px",maxHeight:"300px"},src:"".concat(m.LS,"storage/").concat(h)}),(0,r.jsxs)(s.Z,{variant:"text",color:"error",sx:{mt:2},onClick:function(){p(void 0),n((0,v.ig)(void 0))},children:[" ","Remove"," "]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Z,{onClick:function(){x.current.click()},sx:{display:"flex",cursor:"pointer",justifyContent:"center",alignItems:"center",height:"200px",border:"2px dashed ".concat(d.Z[200]),backgroundColor:d.Z[100]},children:(0,r.jsx)(l.Z,{variant:"body1",component:"p",children:"Upload image"})}),i.loading&&(0,r.jsx)(a.Z,{color:"info"})]}),(0,r.jsx)("input",{ref:x,style:{display:"none"},type:"file",accept:"image/jpeg, image/png",onChange:function(){x.current.files.length&&(console.log(x.current.files[0]),n((0,v.Ix)(x.current.files[0])))}})]})}},7092:function(e,n,i){i.r(n),i.d(n,{default:function(){return O}});var r=i(5893),t=i(7294),o=i(5113),s=i(6886),l=i(5861),a=i(1903),d=i(4054),c=i(3841),u=i(8360),m=i(8972),v=i(480),p=i(2852),h=i(2963),x=i(7357),f=i(6901),Z=i(7709),j=i(7109),b=i(3946),g=i(3321),y=i(8456),w=i(4524),P=i(7536),C=i(2562),I=i(656),S=i(5617),_=i(1163),k=i(8169),M=(0,k.Z)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),L=(0,k.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),W=i(1664),E=i(8446);function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function q(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function A(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(n){q(e,n,i[n])}))}return e}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,t,o=[],s=!0,l=!1;try{for(i=i.call(e);!(s=(r=i.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(a){l=!0,t=a}finally{try{s||null==i.return||i.return()}finally{if(l)throw t}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return z(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e){var n,i,k,z,q,O,N,F,D,$,U,T,B,V,H=e.pid,Q=(0,_.useRouter)(),G=(0,S.v9)((function(e){return e.home})),J=(0,S.v9)((function(e){return e.user})),K=(0,S.v9)((function(e){return e.login})),X=(0,S.v9)((function(e){return e.condition})),Y=(0,S.v9)((function(e){return e.role})),ee=(0,S.v9)((function(e){return e.city})),ne=R(t.useState(!1),2),ie=ne[0],re=ne[1],te=R(t.useState(!1),2),oe=te[0],se=te[1],le=R(t.useState(""),2),ae=le[0],de=le[1],ce=R(t.useState(""),2),ue=ce[0],me=ce[1],ve=R(t.useState(!1),2),pe=ve[0],he=ve[1],xe=R(t.useState(void 0),2),fe=xe[0],Ze=xe[1],je=(0,S.I0)(),be=(0,P.cI)(),ge=be.register,ye=be.handleSubmit,we=(be.watch,be.reset),Pe=be.setValue;be.formState.errors,t.useEffect((function(){var e,n,i,r,t,o,s,l,a,d,c,u,m,v,p,h,x;((J.success||(null===(e=K.register)||void 0===e?void 0:e.success)||(null===(n=K.updatePassword)||void 0===n?void 0:n.success))&&Q.reload(),H&&je((0,C.PR)(H)),J.user&&H)&&(Pe("first_name",(null===(i=J.user)||void 0===i?void 0:i.first_name)||""),Pe("last_name",(null===(r=J.user)||void 0===r?void 0:r.last_name)||""),Pe("email",(null===(t=J.user)||void 0===t?void 0:t.email)||""),Pe("street",(null===(o=J.user)||void 0===o?void 0:o.street)||""),Pe("mobile",(null===(s=J.user)||void 0===s?void 0:s.mobile)||""),Pe("zip_code",(null===(l=J.user)||void 0===l?void 0:l.zip_code)||""),Pe("url",(null===(a=J.user)||void 0===a?void 0:a.url)||""),Pe("bio",(null===(d=J.user)||void 0===d?void 0:d.bio)||""),he(null!==(x=1===(null===(c=J.user.condition)||void 0===c?void 0:c.value))&&void 0!==x&&x),Ze((null===(u=J.user)||void 0===u?void 0:u.avatar)||""),de((null===(m=J.user)||void 0===m||null===(v=m.role)||void 0===v?void 0:v.id)||""),me((null===(p=J.user)||void 0===p||null===(h=p.city)||void 0===h?void 0:h.id)||""))}),[je,H,we,Q,J.success,Pe,J.user,null===(n=K.register)||void 0===n?void 0:n.success,null===(i=K.updatePassword)||void 0===i?void 0:i.success]);var Ce,Ie,Se=function(e){de(e.target.value)},_e=function(e){me(e.target.value)},ke=function(e){e.preventDefault()};return(0,r.jsx)(w.ZP,{children:(0,r.jsx)(s.ZP,{container:!0,children:(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:10,sx:{mx:"auto",my:4},children:[(0,r.jsx)(l.Z,{variant:"h3",component:"h1",sx:{fontWeight:"bold"},children:H?"Edit User":"Create a new User"}),(0,r.jsxs)(h.Z,{"aria-label":"breadcrumb",children:[(0,r.jsx)(W.default,{href:"/page/",children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:"Dashboard"})}),1==(null===(k=J.user)||void 0===k||null===(z=k.role)||void 0===z?void 0:z.value)&&(0,r.jsx)(W.default,{href:"/page/user",children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:"Users"})})]}),(0,r.jsxs)(x.Z,{component:"form",sx:{mt:5},onSubmit:ye((function(e){var n,i=null===X||void 0===X||null===(n=X.list)||void 0===n?void 0:n.filter((function(e){return e.value==+pe})),r=A({},e,{first_name:e.first_name,last_name:e.last_name,email:e.email,bio:e.bio,street:e.street,zip_code:e.zip_code,url:e.url,avatar:fe,role:{id:ae},city:{id:ue},condition:i&&i[0]});return H?""==e.password&&""==e.confirm_password?je((0,C.Nq)(A({},r,{id:H}))):function(e){return e.password!=e.confirm_password?je((0,C.qS)("Password and Confirm Password must be same")):je((0,E.gQ)({email:e.email,password:e.password,confirmNewPassword:e.confirm_password}))}(e):function(e,n){if(e.password!=e.confirm_password)return je((0,C.qS)("Password and Confirm Password must be same"));je((0,E.a$)({first_name:e.first_name,auth:"dashboard",last_name:e.last_name,email:e.email,password:e.password,confirm_password:e.confirm_password,role:{id:ae},condition:n&&n[0]}))}(e,i)})),children:[(J.error||(null===(q=K.register)||void 0===q?void 0:q.error)||(null===(O=K.updatePassword)||void 0===O?void 0:O.error))&&(0,r.jsx)(f.Z,{severity:"error",sx:{my:1},children:J.error||(null===(N=K.register)||void 0===N?void 0:N.error)||(null===(F=K.updatePassword)||void 0===F?void 0:F.error)}),(J.success||(null===(D=K.register)||void 0===D?void 0:D.success)||(null===($=K.updatePassword)||void 0===$?void 0:$.success))&&(0,r.jsx)(f.Z,{severity:"success",sx:{my:1},children:"Operation Successful"}),!H&&(0,r.jsx)(o.Z,{elevation:0,sx:{p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Basic details"})}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsx)(a.Z,A({id:"name",InputLabelProps:{shrink:!0},label:"First name",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},ge("first_name",{required:!0}))),(0,r.jsx)(a.Z,A({id:"name",InputLabelProps:{shrink:!0},label:"Last name",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},ge("last_name",{required:!0}))),(0,r.jsx)(a.Z,A({id:"name",label:"Email",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("email",{required:!0})))]})]})}),H&&(0,r.jsx)(o.Z,{elevation:0,sx:{p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Basic details"})}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsx)(a.Z,A({id:"name",InputLabelProps:{shrink:!0},label:"First name",variant:"outlined",fullWidth:!0,color:"info",sx:{my:1}},ge("first_name",{required:!0}))),(0,r.jsx)(a.Z,A({id:"name",label:"Last name",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("last_name",{required:!1}))),(0,r.jsx)(a.Z,A({id:"description",InputLabelProps:{shrink:!0},label:"Bio",multiline:!0,fullWidth:!0,sx:{my:1},color:"info",rows:4},ge("bio",{required:!1}))),(0,r.jsx)(a.Z,A({label:"Mobile",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("mobile",{required:!1}))),(0,r.jsx)(a.Z,A({id:"name",label:"Website link",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("url",{required:!1})))]})]})}),H&&(Ce=Ze,Ie=fe,(0,r.jsx)(o.Z,{elevation:0,sx:{mt:2,p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:4,sx:{pr:5},children:[(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Avatar"}),(0,r.jsx)(l.Z,{variant:"body2",component:"p",children:"The image will appear on your profile"})]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(I.Z,{setImageField:Ce,image:Ie})})]})})),H&&function(){var e;return(0,r.jsx)(o.Z,{elevation:0,sx:{mt:4,p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"City *"})}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsx)(a.Z,A({label:"Zip code",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("zip_code",{required:!1}))),(0,r.jsx)(a.Z,A({label:"Street",variant:"outlined",InputLabelProps:{shrink:!0},fullWidth:!0,color:"info",sx:{my:1}},ge("street",{required:!1}))),(0,r.jsxs)(d.Z,{fullWidth:!0,children:[(0,r.jsx)(c.Z,{id:"demo-simple-select-label",children:"City"}),(0,r.jsx)(u.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:ue,label:"City",onChange:_e,children:(null!==(e=null===ee||void 0===ee?void 0:ee.list)&&void 0!==e?e:[]).map((function(e){return(0,r.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})]})]})})}(),1==(null===(U=G.role)||void 0===U?void 0:U.value)&&function(){var e;return(0,r.jsx)(o.Z,{elevation:0,sx:{mt:4,p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Role *"})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(d.Z,{fullWidth:!0,children:[(0,r.jsx)(c.Z,{id:"demo-simple-select-label",children:"Role"}),(0,r.jsx)(u.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:ae,label:"Role",onChange:Se,children:(null!==(e=null===Y||void 0===Y?void 0:Y.list)&&void 0!==e?e:[]).map((function(e){return(0,r.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})})]})})}(),1==(null===(T=G.role)||void 0===T?void 0:T.value)&&(0,r.jsx)(o.Z,{elevation:0,sx:{mt:4,p:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:4,children:[(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Active User"}),(0,r.jsx)(l.Z,{variant:"body2",component:"p",sx:{pr:3},children:"only active Users will be displayed on website"})]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(d.Z,{fullWidth:!0,sx:{my:1},children:(0,r.jsx)(v.Z,{control:(0,r.jsx)(p.Z,{color:"success",value:pe,checked:pe,onChange:function(){return he(!pe)}}),label:"Active"})})})]})}),(0,r.jsx)(o.Z,{elevation:0,sx:{p:4,mt:4},children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:4,children:[(0,r.jsx)(l.Z,{variant:"h6",component:"h2",sx:{fontWeight:"bold"},children:"Password"}),(0,r.jsx)(l.Z,{variant:"body2",component:"p",sx:{pr:3},children:"Leave blank if you don't want to change it"})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsxs)(d.Z,{sx:{m:1,width:"100%"},variant:"outlined",children:[(0,r.jsx)(c.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,r.jsx)(Z.Z,A({id:"outlined-adornment-password",type:ie?"text":"password"},ge("password",{required:!1}),{endAdornment:(0,r.jsx)(j.Z,{position:"end",children:(0,r.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:function(){return re(!ie)},onMouseDown:ke,edge:"end",children:ie?(0,r.jsx)(M,{}):(0,r.jsx)(L,{})})}),label:"Password"}))]}),(0,r.jsxs)(d.Z,{sx:{m:1,width:"100%"},variant:"outlined",children:[(0,r.jsx)(c.Z,{htmlFor:"outlined-adornment-password",children:"Confirm password"}),(0,r.jsx)(Z.Z,A({id:"outlined-adornment-password",type:oe?"text":"password"},ge("confirm_password",{required:!1}),{endAdornment:(0,r.jsx)(j.Z,{position:"end",children:(0,r.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:function(){return se(!oe)},onMouseDown:ke,edge:"end",children:oe?(0,r.jsx)(M,{}):(0,r.jsx)(L,{})})}),label:"Password"}))]})]})]})}),(0,r.jsx)(s.ZP,{container:!0,sx:{mt:4},children:(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:12,sx:{justifyContent:"end",display:"flex"},children:[(0,r.jsx)(g.Z,{variant:"outlined",color:"info",sx:{mx:2},children:"Cancel"}),(0,r.jsxs)(g.Z,{variant:"contained",color:"info",disableElevation:!0,type:"submit",children:["Create"," ",(J.isLoading||(null===(B=K.register)||void 0===B?void 0:B.loading)||(null===(V=K.updatePassword)||void 0===V?void 0:V.loading))&&(0,r.jsx)(y.Z,{color:"secondary",size:20,sx:{ml:2}})]})]})})]})]})})})}}}]);