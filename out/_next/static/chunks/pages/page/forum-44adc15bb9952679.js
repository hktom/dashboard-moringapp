(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8701],{32186:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/forum",function(){return i(54701)}])},54701:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return T}});var t=i(85893),o=i(86886),r=i(55113),s=i(15861),l=i(46901),u=i(67720),d=i(87918),a=i(18377),c=i(67294),m=i(48280),x=i(38571),f=i(99226),v=i(78462),p=i(97212),h=i(18987),j=i(69661),y=i(59334),b=i(45084),g=i(50595);var Z=function(n){var e,i,o,r,l,d,a,c,m,x,f,Z,w,C,k,_;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(v.Z,{sx:{width:"100%",bgcolor:"background.paper",cursor:"pointer"},onClick:n.onClick,children:[(0,t.jsxs)(p.ZP,{alignItems:"flex-start",children:[(0,t.jsx)(h.Z,{children:(0,t.jsx)(j.Z,{alt:(null===(e=n.question)||void 0===e||null===(i=e.user)||void 0===i?void 0:i.first_name)+"-"+(null===(o=n.question)||void 0===o||null===(r=o.user)||void 0===r?void 0:r.last_name),src:(null===(l=n.question)||void 0===l||null===(d=l.user)||void 0===d?void 0:d.avatar)&&b.LS+"storage/"+(null===(a=n.question)||void 0===a||null===(c=a.user)||void 0===c?void 0:c.avatar)})}),(0,t.jsx)(y.Z,{primary:(0,t.jsx)("span",{style:{fontWeight:"700"},children:(null===(m=n.question)||void 0===m||null===(x=m.user)||void 0===x?void 0:x.first_name)+" "+(null===(f=n.question)||void 0===f||null===(Z=f.user)||void 0===Z?void 0:Z.last_name)}),secondary:(0,t.jsxs)("span",{style:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",marginTop:"5px"},children:[(0,t.jsx)(s.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:null===(w=n.question)||void 0===w?void 0:w.content}),(0,t.jsxs)("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[(0,t.jsx)(g.Z,{date:Date.parse(null===(C=n.question)||void 0===C?void 0:C.created_at),locale:"en-US",style:{fontSize:"0.7rem",marginTop:"6px"}}),(null===(k=n.question)||void 0===k?void 0:k.replies)&&(0,t.jsxs)(s.Z,{sx:{fontSize:"0.7rem",marginTop:"6px"},component:"span",color:"text.primary",children:[null===(_=n.question)||void 0===_?void 0:_.replies.length," replies"]})]})]})})]}),(0,t.jsx)(u.Z,{})]})})},w=i(61903),C=i(93946),k=i(11775),_=i(87536),S=i(25617),q=i(17829);function I(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function P(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})))),t.forEach((function(e){I(n,e,i[e])}))}return n}var W=function(n){var e=(0,S.I0)(),i=(0,m.C)((function(n){return n})),o=(0,c.useState)(void 0),r=o[0],l=o[1],u=(0,c.useState)(void 0),a=u[0],x=u[1],v=(0,_.cI)(),p=v.register,h=v.handleSubmit,j=(v.watch,v.reset,v.setValue);return v.formState.errors,(0,t.jsxs)(t.Fragment,{children:[!n.isReply&&(0,t.jsx)(s.Z,{component:"h2",variant:"h4",sx:{fontWeight:"bold",px:2,mb:2},children:"Whats up today ?"}),(0,t.jsxs)(f.Z,{component:"form",onSubmit:h((function(t){var o,s,l=P({},t,{user:null===i||void 0===i||null===(o=i.home)||void 0===o?void 0:o.user,condition:null===(s=i.condition.list)||void 0===s?void 0:s.find((function(n){return 3==n.value}))});n.isReply?e({type:q.Qv.ADD_ITEM,payload:P({},l,{question:i.forum.forum})}):(r&&(l.category=r),a&&(l.service=a),e({type:q.gG.ADD_ITEM,payload:l}),j("content",""))})),sx:{display:"flex",width:"100%",alignItems:"top",justifyContent:"left"},children:[(0,t.jsx)(w.Z,P({id:"chat-message",label:n.isReply?"Reply":"Question",multiline:!0,rows:2,sx:{flexGrow:1},autoFocus:!0},p("content",{required:!0}))),(0,t.jsx)(C.Z,{"aria-label":"submit",type:"submit",children:(0,t.jsx)(k.Z,{})})]}),!n.isReply&&function(){var n,e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{component:"h2",variant:"body2",sx:{fontWeight:"bold",px:2,mb:1,mt:2},children:"Whats your question is about ?"}),(0,t.jsxs)(f.Z,{sx:{overflowX:"scroll",width:"100%",display:"flex",justifyContent:"start",alignItems:"center",pb:5},children:[null===(n=i.category.list)||void 0===n?void 0:n.map((function(n){return(0,t.jsx)(d.Z,{onClick:function(){l(n),x(void 0)},label:n.name,size:"small",sx:{my:1,mx:1,borderRadius:2,py:1},color:(null===r||void 0===r?void 0:r.id)===n.id?"warning":"info"},n.id)})),null===(e=i.service.list)||void 0===e?void 0:e.map((function(n){return(0,t.jsx)(d.Z,{onClick:function(){l(void 0),x(n)},label:n.name,size:"small",color:(null===a||void 0===a?void 0:a.id)===n.id?"warning":"info",sx:{my:1,mx:1,borderRadius:2,py:1}},n.id)}))]})]})}()]})};var R=function(n){var e=(0,m.T)();return(0,t.jsxs)(r.Z,{color:"secondary",elevation:0,sx:{mb:4,pt:5,px:2,pb:5,minHeight:"70vh"},children:[(0,t.jsx)(W,{}),(0,t.jsx)(u.Z,{sx:{mt:4}}),(0,t.jsx)(s.Z,{component:"h3",variant:"h6",sx:{fontWeight:"bold",px:2,mb:5,mt:5},children:"Recent Questions"}),0==n.forum.length&&(0,t.jsx)(f.Z,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(s.Z,{component:"h3",variant:"body1",sx:{fontWeight:"bold",px:2,mb:5,mt:5},children:"No Question found"})}),n.forum.length>0&&n.forum.map((function(n){return(0,t.jsx)(Z,{question:n,onClick:function(){e(q.dg.setScreen(1)),e(q.dg.setForum(n))}},n.id)}))]})},E=i(78298);var O=function(){var n,e,i=(0,m.C)((function(n){return n})),o=(0,m.T)();return(0,c.useEffect)((function(){console.log(i.forum.forum)})),(0,t.jsxs)(r.Z,{color:"secondary",elevation:0,sx:{mb:4,pt:5,px:2,pb:5,minHeight:"70vh"},children:[(0,t.jsx)(C.Z,{"aria-label":"back",onClick:function(){return o(q.dg.setScreen(0))},children:(0,t.jsx)(E.Z,{})}),(0,t.jsx)(Z,{question:i.forum.forum,onClick:function(){}}),(0,t.jsx)(W,{isReply:!0}),(0,t.jsx)(u.Z,{sx:{mt:4}}),(0,t.jsx)(s.Z,{component:"h3",variant:"h6",sx:{fontWeight:"bold",px:2,mb:5,mt:5},children:"Replies"}),0==i.forum.forum.replies.length&&(0,t.jsx)(f.Z,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(s.Z,{component:"h3",variant:"body1",sx:{fontWeight:"bold",px:2,mb:5,mt:5},children:"No replies"})}),(null===(n=i.forum.forum)||void 0===n?void 0:n.replies.length)>0&&(null===(e=i.forum.forum)||void 0===e?void 0:e.replies.map((function(n){return(0,t.jsx)(Z,{question:n,onClick:function(){}},n.id)})))]})};var T=function(){var n,e,i,f,v=(0,m.C)((function(n){return n})),p=(0,c.useRef)(0),h=(0,c.useState)(""),j=h[0],y=h[1],b=(0,c.useState)(""),g=b[0],Z=(b[1],(0,c.useState)([])),w=Z[0],C=Z[1];return(0,c.useEffect)((function(){var n,e;(null===(n=v.home)||void 0===n?void 0:n.user)&&0==p.current&&(C(null===(e=v.forum)||void 0===e?void 0:e.list),p.current++)}),[null===(n=v.forum)||void 0===n?void 0:n.list,null===(e=v.home)||void 0===e?void 0:e.user]),(0,t.jsx)(x.Z,{children:(0,t.jsx)(o.ZP,{container:!0,spacing:3,sx:{mt:1,mb:10,px:2},children:(0,t.jsxs)(o.ZP,{item:!0,xs:12,md:12,children:[(0,t.jsxs)(r.Z,{color:"secondary",elevation:0,sx:{mb:4,pt:5},children:[(0,t.jsx)(s.Z,{component:"h2",variant:"h4",sx:{fontWeight:"bold",px:2,mb:2},children:"Forum"}),(0,t.jsx)(a.Z,{sx:{backgroundImage:"url(/mob-people-forum.jpeg)",width:"100%",height:"100px",backgroundSize:"contain",backgroundRepeat:"repeat-x",backgroundPosition:"bottom"}})]}),v.forum.error&&(0,t.jsx)(l.Z,{severity:"error",sx:{my:1},children:v.forum.error}),v.forum.success&&(0,t.jsx)(l.Z,{severity:"success",sx:{my:1},children:"Your post is under review. It will be published after approval."}),(0,t.jsxs)(o.ZP,{container:!0,spacing:3,sx:{mt:1},children:[(0,t.jsx)(o.ZP,{item:!0,xs:12,md:8,children:0==v.forum.screen?(0,t.jsx)(R,{forum:w}):(0,t.jsx)(O,{})}),(0,t.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(r.Z,{elevation:0,color:"secondary",sx:{px:2,py:2},children:[(0,t.jsx)(s.Z,{component:"h3",variant:"body1",sx:{fontWeight:"bold",px:2,mb:2,mt:5},children:"Filter"}),(0,t.jsx)(u.Z,{}),(0,t.jsx)(a.Z,{sx:{width:"100%",display:"flex",justifyContent:"start",flexWrap:"wrap",mt:2,mb:2},children:null===(i=v.category.list)||void 0===i?void 0:i.map((function(n){return(0,t.jsx)(d.Z,{label:n.name,sx:{my:1,mx:1},color:j==n.id?"primary":"default",onClick:function(){return function(n){var e,i;if(n==j)return y(""),void C(null===(i=v.forum)||void 0===i?void 0:i.list);y(n),C(null===(e=v.forum)||void 0===e?void 0:e.list.filter((function(e){var i;return(null===(i=e.category)||void 0===i?void 0:i.id)===n})))}(n.id)}},n.id)}))}),(0,t.jsx)(u.Z,{}),(0,t.jsx)(a.Z,{sx:{width:"100%",display:"flex",justifyContent:"start",flexWrap:"wrap",mt:2},children:null===(f=v.service.list)||void 0===f?void 0:f.map((function(n){return(0,t.jsx)(d.Z,{label:n.name,sx:{my:1,mx:1},color:j==n.id?"primary":"default",onClick:function(){return function(n){var e,i;if(n==g)return y(""),void C(null===(i=v.forum)||void 0===i?void 0:i.list);y(n),C(null===(e=v.forum)||void 0===e?void 0:e.list.filter((function(e){var i;return(null===(i=e.service)||void 0===i?void 0:i.id)===n})))}(n.id)}},n.id)}))})]})})]})]})})})}}},function(n){n.O(0,[759,2749,1903,7536,9291,595,6954,8571,9774,2888,179],(function(){return e=32186,n(n.s=e);var e}));var e=n.O();_N_E=e}]);