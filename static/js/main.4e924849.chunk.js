(this["webpackJsonpinterspace-chat"]=this["webpackJsonpinterspace-chat"]||[]).push([[0],{12:function(e,n,t){},19:function(e,n,t){e.exports=t.p+"static/media/titanembeds.15387e4d.png"},20:function(e,n,t){e.exports=t.p+"static/media/jitsi.ac8e35d6.png"},22:function(e,n,t){e.exports=t(37)},27:function(e,n,t){},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),l=t.n(c),o=(t(27),t(4)),i=(t(29),t(12),t(1)),u=t(2),s=t(3),m="portal.interspace.chat",d={capsule1:{jitsi:{domain:m,roomName:"capsule1"}},capsule2:{jitsi:{domain:m,roomName:"capsule2"}}},p=Object.keys(d),f=Object(a.createContext)([{},function(){}]),h=function(e){var n=Object(a.useState)([]),t=Object(s.a)(n,2),c=t[0],l=t[1];return r.a.createElement(f.Provider,{value:{currentFloatingSpaces:c,addFloatingSpace:function(e){-1===c.indexOf(e)&&(-1!==p.indexOf(e)&&-1!==c.findIndex((function(e){return-1!==p.indexOf(e)}))?l(c.filter((function(e){return-1===p.indexOf(e)})).concat([e])):l(c.concat([e])))},closeFloatingSpace:function(e){l(c.filter((function(n){return n!==e})))}}},e.children)},g=Object(a.createContext)([{},function(){}]),b=function(e){var n=Object(a.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return r.a.createElement(g.Provider,{value:{currentSpace:c,setSpace:l}},e.children)},v=function(e){var n=e.roomName,t=(e.active,Object(a.useContext)(g)),c=t.currentSpace,l=t.setSpace;return r.a.createElement("span",{className:"click-zone-mobile",onClick:function(){return l(n)}},r.a.createElement("span",{className:"roomFont ".concat(c===n?"active":"")},n))};function E(){var e=Object(i.a)(["\n  height: auto;\n  display: grid;\n  justify-self: center;\n  margin: 0 auto;\n  padding: 0.5rem;\n"]);return E=function(){return e},e}function x(){var e=Object(i.a)(["\n  opacity: 0;\n"]);return x=function(){return e},e}function O(){var e=Object(i.a)([""]);return O=function(){return e},e}var w=window.JitsiMeetExternalAPI,j=u.a.div(O()),k=u.a.div(x()),N=u.a.div(E()),y=function(){var e=Object(a.useContext)(g).currentSpace;return Object(a.useEffect)((function(){var n={roomName:e,height:400,parentNode:document.querySelector("#meet")},t=new w("portal.interspace.chat",n);return function(){t.dispose()}})),r.a.createElement(j,null,""===e?r.a.createElement(k,{id:"meet"}):r.a.createElement(N,{id:"meet"}))};function L(){var e=Object(i.a)(["\n  background: black;\n  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);\n  justify-content: center;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 0.2rem;\n"]);return L=function(){return e},e}function C(){var e=Object(i.a)(["\n  background: black;\n  justify-content: center;\n"]);return C=function(){return e},e}function S(){var e=Object(i.a)(["\n  color: whitesmoke;\n"]);return S=function(){return e},e}function z(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background-color: black;\n  z-index: 1;\n  margin: 0px;\n  font-size: 0.8rem;\n  padding-bottom: 0.4rem;\n  p {\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  a {\n    padding: 0px;\n  }\n"]);return z=function(){return e},e}function _(){var e=Object(i.a)(["\n  text-align: center;\n  padding-top: 1rem;\n  margin: 0 auto;\n  font-size: 1rem;\n  z-index: 100;\n  div {\n    color: violet;\n  }\n"]);return _=function(){return e},e}function F(){var e=Object(i.a)(["\n  padding-bottom: 1rem;\n  width: 100%;\n\n  @media (max-width: 600px) {\n    background-color: black;\n    padding: 0px;\n    min-height: 10vh;\n  }\n"]);return F=function(){return e},e}function M(){var e=Object(i.a)(["\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding: 1rem;\n\n  a {\n    font-weight: 100;\n    color: black;\n    background-color: #00ffbf;\n    text-decoration: underline;\n  }\n\n  @media (max-width: 600px) {\n    background-color: black;\n  }\n"]);return M=function(){return e},e}var A=u.a.h6(M()),Z=u.a.nav(F()),I=u.a.div(_()),T=u.a.div(z()),B=u.a.span(S()),D=u.a.div(C()),W=u.a.div(L()),Y=function(){var e,n=Object(a.useContext)(f),t=n.currentFloatingSpaces,c=n.addFloatingSpace;if(t.length>0)if(t.length>2){var l=t.length;e=t.slice(0,l-2).join(", ")+", "+t.slice(l-2,l).join(" & ")}else e=t.join(" & ");return r.a.createElement(Z,null,r.a.createElement(o.BrowserView,null,r.a.createElement("span",null,r.a.createElement(I,null,e?r.a.createElement(a.Fragment,null,"You're in the"," ",r.a.createElement(B,null,e),"!"):r.a.createElement(a.Fragment,null,r.a.createElement("div",null,"Click on a portal")))),r.a.createElement("div",null,r.a.createElement("div",{className:"m-grid-container"},r.a.createElement("svg",{className:"frame",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"1 1 36 40",id:"svg"},r.a.createElement("g",{id:"shapes"},r.a.createElement("path",{className:"path-hex ",d:"M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z ",id:"octagon"}),r.a.createElement("path",{className:"path-hex ",d:"M 19,5 L 5,29 L 33,29 L 19,5 z ",id:"triange-up"}),r.a.createElement("path",{className:"path-hex ",d:"M 5,13 L 19,37 L 33,13 L 5,13 z ",id:"triange-down"}),r.a.createElement("path",{className:"path-hex inner",d:"M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z ",id:"octagon-inner"}),r.a.createElement("path",{className:"path-hex ",d:"M 12,25 L 19,5 L 26,25 L 12,25 z ",id:"path2894"}),r.a.createElement("path",{className:"path-hex ",d:"M 19,37 L 12,17 L 26,17 L 19,37 z ",id:"path2896"}),r.a.createElement("path",{className:"path-hex ",d:"M 5,13 L 33,29",id:"line-6-3"}),r.a.createElement("path",{className:"path-hex ",d:"M 5,29 L 33,13",id:"line-6-2"}),r.a.createElement("path",{className:"path-hex ",d:"M 19,5 L 19,37",id:"line=-1-3"}),r.a.createElement("path",{className:"path-hex ",d:"M 5,29 L 19,13 L 26,25 L 5,29 z ",id:"path2904"}),r.a.createElement("path",{className:"path-hex ",d:"M 33,29 L 19,13 L 12,25 L 33,29 z ",id:"path2906"}),r.a.createElement("path",{className:"path-hex ",d:"M 33,13 L 12,17 L 19,29 L 33,13 z ",id:"path2908"}),r.a.createElement("path",{className:"path-hex ",d:"M 5,13 L 19,29 L 26,17 L 5,13 z ",id:"path2910"}))),r.a.createElement("div",{id:"c6",className:"circle row-2 c-center click-zone",onClick:function(){return c("discord chat")}},r.a.createElement("span",{className:"roomName"},"Get in line")),r.a.createElement("div",{id:"c7",className:"circle row-3 c-center-right"}),r.a.createElement("div",{id:"c8",className:"circle row-5 c-center-right"}),r.a.createElement("div",{id:"c9",className:"circle row-6 c-center click-zone",onClick:function(){return c("loft.radio")}},r.a.createElement("span",{className:"roomName"},"Enter VR")),r.a.createElement("div",{id:"c10",className:"circle row-5 c-center-left"}),r.a.createElement("div",{id:"c11",className:"circle row-3 c-center-left"}),r.a.createElement("div",{id:"c12",className:"circle row-4 c-center click-zone",onClick:function(){return c("calendar")}},r.a.createElement("span",{className:"roomName"},"Event calendar"))))),r.a.createElement(o.MobileView,null,r.a.createElement(D,null,r.a.createElement(A,null,"Welcome to"," ",r.a.createElement("a",{href:"https://interspace.chat",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"interspace.chat")),r.a.createElement(T,null,r.a.createElement("p",null," Click below to enter the videochat"),r.a.createElement("a",{href:"https://portal.interspace.chat"},"or open a new room")),r.a.createElement(W,null,r.a.createElement(v,{roomName:"capsule1"}),r.a.createElement(v,{roomName:"capsule2"})),r.a.createElement(y,null))))},P=t(5),R=t(10),J=t(16);var V=function(e){var n=e.backgroundColor;return r.a.createElement("iframe",{title:"Interspace loft.radio",src:"https://loft.radio/",style:{height:"100%",width:"100%",border:"0px",backgroundColor:"".concat(n)}})};var G=function(){var e=Object(a.useState)("690315812002988361"),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(a.useContext)(f).currentFloatingSpaces;return Object(a.useEffect)((function(){return l.indexOf("capsule1")>-1?c("692864138447421530"):l.indexOf("capsule2")>-1?c("692864277714829392"):c("690315812002988361"),console.log(t)}),[l,t]),r.a.createElement("iframe",{src:"https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=".concat(t,"&theme=DiscordDark"),width:"100%",height:"100%",frameBorder:"0",title:"discord chat"})};var X=function(){return r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/b/1/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FVienna&src=N3RtbnFxamZtdnB2dGIyNTdycDNlNDkxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aWo1cmVzcGM2bHFpN2Y5ZWVkYmcxZWlkbnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDgzY3RzbjZkZzIydWp0NW9uczlvOHBmcHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bDRxbGtzZDgyZDJhZzFia2ljOHB1NDRxbGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23000000&color=%234285F4&color=%238E24AA&color=%23F4511E&mode=AGENDA",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",title:"calendar"})},H=window.JitsiMeetExternalAPI;function Q(){var e=Object(i.a)(["\n  min-height: 20px;\n  max-width: 100px;\n  color: black;\n  align-self: flex-end;\n  margin-top: 15px;\n"]);return Q=function(){return e},e}function U(){var e=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return U=function(){return e},e}var q={jitsi:{title:"Videochat",component:function(e){var n=e.width,t=e.height,c=e.roomData,l=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e={roomName:c.roomName,width:"100%",height:"100%",parentNode:l.current,interfaceConfigOverwrite:{defaultLanguage:"de",TOOLBAR_ALWAYS_VISIBLE:"true",INITIAL_TOOLBAR_TIMEOUT:2e5,TOOLBAR_BUTTONS:["microphone","camera","closedcaptions","desktop","fullscreen","fodeviceselection","hangup","profile","info","recording","livestreaming","etherpad","sharedvideo","settings","raisehand","videoquality","filmstrip","invite","feedback","stats","shortcuts","tileview","download","help","mute-everyone"]}},n=new H(c.domain,e);return function(){n.dispose()}}),[c,n,t]),r.a.createElement("div",{ref:l,style:{height:"100%"}})}},chat:{title:"chat",component:G}},K=u.a.div(U()),$=u.a.button(Q()),ee=function(e){var n=e.space,t=Object(a.useContext)(f),c=t.currentFloatingSpaces,l=t.addFloatingSpace,o=d[n],i=Object.keys(q).filter((function(e){return Object.keys(o).includes(e)})),u=Object(a.useState)(i[0]),m=Object(s.a)(u,1)[0];if(0===i.length)return r.a.createElement("div",null,"Unknown room");var p=o[m],h=q[m].component;return r.a.createElement(K,null,r.a.createElement(h,{roomData:p}),-1===c.indexOf("discord chat")?r.a.createElement($,{onClick:function(){return l("discord chat")}},"Open Chat"):null)};function ne(){var e=Object(i.a)(['\n  opacity: 0.7;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &::before {\n    content: "\xd7"; // here is your X(cross) sign.\n    color: #fff;\n    font-family: Arial, sans-serif;\n    font-weight: bold;\n    font-size: 30px;\n  }\n']);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  width: 100%;\n  flex: 1;\n"]);return te=function(){return e},e}function ae(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"]);return ae=function(){return e},e}function re(){var e=Object(i.a)(["\n  margin: 0.5rem;\n"]);return re=function(){return e},e}function ce(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ce=function(){return e},e}var le=window.innerWidth/2,oe=window.innerHeight/2,ie=u.a.div(ce()),ue=u.a.div(re()),se=u.a.div(ae()),me=u.a.div(te()),de={padding:"15px",paddingTop:"0px",backgroundColor:"#36393ecc",borderRadius:"10px",cursor:"all-scroll",pointerEvents:"all",boxShadow:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)","&:active iframe":{pointerEvents:"none"}},pe=u.a.div(ne());function fe(e,n){return Object(R.a)({},e,Object(P.a)({},n.key,n.value))}var he=function(){var e=Object(a.useContext)(f),n=e.currentFloatingSpaces,t=e.closeFloatingSpace,c=Object(a.useReducer)(fe,{}),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object.values(o).reduce((function(e,n){return Math.max(e,n)}),1);Object(a.useEffect)((function(){var e=u;n.forEach((function(n){o[n]||i({key:n,value:++e})}))}),[n,u,o]);var m=function(e){var n=20;return("discord chat"===e||"calendar"===e)&&(n=le),n},d=function(e){var n=40;return"discord chat"===e?n=40:"calendar"===e&&(n=oe/2),n};return n.map((function(e){return r.a.createElement(J.a,{key:e,default:{x:m(e),y:d(e),width:le-20,height:oe},style:Object(R.a)({},de,{zIndex:o[e]||1}),onDragStart:function(){return function(e){i({key:e,value:u+1})}(e)}},r.a.createElement(se,null,r.a.createElement(ie,null,r.a.createElement(ue,{onClick:function(){return t(e)}},r.a.createElement(pe,null)),r.a.createElement(ue,null,e),r.a.createElement(ue,null)),r.a.createElement(me,null,function(e){return"loft.radio"===e?r.a.createElement(V,null):p.indexOf(e)>-1?r.a.createElement(ee,{space:e}):"discord chat"===e?r.a.createElement(G,null):"calendar"===e?r.a.createElement(X,null):null===e?null:void 0}(e))))}))},ge=Object(a.createContext)([{},function(){}]),be=function(e){var n=Object(a.useState)("Fellow Spacer"),t=Object(s.a)(n,2),c=t[0],l=t[1];return r.a.createElement(ge.Provider,{value:{user:c,setUsername:l}},e.children)},ve=Object(a.createContext)([{},function(){}]),Ee=function(e){var n=Object(a.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return r.a.createElement(ve.Provider,{value:{currentHouse:c,setHouse:l}},e.children)},xe=function(e){return r.a.createElement(be,null,r.a.createElement(Ee,null,r.a.createElement(h,null,e.children)))},Oe=t(6),we=t.n(Oe),je=t(19),ke=t.n(je),Ne=t(20),ye=t.n(Ne);function Le(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 0.5rem;\n"]);return Le=function(){return e},e}function Ce(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return Se=function(){return e},e}var ze=u.a.nav(Se()),_e=u.a.li(Ce()),Fe=u.a.li(Le()),Me=function(){return r.a.createElement(ze,null,r.a.createElement(we.a,{trigger:"Credits"},r.a.createElement("p",null,"Art used:"),r.a.createElement("ul",null,r.a.createElement(_e,null,'"Metatron Menu" forked from'," ",r.a.createElement("a",{href:"https://github.com/MGrudule/metatron",target:"_blank",rel:"noopener noreferrer"},"@MGrudule")," "),r.a.createElement(_e,null,'"Space Image" by'," ",r.a.createElement("a",{href:"https://www.pexels.com/photo/cluster-of-stars-1341279/",target:"_blank",rel:"noopener noreferrer"},"Kai Pilger from Pexels")," ")),r.a.createElement("hr",null),r.a.createElement("p",null,"Tech used:"),r.a.createElement("ul",null,r.a.createElement(Fe,null,r.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:ye.a,width:"30px",alt:"Jitsi logo"})),r.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},"Video Conferencing - JitSi Open Source")),r.a.createElement(Fe,null,r.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:ke.a,width:"30px",alt:"Titanembeds logo"})),r.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},"Chat integration - Titan Embeds"))),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement(_e,null,"Forked with"," ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc9d")," ","from"," ",r.a.createElement("a",{href:"https://github.com/interspacechat",target:"_blank",rel:"noopener noreferrer"},"interspace.chat")))))};function Ae(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return Ae=function(){return e},e}function Ze(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return Ze=function(){return e},e}var Ie=u.a.nav(Ze()),Te=u.a.li(Ae()),Be=function(){return r.a.createElement(Ie,null,r.a.createElement(we.a,{trigger:"Help"},r.a.createElement("p",null,"General usage:"),r.a.createElement("ul",null,r.a.createElement(Te,null,"This website is making it easy for users to meet in the same rooms to have a video call. ",r.a.createElement("br",null),"We use it for conferences and gatherings"," ")),r.a.createElement("p",null,"Textchat:"),r.a.createElement("ul",null,r.a.createElement(Te,null,"The text chat can be used by registering on our"," ",r.a.createElement("a",{href:"https://discord.gg/YStg9p9",target:"_blank",rel:"noopener noreferrer"},"Discord Server"))),r.a.createElement("hr",null),r.a.createElement("p",null,"Privacy:"),r.a.createElement("ul",null,r.a.createElement(Te,null,"Private Server"),r.a.createElement(Te,null,"Fully end to end encrypted"),r.a.createElement(Te,null,"Please don't write sensitive data into the chats."),r.a.createElement(Te,null,"Please adhere to a general code of conduct or risk banning."))))};function De(){var e=Object(i.a)(["\n  display: flex;\n  width: 100px;\n  text-decoration-line: none;\n  padding-bottom: 2rem;\n"]);return De=function(){return e},e}function We(){var e=Object(i.a)(["\n  align-self: flex-end;\n  margin: 0;\n  font-size: 18px;\n"]);return We=function(){return e},e}function Ye(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0px;\n  left: 20px;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-rows: auto auto;\n  padding: 1rem;\n  justify-items: start;\n\n  :hover {\n    opacity: 1;\n  }\n"]);return Ye=function(){return e},e}var Pe=u.a.div(Ye()),Re=u.a.h2(We()),Je=u.a.a(De()),Ve=function(){return r.a.createElement(Pe,null,r.a.createElement(Je,{href:"/"},r.a.createElement(Re,null,"interspace.chat")),r.a.createElement(Be,null),r.a.createElement(Me,null))};var Ge=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null,r.a.createElement(Ee,null,r.a.createElement(b,null,r.a.createElement(o.BrowserView,null,r.a.createElement(Ve,null)),r.a.createElement(Y,null))),r.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e924849.chunk.js.map