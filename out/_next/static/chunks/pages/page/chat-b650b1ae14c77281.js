(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5709],{11775:function(n,e,o){"use strict";var t=o(95318);e.Z=void 0;var i=t(o(64938)),r=o(85893),l=(0,i.default)((0,r.jsx)("path",{d:"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"}),"SendOutlined");e.Z=l},21975:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/chat",function(){return o(83628)}])},40968:function(n,e,o){"use strict";var t=o(85893),i=o(78462),r=o(97212),l=o(18987),a=o(69661),u=o(59334),s=o(15861),c=o(67720),d=(o(67294),o(45084)),v=o(50595);function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var o=0,t=new Array(e);o<e;o++)t[o]=n[o];return t}function f(n){return function(n){if(Array.isArray(n))return p(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return p(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(n){var e,o,p,h,m,b,g,y,x;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",cursor:"pointer"},onClick:n.onClick,children:[(0,t.jsxs)(r.ZP,{alignItems:"flex-start",children:[(0,t.jsx)(l.Z,{children:(0,t.jsx)(a.Z,{alt:(null===(e=n.user)||void 0===e?void 0:e.first_name)+"-"+(null===(o=n.user)||void 0===o?void 0:o.last_name),src:(null===(p=n.user)||void 0===p?void 0:p.avatar)&&d.LS+"storage/"+(null===(h=n.user)||void 0===h?void 0:h.avatar)})}),(0,t.jsx)(u.Z,{primary:(0,t.jsx)("span",{style:{fontWeight:"700"},children:(null===(m=n.user)||void 0===m?void 0:m.first_name)+" "+(null===(b=n.user)||void 0===b?void 0:b.last_name)}),secondary:(0,t.jsxs)("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"end",marginTop:"5px"},children:[(0,t.jsxs)(s.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:[n.chat.length>0&&(null===(g=f(n.chat).reverse()[0])||void 0===g||null===(y=g.content)||void 0===y?void 0:y.substring(0,20)),"..."]}),(0,t.jsx)(v.Z,{date:Date.parse(null===(x=n.chat[0])||void 0===x?void 0:x.created_at),locale:"en-US",style:{fontSize:"0.7rem"}})]})})]}),(0,t.jsx)(c.Z,{})]})})}},83628:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return M}});var t=o(85893),i=o(86886),r=o(55113),l=o(15861),a=o(67294),u=o(48280),s=o(38571),c=o(40968),d=o(99226),v=o(50595);var p=function(n){var e,o,i,r,a,s,c,p=(0,u.C)((function(n){var e;return null===(e=n.home)||void 0===e?void 0:e.user}));return(0,t.jsxs)(d.Z,{className:"chat-bubble ".concat((null===p||void 0===p?void 0:p.id)==(null===(e=n.chat)||void 0===e||null===(o=e.user)||void 0===o?void 0:o.id)?"chat-bubble-from":"chat-bubble-to"),children:[(0,t.jsx)(l.Z,{component:"p",variant:"body1",sx:{textAlign:(null===p||void 0===p?void 0:p.id)==(null===(i=n.chat)||void 0===i||null===(r=i.user)||void 0===r?void 0:r.id)?"left":"right"},children:null===(a=n.chat)||void 0===a?void 0:a.content}),(0,t.jsx)(l.Z,{component:"p",variant:"subtitle1",sx:{fontSize:"0.7rem",textAlign:(null===p||void 0===p?void 0:p.id)!=(null===(s=n.chat)||void 0===s||null===(c=s.user)||void 0===c?void 0:c.id)?"left":"right"},children:(0,t.jsx)(v.Z,{date:Date.parse(n.chat.created_at),locale:"en-US"})})]})},f=o(61903),h=o(93946),m=o(11775),b=o(87536),g=o(25617),y=o(64493);function x(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function _(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),t.forEach((function(e){x(n,e,o[e])}))}return n}var j,k=function(){var n=(0,g.I0)(),e=(0,u.C)((function(n){return n})),o=(0,b.cI)(),i=o.register,r=o.handleSubmit,l=(o.watch,o.reset,o.setValue);return o.formState.errors,(0,t.jsxs)(d.Z,{component:"form",onSubmit:r((function(o){var t,i,r=_({},o,{room:null===(t=e.chat)||void 0===t?void 0:t.room,user:null===e||void 0===e||null===(i=e.home)||void 0===i?void 0:i.user});n({type:y.ZZ.UPDATE_ITEM,payload:r}),l("content","")})),sx:{display:"flex",width:"100%",alignItems:"top",justifyContent:"left"},children:[(0,t.jsx)(f.Z,_({id:"chat-message",label:"Message",multiline:!0,rows:2,sx:{flexGrow:1},autoFocus:!0},i("content",{required:!0}))),(0,t.jsx)(h.Z,{"aria-label":"submit",type:"submit",children:(0,t.jsx)(m.Z,{})})]})},w=o(18634),Z=o(82152);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(j||(j={}));var O=new Map;function S(n){var e;switch(n){case j.Query:e="Query";break;case j.Mutation:e="Mutation";break;case j.Subscription:e="Subscription"}return e}function C(n,e){var o=function(n){var e,o,t=O.get(n);if(t)return t;__DEV__?(0,w.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,w.kG)(!!n&&!!n.kind,30);var i=n.definitions.filter((function(n){return"FragmentDefinition"===n.kind})),r=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"query"===n.operation})),l=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"mutation"===n.operation})),a=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"subscription"===n.operation}));__DEV__?(0,w.kG)(!i.length||r.length||l.length||a.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,w.kG)(!i.length||r.length||l.length||a.length,31),__DEV__?(0,w.kG)(r.length+l.length+a.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(r.length," queries, ").concat(a.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,w.kG)(r.length+l.length+a.length<=1,32),o=r.length?j.Query:j.Mutation,r.length||l.length||(o=j.Subscription);var u=r.length?r:l.length?l:a;__DEV__?(0,w.kG)(1===u.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(u.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,w.kG)(1===u.length,33);var s=u[0];e=s.variableDefinitions||[];var c={name:s.name&&"Name"===s.name.kind?s.name.value:"data",type:o,variables:e};return O.set(n,c),c}(n),t=S(e),i=S(o.type);__DEV__?(0,w.kG)(o.type===e,"Running a ".concat(t," requires a graphql ")+"".concat(t,", but a ").concat(i," was used instead.")):(0,w.kG)(o.type===e,34)}var P=o(85317);function E(n,e){var o=function(n){var e=(0,a.useContext)((0,P.K)()),o=n||e.client;return __DEV__?(0,w.kG)(!!o,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,w.kG)(!!o,29),o}(null===e||void 0===e?void 0:e.client);C(n,j.Subscription);var t=(0,a.useState)({loading:!(null===e||void 0===e?void 0:e.skip),error:void 0,data:void 0,variables:null===e||void 0===e?void 0:e.variables}),i=t[0],r=t[1],l=(0,a.useState)((function(){return(null===e||void 0===e?void 0:e.skip)?null:o.subscribe({query:n,variables:null===e||void 0===e?void 0:e.variables,fetchPolicy:null===e||void 0===e?void 0:e.fetchPolicy,context:null===e||void 0===e?void 0:e.context})})),u=l[0],s=l[1],c=(0,a.useRef)({client:o,subscription:n,options:e});return(0,a.useEffect)((function(){var t,i,l,a,u=null===e||void 0===e?void 0:e.shouldResubscribe;"function"===typeof u&&(u=!!u(e)),(null===e||void 0===e?void 0:e.skip)?!(null===e||void 0===e?void 0:e.skip)!==!(null===(t=c.current.options)||void 0===t?void 0:t.skip)&&(r({loading:!1,data:void 0,error:void 0,variables:null===e||void 0===e?void 0:e.variables}),s(null)):!1===u||o===c.current.client&&n===c.current.subscription&&(null===e||void 0===e?void 0:e.fetchPolicy)===(null===(i=c.current.options)||void 0===i?void 0:i.fetchPolicy)&&!(null===e||void 0===e?void 0:e.skip)===!(null===(l=c.current.options)||void 0===l?void 0:l.skip)&&(0,Z.D)(null===e||void 0===e?void 0:e.variables,null===(a=c.current.options)||void 0===a?void 0:a.variables)||(r({loading:!0,data:void 0,error:void 0,variables:null===e||void 0===e?void 0:e.variables}),s(o.subscribe({query:n,variables:null===e||void 0===e?void 0:e.variables,fetchPolicy:null===e||void 0===e?void 0:e.fetchPolicy,context:null===e||void 0===e?void 0:e.context}))),Object.assign(c.current,{client:o,subscription:n,options:e})}),[o,n,e]),(0,a.useEffect)((function(){if(u){var n=u.subscribe({next:function(n){var t,i,l={loading:!1,data:n.data,error:void 0,variables:null===e||void 0===e?void 0:e.variables};r(l),null===(i=null===(t=c.current.options)||void 0===t?void 0:t.onSubscriptionData)||void 0===i||i.call(t,{client:o,subscriptionData:l})},error:function(n){r({loading:!1,data:void 0,error:n,variables:null===e||void 0===e?void 0:e.variables})},complete:function(){var n,e;null===(e=null===(n=c.current.options)||void 0===n?void 0:n.onSubscriptionComplete)||void 0===e||e.call(n)}});return function(){n.unsubscribe()}}}),[u]),i}var D=o(81621);function I(){var n,e,o=(n=['\n    subscription{\n      newMessagesInRoom(room_id: "','"){\n          id\n          content\n          image\n          user{\n              id\n              first_name\n              last_name\n              avatar\n              email\n          }\n          room{\n              id\n          }\n          created_at\n      }\n  }\n    '],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return I=function(){return o},o}var T=function(){var n,e,o,i,s,c,v,f,h=(0,u.C)((function(n){return n})),m=(0,a.useRef)(null),b=(0,u.T)(),g=E((0,D.Ps)(I(),null===h||void 0===h||null===(n=h.chat)||void 0===n||null===(e=n.room)||void 0===e?void 0:e.id)),x=g.loading,_=g.error,j=g.data;return(0,a.useEffect)((function(){m.current.scrollIntoView({behavior:"smooth",block:"end"})})),(0,a.useEffect)((function(){var n,e;(null===j||void 0===j?void 0:j.newMessagesInRoom)&&-1===(null===(n=h.chat)||void 0===n||null===(e=n.room)||void 0===e?void 0:e.chats.findIndex((function(n){return n.id==j.newMessagesInRoom.id})))&&(b(y.Lx.updateChatSuccess(null===j||void 0===j?void 0:j.newMessagesInRoom)),j&&console.log("data",null===j||void 0===j?void 0:j.newMessagesInRoom)),_&&console.error("error",_)}),[j,b,_,x,null===(o=h.chat)||void 0===o||null===(i=o.room)||void 0===i?void 0:i.chats]),(0,t.jsxs)(r.Z,{color:"secondary",elevation:0,sx:{px:2,pb:2,pt:3,display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[(0,t.jsx)(l.Z,{component:"h2",variant:"h6",sx:{fontWeight:"bold",px:2,mb:2},children:"Messages"}),(0,t.jsxs)(d.Z,{sx:{flexGrow:1,height:"65vh",maxHeight:"65vh",overflowY:"scroll",backgroundColor:"#EBDBCD"},children:[(null===(s=h.chat)||void 0===s||null===(c=s.room)||void 0===c?void 0:c.chats)&&(null===(v=h.chat)||void 0===v||null===(f=v.room)||void 0===f?void 0:f.chats.map((function(n){var e,o;return(0,t.jsx)(d.Z,{sx:{display:"flex",px:4,justifyContent:(null===(e=h.home.user)||void 0===e?void 0:e.id)==(null===n||void 0===n||null===(o=n.user)||void 0===o?void 0:o.id)?"flex-end":"flex-start"},children:(0,t.jsx)(p,{chat:n})},null===n||void 0===n?void 0:n.id)}))),(0,t.jsx)("div",{ref:m})]}),(0,t.jsx)(k,{})]})};var M=function(){var n,e,o,a=(0,u.C)((function(n){return n})),d=(0,u.T)();return(0,t.jsx)(s.Z,{children:(0,t.jsxs)(i.ZP,{container:!0,spacing:3,sx:{mt:1,mb:10},children:[(0,t.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(r.Z,{color:"secondary",elevation:0,sx:{px:2,pb:2,pt:3,height:"100%"},children:[(0,t.jsx)(l.Z,{component:"h2",variant:"h6",sx:{fontWeight:"bold",px:2,mb:2},children:"Inbox"}),null===(n=a.chat)||void 0===n||null===(e=n.rooms)||void 0===e?void 0:e.map((function(n){var e,o,i;return(0,t.jsx)(c.Z,{user:(null===n||void 0===n||null===(e=n.user_to)||void 0===e?void 0:e.id)==(null===(o=a.home)||void 0===o||null===(i=o.user)||void 0===i?void 0:i.id)?null===n||void 0===n?void 0:n.user_from:null===n||void 0===n?void 0:n.user_to,chat:(null===n||void 0===n?void 0:n.chats)||[],onClick:function(){return e=n,void d(y.Lx.setRoomChats(e));var e}},null===n||void 0===n?void 0:n.id)}))]})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(null===(o=a.chat)||void 0===o?void 0:o.room)&&(0,t.jsx)(T,{})})]})})}},92703:function(n,e,o){"use strict";var t=o(50414);function i(){}function r(){}r.resetWarningCache=i,n.exports=function(){function n(n,e,o,i,r,l){if(l!==t){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return o.PropTypes=o,o}},45697:function(n,e,o){n.exports=o(92703)()},50414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(n){n.O(0,[759,2749,1903,7536,9291,595,8571,9774,2888,179],(function(){return e=21975,n(n.s=e);var e}));var e=n.O();_N_E=e}]);