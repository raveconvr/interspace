(this["webpackJsonpinterspace-chat"]=this["webpackJsonpinterspace-chat"]||[]).push([[0],{12:function(e,n,t){},19:function(e,n,t){e.exports=t.p+"static/media/titanembeds.15387e4d.png"},20:function(e,n,t){e.exports=t.p+"static/media/jitsi.ac8e35d6.png"},22:function(e,n,t){e.exports=t(37)},27:function(e,n,t){},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),o=t.n(c),l=(t(27),t(4)),i=(t(29),t(12),t(1)),u=t(2),m=t(3),s={capsule1:{jitsi:{domain:"meet.jit.si",roomName:"LateVoicesNeedPerfectly"}}},d=Object.keys(s),f=Object(r.createContext)([{},function(){}]),p=function(e){var n=Object(r.useState)([]),t=Object(m.a)(n,2),c=t[0],o=t[1];return a.a.createElement(f.Provider,{value:{currentFloatingSpaces:c,addFloatingSpace:function(e){-1===c.indexOf(e)&&(-1!==d.indexOf(e)&&-1!==c.findIndex((function(e){return-1!==d.indexOf(e)}))?o(c.filter((function(e){return-1===d.indexOf(e)})).concat([e])):o(c.concat([e])))},closeFloatingSpace:function(e){o(c.filter((function(n){return n!==e})))}}},e.children)},h=Object(r.createContext)([{},function(){}]),b=function(e){var n=Object(r.useState)(""),t=Object(m.a)(n,2),c=t[0],o=t[1];return a.a.createElement(h.Provider,{value:{currentSpace:c,setSpace:o}},e.children)},g=function(e){var n=e.roomName,t=(e.active,Object(r.useContext)(h)),c=t.currentSpace,o=t.setSpace;return a.a.createElement("span",{className:"click-zone-mobile",onClick:function(){return o(n)}},a.a.createElement("span",{className:"roomFont ".concat(c===n?"active":"")},n))};function v(){var e=Object(i.a)(["\n  height: auto;\n  display: grid;\n  justify-self: center;\n  margin: 0 auto;\n  padding: 0.5rem;\n"]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\n  opacity: 0;\n"]);return E=function(){return e},e}function x(){var e=Object(i.a)([""]);return x=function(){return e},e}var w=window.JitsiMeetExternalAPI,O=u.a.div(x()),j=u.a.div(E()),k=u.a.div(v()),y=function(){var e=Object(r.useContext)(h).currentSpace;return Object(r.useEffect)((function(){var n={roomName:e,height:400,parentNode:document.querySelector("#meet")},t=new w("portal.interspace.chat",n);return function(){t.dispose()}})),a.a.createElement(O,null,""===e?a.a.createElement(j,{id:"meet"}):a.a.createElement(k,{id:"meet"}))};function C(){var e=Object(i.a)(["\n  background: black;\n  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);\n  justify-content: center;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 0.2rem;\n"]);return C=function(){return e},e}function S(){var e=Object(i.a)(["\n  background: black;\n  justify-content: center;\n"]);return S=function(){return e},e}function N(){var e=Object(i.a)(["\n  color: whitesmoke;\n"]);return N=function(){return e},e}function _(){var e=Object(i.a)(["\n  position: absolute;\n  z-index: -1;\n  display: inline-block;\n  border-radius: 50%;\n  top: 10vh;\n  left: 10vw;\n  height: 80vh;\n  width: 80vw;\n  background-color: #bbb;\n  background: rgba(187, 187, 187, 0.7);\n"]);return _=function(){return e},e}function I(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background-color: black;\n  z-index: 1;\n  margin: 0px;\n  font-size: 0.8rem;\n  padding-bottom: 0.4rem;\n  p {\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  a {\n    padding: 0px;\n  }\n"]);return I=function(){return e},e}function F(){var e=Object(i.a)(["\n  text-align: center;\n  padding-top: 1rem;\n  margin: 0 auto;\n  font-size: 1rem;\n  z-index: 100;\n  div {\n    color: violet;\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(i.a)(["\n  padding-bottom: 1rem;\n  width: 100%;\n\n  @media (max-width: 600px) {\n    background-color: black;\n    padding: 0px;\n    min-height: 10vh;\n  }\n"]);return P=function(){return e},e}function T(){var e=Object(i.a)(["\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding: 1rem;\n\n  a {\n    font-weight: 100;\n    color: black;\n    background-color: #00ffbf;\n    text-decoration: underline;\n  }\n\n  @media (max-width: 600px) {\n    background-color: black;\n  }\n"]);return T=function(){return e},e}var z=u.a.h6(T()),B=u.a.nav(P()),A=u.a.div(F()),L=u.a.div(I()),D=u.a.span(_()),M=u.a.span(N()),R=u.a.div(S()),V=u.a.div(C()),H=function(){var e,n=Object(r.useContext)(f),t=n.currentFloatingSpaces,c=n.addFloatingSpace;if(t.length>0)if(t.length>2){var o=t.length;e=t.slice(0,o-2).join(", ")+", "+t.slice(o-2,o).join(" & ")}else e=t.join(" & ");return a.a.createElement(B,null,a.a.createElement(l.BrowserView,null,a.a.createElement("span",null,a.a.createElement(A,null,e?a.a.createElement(r.Fragment,null,"You're in the"," ",a.a.createElement(M,null,e),"!"):a.a.createElement(r.Fragment,null,a.a.createElement("div",null,"Click on a portal")))),a.a.createElement("div",null,a.a.createElement(D,null,a.a.createElement("div",{className:"m-grid-container"},a.a.createElement("div",{id:"c6",className:"circle row-2 c-rectright click-zone",onClick:function(){return c("stream")},style:{backgroundColor:"coral"}},a.a.createElement("span",{className:"roomName"},"Not on the list? Get in line!")),a.a.createElement("div",{id:"c8",className:"circle row-5 c-center-right",style:{backgroundColor:"aquamarine"}},a.a.createElement("span",{className:"roomName"},"Live Cam")),a.a.createElement("div",{id:"c9",className:"circle row-6 c-rectleft click-zone",onClick:function(){return c("hubs")},style:{backgroundColor:"sienna"}},a.a.createElement("span",{className:"roomName"},"Enter VR")),a.a.createElement("div",{id:"c11",onClick:function(){return c("capsule1")},className:"circle row-3 c-center-left",style:{backgroundColor:"cadetblue"}},a.a.createElement("span",{className:"roomName"},"Join the call")),a.a.createElement("div",{id:"c12",className:"circle row-4 c-center click-zone",onClick:function(){return c("stream")}},a.a.createElement("span",{className:"roomName"},"Livestream")))))),a.a.createElement(l.MobileView,null,a.a.createElement(R,null,a.a.createElement(z,null,"Welcome to the party"),a.a.createElement(L,null,a.a.createElement("p",null,"Click below to enter the videochat")),a.a.createElement(V,null,a.a.createElement(g,{roomName:"capsule1"}),a.a.createElement(g,{roomName:"stream"}),a.a.createElement(g,{roomName:"hubs"})),a.a.createElement(y,null))))},J=t(5),W=t(10),U=t(16);var q=function(e){var n=e.width,t=e.height,r=e.roomData;return a.a.createElement("iframe",{title:"Youtube Livestream",width:n,height:t,src:"https://www.youtube-nocookie.com/embed/".concat(r.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})};var G=function(e){var n=e.width,t=e.height,r=e.roomData;return a.a.createElement("iframe",{title:"Hubs Room",src:"https://hubs.mozilla.com/".concat(r.roomId,"?embed_token=").concat(r.embedToken),allow:"microphone; camera; vr; speaker;",width:n,height:t,allowFullScreen:!0},'//frameBorder="0" //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"')},Y=window.JitsiMeetExternalAPI;function K(){var e=Object(i.a)(["\n  min-height: 20px;\n  max-width: 100px;\n  color: black;\n  align-self: flex-end;\n  margin-top: 15px;\n"]);return K=function(){return e},e}function X(){var e=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return X=function(){return e},e}var $={jitsi:{title:"Videochat",component:function(e){var n=e.width,t=e.height,c=e.roomData,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e={roomName:c.roomName,width:"100%",height:"100%",parentNode:o.current,interfaceConfigOverwrite:{defaultLanguage:"de",TOOLBAR_ALWAYS_VISIBLE:"true",INITIAL_TOOLBAR_TIMEOUT:2e5,TOOLBAR_BUTTONS:["microphone","camera","closedcaptions","desktop","fullscreen","fodeviceselection","hangup","profile","info","recording","livestreaming","etherpad","sharedvideo","settings","raisehand","videoquality","filmstrip","invite","feedback","stats","shortcuts","tileview","download","help","mute-everyone"]}},n=new Y(c.domain,e);return function(){n.dispose()}}),[c,n,t]),a.a.createElement("div",{ref:o,style:{height:"100%"}})}},chat:{title:"chat",component:function(){var e=Object(r.useState)("690315812002988361"),n=Object(m.a)(e,2),t=n[0],c=n[1],o=Object(r.useContext)(f).currentFloatingSpaces;return Object(r.useEffect)((function(){return o.indexOf("capsule1")>-1?c("692864138447421530"):o.indexOf("capsule2")>-1?c("692864277714829392"):c("690315812002988361"),console.log(t)}),[o,t]),a.a.createElement("iframe",{src:"https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=".concat(t,"&theme=DiscordDark"),width:"100%",height:"100%",frameBorder:"0",title:"discord chat"})}}},Q=u.a.div(X()),Z=u.a.button(K()),ee=function(e){var n=e.space,t=Object(r.useContext)(f),c=t.currentFloatingSpaces,o=t.addFloatingSpace,l=s[n],i=Object.keys($).filter((function(e){return Object.keys(l).includes(e)})),u=Object(r.useState)(i[0]),d=Object(m.a)(u,1)[0];if(0===i.length)return a.a.createElement("div",null,"Unknown room");var p=l[d],h=$[d].component;return a.a.createElement(Q,null,a.a.createElement(h,{roomData:p}),-1===c.indexOf("discord chat")?a.a.createElement(Z,{onClick:function(){return o("discord chat")}},"Open Chat"):null)};function ne(){var e=Object(i.a)(['\n  opacity: 0.7;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &::before {\n    content: "\xd7"; // here is your X(cross) sign.\n    color: #fff;\n    font-family: Arial, sans-serif;\n    font-weight: bold;\n    font-size: 30px;\n  }\n']);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  width: 100%;\n  flex: 1;\n"]);return te=function(){return e},e}function re(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"]);return re=function(){return e},e}function ae(){var e=Object(i.a)(["\n  margin: 0.5rem;\n"]);return ae=function(){return e},e}function ce(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ce=function(){return e},e}var oe=window.innerWidth/2,le=window.innerHeight/2,ie=u.a.div(ce()),ue=u.a.div(ae()),me=u.a.div(re()),se=u.a.div(te()),de={padding:"15px",paddingTop:"0px",backgroundColor:"#36393ecc",borderRadius:"10px",cursor:"all-scroll",pointerEvents:"all",boxShadow:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)","&:active iframe":{pointerEvents:"none"}},fe=u.a.div(ne());function pe(e,n){return Object(W.a)({},e,Object(J.a)({},n.key,n.value))}var he=function(){var e=Object(r.useContext)(f),n=e.currentFloatingSpaces,t=e.closeFloatingSpace,c=Object(r.useReducer)(pe,{}),o=Object(m.a)(c,2),l=o[0],i=o[1],u=Object.values(l).reduce((function(e,n){return Math.max(e,n)}),1);Object(r.useEffect)((function(){var e=u;n.forEach((function(n){l[n]||i({key:n,value:++e})}))}),[n,u,l]);var s=function(e){var n=20;return("discord chat"===e||"calendar"===e)&&(n=oe),n},p=function(e){var n=40;return"discord chat"===e?n=40:"calendar"===e&&(n=le/2),n};return n.map((function(e){return a.a.createElement(U.a,{key:e,default:{x:s(e),y:p(e),width:oe-20,height:le},style:Object(W.a)({},de,{zIndex:l[e]||1}),onDragStart:function(){return function(e){i({key:e,value:u+1})}(e)}},a.a.createElement(me,null,a.a.createElement(ie,null,a.a.createElement(ue,{onClick:function(){return t(e)}},a.a.createElement(fe,null)),a.a.createElement(ue,null,e),a.a.createElement(ue,null)),a.a.createElement(se,null,function(e){return"stream"===e?a.a.createElement(q,{width:"100%",height:"100%",roomData:{videoId:"MH8a6nhsObg"}}):"hubs"===e?a.a.createElement(G,{width:"100%",height:"100%",roomData:{roomId:"idiCPED/wooden-fine-domain",embedToken:"e3c0173df8f1a7651b8472896b567606"}}):d.indexOf(e)>-1?a.a.createElement(ee,{space:e}):null===e?null:void 0}(e))))}))},be=Object(r.createContext)([{},function(){}]),ge=function(e){var n=Object(r.useState)("Fellow Spacer"),t=Object(m.a)(n,2),c=t[0],o=t[1];return a.a.createElement(be.Provider,{value:{user:c,setUsername:o}},e.children)},ve=Object(r.createContext)([{},function(){}]),Ee=function(e){var n=Object(r.useState)(""),t=Object(m.a)(n,2),c=t[0],o=t[1];return a.a.createElement(ve.Provider,{value:{currentHouse:c,setHouse:o}},e.children)},xe=function(e){return a.a.createElement(ge,null,a.a.createElement(Ee,null,a.a.createElement(p,null,e.children)))},we=t(6),Oe=t.n(we),je=t(19),ke=t.n(je),ye=t(20),Ce=t.n(ye);function Se(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 0.5rem;\n"]);return Se=function(){return e},e}function Ne(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return Ne=function(){return e},e}function _e(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return _e=function(){return e},e}var Ie=u.a.nav(_e()),Fe=u.a.li(Ne()),Pe=u.a.li(Se()),Te=function(){return a.a.createElement(Ie,null,a.a.createElement(Oe.a,{trigger:"Credits"},a.a.createElement("p",null,"Art used:"),a.a.createElement("ul",null,a.a.createElement(Fe,null,'"Metatron Menu" forked from'," ",a.a.createElement("a",{href:"https://github.com/MGrudule/metatron",target:"_blank",rel:"noopener noreferrer"},"@MGrudule")," "),a.a.createElement(Fe,null,'"Space Image" by'," ",a.a.createElement("a",{href:"https://www.pexels.com/photo/cluster-of-stars-1341279/",target:"_blank",rel:"noopener noreferrer"},"Kai Pilger from Pexels")," ")),a.a.createElement("hr",null),a.a.createElement("p",null,"Tech used:"),a.a.createElement("ul",null,a.a.createElement(Pe,null,a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:Ce.a,width:"30px",alt:"Jitsi logo"})),a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},"Video Conferencing - JitSi Open Source")),a.a.createElement(Pe,null,a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:ke.a,width:"30px",alt:"Titanembeds logo"})),a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},"Chat integration - Titan Embeds"))),a.a.createElement("hr",null),a.a.createElement("ul",null,a.a.createElement(Fe,null,"Forked with"," ",a.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc9d")," ","from"," ",a.a.createElement("a",{href:"https://github.com/interspacechat",target:"_blank",rel:"noopener noreferrer"},"interspace.chat")))))};function ze(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return ze=function(){return e},e}function Be(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return Be=function(){return e},e}var Ae=u.a.nav(Be()),Le=u.a.li(ze()),De=function(){return a.a.createElement(Ae,null,a.a.createElement(Oe.a,{trigger:"Help"},a.a.createElement("p",null,"Heads up!"),a.a.createElement("ul",null,a.a.createElement(Le,null,"By default, you are muted when entering any room.",a.a.createElement("br",null),a.a.createElement("br",null),"For a smoother experience, we recommend that you close all non-essential apps and browser tabs.",a.a.createElement("br",null),a.a.createElement("br",null),"Having sound issues in VR? Try switching your audio output on the welcome screen to internal speakers."," ")),a.a.createElement("hr",null),a.a.createElement("p",null,"Privacy:"),a.a.createElement("ul",null,a.a.createElement(Le,null,"Private Server"),a.a.createElement(Le,null,"Fully end to end encrypted"),a.a.createElement(Le,null,"Please don't write sensitive data into the chats."),a.a.createElement(Le,null,"Please adhere to a general code of conduct or risk banning."))))};function Me(){var e=Object(i.a)(["\n  display: flex;\n  width: 100px;\n  text-decoration-line: none;\n  padding-bottom: 2rem;\n"]);return Me=function(){return e},e}function Re(){var e=Object(i.a)(["\n  align-self: flex-end;\n  margin: 0;\n  font-size: 18px;\n"]);return Re=function(){return e},e}function Ve(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0px;\n  left: 20px;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-rows: auto auto;\n  padding: 1rem;\n  justify-items: start;\n\n  :hover {\n    opacity: 1;\n  }\n"]);return Ve=function(){return e},e}var He=u.a.div(Ve()),Je=u.a.h2(Re()),We=u.a.a(Me()),Ue=function(){return a.a.createElement(He,null,a.a.createElement(We,{href:"/"},a.a.createElement(Je,null,"Solarpunk VR Party")),a.a.createElement(De,null),a.a.createElement(Te,null))};var qe=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(xe,null,a.a.createElement(Ee,null,a.a.createElement(b,null,a.a.createElement(l.BrowserView,null,a.a.createElement(Ue,null)),a.a.createElement(H,null))),a.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.25f3ee85.chunk.js.map