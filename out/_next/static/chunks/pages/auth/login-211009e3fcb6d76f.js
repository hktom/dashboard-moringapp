(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9344],{69368:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var o=t(63366),r=t(87462),i=t(67294),a=t(27192),l=t(41796),s=t(21964),c=t(88169),d=t(85893),u=(0,c.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(98216),h=t(27623),b=t(11496),x=t(28979);function v(e){return(0,x.Z)("MuiCheckbox",e)}var Z=(0,t(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,b.ZP)(s.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n[`color${(0,f.Z)(t.color)}`]]}})((({theme:e,ownerState:n})=>(0,r.Z)({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${Z.checked}, &.${Z.indeterminate}`]:{color:e.palette[n.color].main},[`&.${Z.disabled}`]:{color:e.palette.action.disabled}}))),k=(0,d.jsx)(m,{}),w=(0,d.jsx)(u,{}),j=(0,d.jsx)(p,{});var S=i.forwardRef((function(e,n){var t,l;const s=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=k,color:u="primary",icon:m=w,indeterminate:p=!1,indeterminateIcon:b=j,inputProps:x,size:Z="medium"}=s,S=(0,o.Z)(s,g),C=p?b:m,P=p?b:c,R=(0,r.Z)({},s,{color:u,indeterminate:p,size:Z}),W=(e=>{const{classes:n,indeterminate:t,color:o}=e,i={root:["root",t&&"indeterminate",`color${(0,f.Z)(o)}`]},l=(0,a.Z)(i,v,n);return(0,r.Z)({},n,l)})(R);return(0,d.jsx)(y,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":p},x),icon:i.cloneElement(C,{fontSize:null!=(t=C.props.fontSize)?t:Z}),checkedIcon:i.cloneElement(P,{fontSize:null!=(l=P.props.fontSize)?l:Z}),ownerState:R,ref:n},S,{classes:W}))}))},27948:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o=t(63366),r=t(87462),i=t(67294),a=t(86010),l=t(27192),s=t(27623),c=t(11496),d=t(28979);function u(e){return(0,d.Z)("MuiContainer",e)}(0,t(76087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=t(98216),p=t(85893);const f=["className","component","disableGutters","fixed","maxWidth"],h=(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`maxWidth${(0,m.Z)(String(t.maxWidth))}`],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}})((({theme:e,ownerState:n})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:n})=>n.fixed&&Object.keys(e.breakpoints.values).reduce(((n,t)=>{const o=e.breakpoints.values[t];return 0!==o&&(n[e.breakpoints.up(t)]={maxWidth:`${o}${e.breakpoints.unit}`}),n}),{})),(({theme:e,ownerState:n})=>(0,r.Z)({},"xs"===n.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},n.maxWidth&&"xs"!==n.maxWidth&&{[e.breakpoints.up(n.maxWidth)]:{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`}})));var b=i.forwardRef((function(e,n){const t=(0,s.Z)({props:e,name:"MuiContainer"}),{className:i,component:c="div",disableGutters:d=!1,fixed:b=!1,maxWidth:x="lg"}=t,v=(0,o.Z)(t,f),Z=(0,r.Z)({},t,{component:c,disableGutters:d,fixed:b,maxWidth:x}),g=(e=>{const{classes:n,fixed:t,disableGutters:o,maxWidth:r}=e,i={root:["root",r&&`maxWidth${(0,m.Z)(String(r))}`,t&&"fixed",o&&"disableGutters"]};return(0,l.Z)(i,u,n)})(Z);return(0,p.jsx)(h,(0,r.Z)({as:c,ownerState:Z,className:(0,a.Z)(g.root,i),ref:n},v))}))},50480:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var o=t(63366),r=t(87462),i=t(67294),a=t(86010),l=t(27192),s=t(74423),c=t(15861),d=t(98216),u=t(11496),m=t(27623),p=t(28979);function f(e){return(0,p.Z)("MuiFormControlLabel",e)}var h=(0,t(76087).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),b=t(15704),x=t(85893);const v=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],Z=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${h.label}`]:n.label},n.root,n[`labelPlacement${(0,d.Z)(t.labelPlacement)}`]]}})((({theme:e,ownerState:n})=>(0,r.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:e.palette.text.disabled}}})));var g=i.forwardRef((function(e,n){const t=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),{className:u,componentsProps:p={},control:h,disabled:g,disableTypography:y,label:k,labelPlacement:w="end"}=t,j=(0,o.Z)(t,v),S=(0,s.Z)();let C=g;"undefined"===typeof C&&"undefined"!==typeof h.props.disabled&&(C=h.props.disabled),"undefined"===typeof C&&S&&(C=S.disabled);const P={disabled:C};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof h.props[e]&&"undefined"!==typeof t[e]&&(P[e]=t[e])}));const R=(0,b.Z)({props:t,muiFormControl:S,states:["error"]}),W=(0,r.Z)({},t,{disabled:C,labelPlacement:w,error:R.error}),F=(e=>{const{classes:n,disabled:t,labelPlacement:o,error:r}=e,i={root:["root",t&&"disabled",`labelPlacement${(0,d.Z)(o)}`,r&&"error"],label:["label",t&&"disabled"]};return(0,l.Z)(i,f,n)})(W);let I=k;return null==I||I.type===c.Z||y||(I=(0,x.jsx)(c.Z,(0,r.Z)({component:"span",className:F.label},p.typography,{children:I}))),(0,x.jsxs)(Z,(0,r.Z)({className:(0,a.Z)(F.root,u),ownerState:W,ref:n},j,{children:[i.cloneElement(h,P),I]}))}))},50122:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var o=t(63366),r=t(87462),i=t(67294),a=t(86010),l=t(27192),s=t(54844),c=t(41796),d=t(98216),u=t(11496),m=t(2734),p=t(27623),f=t(18791),h=t(51705),b=t(15861),x=t(28979);function v(e){return(0,x.Z)("MuiLink",e)}var Z=(0,t(76087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=t(85893);const y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=(0,u.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${(0,d.Z)(t.underline)}`],"button"===t.component&&n.button]}})((({theme:e,ownerState:n})=>{const t=(0,s.D)(e,`palette.${(e=>k[e]||e)(n.color)}`)||n.color;return(0,r.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,c.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z.focusVisible}`]:{outline:"auto"}})}));var j=i.forwardRef((function(e,n){const t=(0,m.Z)(),s=(0,p.Z)({props:e,name:"MuiLink"}),{className:c,color:u="primary",component:b="a",onBlur:x,onFocus:Z,TypographyClasses:j,underline:S="always",variant:C="inherit",sx:P}=s,R=(0,o.Z)(s,y),{isFocusVisibleRef:W,onBlur:F,onFocus:I,ref:L}=(0,f.Z)(),[M,$]=i.useState(!1),z=(0,h.Z)(n,L),N=(0,r.Z)({},s,{color:("function"===typeof P?P(t).color:null==P?void 0:P.color)||u,component:b,focusVisible:M,underline:S,variant:C}),B=(e=>{const{classes:n,component:t,focusVisible:o,underline:r}=e,i={root:["root",`underline${(0,d.Z)(r)}`,"button"===t&&"button",o&&"focusVisible"]};return(0,l.Z)(i,v,n)})(N);return(0,g.jsx)(w,(0,r.Z)({className:(0,a.Z)(B.root,c),classes:j,component:b,onBlur:e=>{F(e),!1===W.current&&$(!1),x&&x(e)},onFocus:e=>{I(e),!0===W.current&&$(!0),Z&&Z(e)},ref:z,ownerState:N,variant:C,sx:[{color:k[u]||u},...Array.isArray(P)?P:[P]]},R))}))},21964:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var o=t(63366),r=t(87462),i=t(67294),a=t(86010),l=t(27192),s=t(98216),c=t(11496),d=t(49299),u=t(74423),m=t(47739),p=t(28979);function f(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,t(76087).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var h=t(85893);const b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,c.ZP)(m.Z)((({ownerState:e})=>(0,r.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),v=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var Z=i.forwardRef((function(e,n){const{autoFocus:t,checked:i,checkedIcon:c,className:m,defaultChecked:p,disabled:Z,disableFocusRipple:g=!1,edge:y=!1,icon:k,id:w,inputProps:j,inputRef:S,name:C,onBlur:P,onChange:R,onFocus:W,readOnly:F,required:I,tabIndex:L,type:M,value:$}=e,z=(0,o.Z)(e,b),[N,B]=(0,d.Z)({controlled:i,default:Boolean(p),name:"SwitchBase",state:"checked"}),O=(0,u.Z)();let E=Z;O&&"undefined"===typeof E&&(E=O.disabled);const q="checkbox"===M||"radio"===M,_=(0,r.Z)({},e,{checked:N,disabled:E,disableFocusRipple:g,edge:y}),D=(e=>{const{classes:n,checked:t,disabled:o,edge:r}=e,i={root:["root",t&&"checked",o&&"disabled",r&&`edge${(0,s.Z)(r)}`],input:["input"]};return(0,l.Z)(i,f,n)})(_);return(0,h.jsxs)(x,(0,r.Z)({component:"span",className:(0,a.Z)(D.root,m),centerRipple:!0,focusRipple:!g,disabled:E,tabIndex:null,role:void 0,onFocus:e=>{W&&W(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{P&&P(e),O&&O.onBlur&&O.onBlur(e)},ownerState:_,ref:n},z,{children:[(0,h.jsx)(v,(0,r.Z)({autoFocus:t,checked:i,defaultChecked:p,className:D.input,disabled:E,id:q&&w,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;B(n),R&&R(e,n)},readOnly:F,ref:S,required:I,ownerState:_,tabIndex:L,type:M},"checkbox"===M&&void 0===$?{}:{value:$},j)),N?c:k]}))}))},56e3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(46291)}])},48280:function(e,n,t){"use strict";t.d(n,{T:function(){return r},C:function(){return i}});var o=t(25617),r=function(){return(0,o.I0)()},i=o.v9},46291:function(e,n,t){"use strict";t.r(n);var o=t(85893),r=t(67294),i=t(25617),a=t(31955),l=t(24358),s=t(98456),c=t(99226),d=t(55113),u=t(27948),m=t(66720),p=t(15861),f=t(46901),h=t(61903),b=t(50480),x=t(69368),v=t(83321),Z=t(50122),g=t(67377),y=t(87536),k=t(11163),w=t(9008),j=t(48280);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){S(e,n,t[n])}))}return e}n.default=function(){var e,n,t=(0,i.I0)(),S=(0,r.useState)(!1),P=S[0],R=S[1],W=(0,j.C)((function(e){return e.auth})),F=(0,k.useRouter)(),I=(0,y.cI)(),L=I.register,M=I.handleSubmit;return I.watch,I.formState.errors,(0,r.useEffect)((function(){var e,n,t,o;(null===F||void 0===F||null===(e=F.query)||void 0===e?void 0:e.access_token)&&(null===F||void 0===F||null===(n=F.query)||void 0===n?void 0:n.redirect)&&(a.Z.set("token",null===F||void 0===F||null===(t=F.query)||void 0===t?void 0:t.access_token,{expires:7}),window.location.href="/page/"+(null===F||void 0===F||null===(o=F.query)||void 0===o?void 0:o.redirect))}),[null===F||void 0===F||null===(e=F.query)||void 0===e?void 0:e.access_token,null===F||void 0===F||null===(n=F.query)||void 0===n?void 0:n.redirect]),(0,r.useEffect)((function(){a.Z.get("token")&&(window.location.href="/page/home")}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:P,onClick:function(){R(!1)},children:(0,o.jsx)(s.Z,{color:"inherit"})}),(0,o.jsxs)(w.default,{children:[(0,o.jsx)("title",{children:"Login"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,o.jsx)(c.Z,{sx:{minHeight:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsx)(d.Z,{sx:{maxWidth:"50rem",pb:8},color:"#fff",children:(0,o.jsxs)(u.Z,{component:"main",maxWidth:"xs",children:[(0,o.jsx)(m.ZP,{}),(0,o.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(p.Z,{component:"h1",variant:"h4",sx:{fontWeight:"bold"},children:"Log in"}),W.login.error&&(0,o.jsx)(f.Z,{severity:"error",sx:{width:"100%"},children:W.login.error}),W.login.token&&(0,o.jsx)(f.Z,{severity:"success",sx:{width:"100%"},children:"You are logged in!"}),(0,o.jsxs)(c.Z,{component:"form",noValidate:!0,sx:{mt:1},onSubmit:M((function(e){t({type:g.J0.LOGIN,payload:e})})),children:[(0,o.jsx)(h.Z,C({margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",autoComplete:"email",disabled:W.login.loading,autoFocus:!0},L("email",{required:!0}))),(0,o.jsx)(h.Z,C({margin:"normal",required:!0,fullWidth:!0},L("password",{required:!0}),{label:"Password",type:"password",id:"password",disabled:W.login.loading,autoComplete:"current-password"})),(0,o.jsx)(b.Z,{control:(0,o.jsx)(x.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,o.jsxs)(v.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:W.login.loading,disableElevation:!0,color:"info",sx:{mt:3,mb:2,py:1.2},children:["Sign In"," ",W.login.loading&&(0,o.jsx)(s.Z,{color:"secondary",size:20,sx:{ml:2}})]}),(0,o.jsx)(c.Z,{sx:{mx:"auto",textAlign:"center"},children:(0,o.jsx)(Z.Z,{href:"#",variant:"body2",children:"Forgot password?"})})]})]})]})})})]})}}},function(e){e.O(0,[759,1903,3643,7536,9774,2888,179],(function(){return n=56e3,e(e.s=n);var n}));var n=e.O();_N_E=n}]);