(this["webpackJsonpinterspace-chat"]=this["webpackJsonpinterspace-chat"]||[]).push([[0],{12:function(e,n,t){},19:function(e,n,t){e.exports=t.p+"static/media/titanembeds.15387e4d.png"},20:function(e,n,t){e.exports=t.p+"static/media/jitsi.ac8e35d6.png"},22:function(e,n,t){e.exports=t(37)},27:function(e,n,t){},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),l=t.n(c),i=(t(27),t(4)),o=(t(29),t(12),t(1)),u=t(2),s=t(3),m={capsule1:{jitsi:{domain:"meet.jit.si",roomName:"LateVoicesNeedPerfectly"}}},d=Object.keys(m),f=Object(r.createContext)([{},function(){}]),p=function(e){var n=Object(r.useState)([]),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(f.Provider,{value:{currentFloatingSpaces:c,addFloatingSpace:function(e){-1===c.indexOf(e)&&(-1!==d.indexOf(e)&&-1!==c.findIndex((function(e){return-1!==d.indexOf(e)}))?l(c.filter((function(e){return-1===d.indexOf(e)})).concat([e])):l(c.concat([e])))},closeFloatingSpace:function(e){l(c.filter((function(n){return n!==e})))}}},e.children)},h=Object(r.createContext)([{},function(){}]),b=function(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(h.Provider,{value:{currentSpace:c,setSpace:l}},e.children)},g=function(e){var n=e.roomName,t=(e.active,Object(r.useContext)(h)),c=t.currentSpace,l=t.setSpace;return a.a.createElement("span",{className:"click-zone-mobile",onClick:function(){return l(n)}},a.a.createElement("span",{className:"roomFont ".concat(c===n?"active":"")},"Join the Party"))};function v(){var e=Object(o.a)(["\n  height: auto;\n  display: grid;\n  justify-self: center;\n  margin: 0 auto;\n  padding: 0.5rem;\n"]);return v=function(){return e},e}function E(){var e=Object(o.a)(["\n  opacity: 0;\n"]);return E=function(){return e},e}function x(){var e=Object(o.a)([""]);return x=function(){return e},e}var w=window.JitsiMeetExternalAPI,O=u.a.div(x()),j=u.a.div(E()),k=u.a.div(v()),y=function(){var e=Object(r.useContext)(h).currentSpace;return Object(r.useEffect)((function(){var n={roomName:e,height:400,parentNode:document.querySelector("#meet")},t=new w("meet.jit.si",n);return function(){t.dispose()}})),a.a.createElement(O,null,""===e?a.a.createElement(j,{id:"meet"}):a.a.createElement(k,{id:"meet"}))};function S(){var e=Object(o.a)(["\n  background: black;\n  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);\n  justify-content: center;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 0.2rem;\n"]);return S=function(){return e},e}function C(){var e=Object(o.a)(["\n  background: black;\n  justify-content: center;\n"]);return C=function(){return e},e}function _(){var e=Object(o.a)(["\n  color: whitesmoke;\n"]);return _=function(){return e},e}function F(){var e=Object(o.a)(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background-color: black;\n  z-index: 1;\n  margin: 0px;\n  font-size: 0.8rem;\n  padding-bottom: 0.4rem;\n  p {\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  a {\n    padding: 0px;\n  }\n"]);return F=function(){return e},e}function N(){var e=Object(o.a)(["\n  text-align: center;\n  padding-top: 1rem;\n  margin: 0 auto;\n  font-size: 1rem;\n  z-index: 100;\n  div {\n    color: violet;\n  }\n"]);return N=function(){return e},e}function I(){var e=Object(o.a)(["\n  padding-bottom: 1rem;\n  width: 100%;\n\n  @media (max-width: 600px) {\n    background-color: black;\n    padding: 0px;\n    min-height: 10vh;\n  }\n"]);return I=function(){return e},e}function P(){var e=Object(o.a)(["\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding: 1rem;\n\n  a {\n    font-weight: 100;\n    color: black;\n    background-color: #00ffbf;\n    text-decoration: underline;\n  }\n\n  @media (max-width: 600px) {\n    background-color: black;\n  }\n"]);return P=function(){return e},e}var z=u.a.h6(P()),T=u.a.nav(I()),V=u.a.div(N()),R=(u.a.div(F()),u.a.span(_())),B=u.a.div(C()),A=u.a.div(S()),L=function(){var e,n=Object(r.useContext)(f),t=n.currentFloatingSpaces,c=n.addFloatingSpace;if(t.length>0)if(t.length>2){var l=t.length;e=t.slice(0,l-2).join(", ")+", "+t.slice(l-2,l).join(" & ")}else e=t.join(" & ");return a.a.createElement(T,null,a.a.createElement(i.BrowserView,null,a.a.createElement("span",null,a.a.createElement(V,null,e?a.a.createElement(r.Fragment,null,"You're in the"," ",a.a.createElement(R,null,e),"!"):a.a.createElement(r.Fragment,null,a.a.createElement("div",null,"Click on a portal")))),a.a.createElement("div",null,a.a.createElement("div",{className:"m-grid-container"},a.a.createElement("div",{id:"c6",onClick:function(){return window.open("https://t.me/joinchat/EMsE7FeR9UjWW8V1ELRi7g")},className:"circle row-2 c-rectright click-zone"},"Get in line for a VR entry code",a.a.createElement("p",null,"{Telegram}")),a.a.createElement("div",{id:"c8",className:"circle row-5 c-center-right",onClick:function(){return c("stream")}},"Watch on Your Own",a.a.createElement("p",null,"{DJ Stream}")),a.a.createElement("div",{id:"c9",onClick:function(){return window.open("https://hubs.mozilla.com/link/")},className:"circle row-6 c-rectleft click-zone"},"Enter VR",a.a.createElement("p",null,"{Code required! Works in browser.}")),a.a.createElement("div",{id:"c11",onClick:function(){return c("capsule1")},className:"circle row-3 c-center-left"},"Watch with Others",a.a.createElement("p",null,"{Jitsi}"))))),a.a.createElement(i.MobileView,null,a.a.createElement(B,null,a.a.createElement(z,null,"This site is not mobile-optimized. Please visit on a laptop or desktop browser."),a.a.createElement(A,null,a.a.createElement(g,{roomName:"LateVoicesNeedPerfectly"})),a.a.createElement(y,null))))},M=t(5),W=t(10),J=t(16);var D=function(e){var n=e.width,t=e.height,r=e.roomData;return a.a.createElement("iframe",{title:"Youtube Livestream",width:n,height:t,src:"https://www.youtube-nocookie.com/embed/".concat(r.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},U=window.JitsiMeetExternalAPI;function H(){var e=Object(o.a)(["\n  min-height: 20px;\n  max-width: 100px;\n  color: black;\n  align-self: flex-end;\n  margin-top: 15px;\n"]);return H=function(){return e},e}function Y(){var e=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return Y=function(){return e},e}var q={jitsi:{title:"Videochat",component:function(e){var n=e.width,t=e.height,c=e.roomData,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e={roomName:c.roomName,width:"100%",height:"100%",parentNode:l.current,interfaceConfigOverwrite:{defaultLanguage:"de",TOOLBAR_ALWAYS_VISIBLE:"true",INITIAL_TOOLBAR_TIMEOUT:2e5,TOOLBAR_BUTTONS:["microphone","camera","closedcaptions","desktop","fullscreen","fodeviceselection","hangup","profile","info","recording","livestreaming","etherpad","sharedvideo","settings","raisehand","videoquality","filmstrip","invite","feedback","stats","shortcuts","tileview","download","help","mute-everyone"]}},n=new U(c.domain,e);return function(){n.dispose()}}),[c,n,t]),a.a.createElement("div",{ref:l,style:{height:"100%"}})}},chat:{title:"chat",component:function(){var e=Object(r.useState)("690315812002988361"),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(r.useContext)(f).currentFloatingSpaces;return Object(r.useEffect)((function(){return l.indexOf("capsule1")>-1?c("692864138447421530"):l.indexOf("capsule2")>-1?c("692864277714829392"):c("690315812002988361"),console.log(t)}),[l,t]),a.a.createElement("iframe",{src:"https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=".concat(t,"&theme=DiscordDark"),width:"100%",height:"100%",frameBorder:"0",title:"discord chat"})}}},G=u.a.div(Y()),K=(u.a.button(H()),function(e){var n=e.space,t=m[n],c=Object.keys(q).filter((function(e){return Object.keys(t).includes(e)})),l=Object(r.useState)(c[0]),i=Object(s.a)(l,1)[0];if(0===c.length)return a.a.createElement("div",null,"Unknown room");var o=t[i],u=q[i].component;return a.a.createElement(G,null,a.a.createElement(u,{roomData:o}))});function X(){var e=Object(o.a)(['\n  opacity: 0.7;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &::before {\n    content: "\xd7"; // here is your X(cross) sign.\n    color: #fff;\n    font-family: Arial, sans-serif;\n    font-weight: bold;\n    font-size: 30px;\n  }\n']);return X=function(){return e},e}function $(){var e=Object(o.a)(["\n  width: 100%;\n  flex: 1;\n"]);return $=function(){return e},e}function Q(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"]);return Q=function(){return e},e}function Z(){var e=Object(o.a)(["\n  margin: 0.5rem;\n"]);return Z=function(){return e},e}function ee(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ee=function(){return e},e}var ne=window.innerWidth/2,te=window.innerHeight/2,re=u.a.div(ee()),ae=u.a.div(Z()),ce=u.a.div(Q()),le=u.a.div($()),ie={padding:"15px",paddingTop:"0px",backgroundColor:"#36393ecc",borderRadius:"10px",cursor:"all-scroll",pointerEvents:"all",boxShadow:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)","&:active iframe":{pointerEvents:"none"}},oe=u.a.div(X());function ue(e,n){return Object(W.a)({},e,Object(M.a)({},n.key,n.value))}var se=function(){var e=Object(r.useContext)(f),n=e.currentFloatingSpaces,t=e.closeFloatingSpace,c=Object(r.useReducer)(ue,{}),l=Object(s.a)(c,2),i=l[0],o=l[1],u=Object.values(i).reduce((function(e,n){return Math.max(e,n)}),1);Object(r.useEffect)((function(){var e=u;n.forEach((function(n){i[n]||o({key:n,value:++e})}))}),[n,u,i]);var m=function(e){var n=20;return("discord chat"===e||"calendar"===e)&&(n=ne),n},p=function(e){var n=40;return"discord chat"===e?n=40:"calendar"===e&&(n=te/2),n};return n.map((function(e){return a.a.createElement(J.a,{key:e,default:{x:m(e),y:p(e),width:ne-20,height:te},style:Object(W.a)({},ie,{zIndex:i[e]||1}),onDragStart:function(){return function(e){o({key:e,value:u+1})}(e)}},a.a.createElement(ce,null,a.a.createElement(re,null,a.a.createElement(ae,{onClick:function(){return t(e)}},a.a.createElement(oe,null)),a.a.createElement(ae,null,e),a.a.createElement(ae,null)),a.a.createElement(le,null,function(e){return"stream"===e?a.a.createElement(D,{width:"100%",height:"100%",roomData:{videoId:"fa3Ivg_U3U0"}}):d.indexOf(e)>-1?a.a.createElement(K,{space:e}):null===e?null:void 0}(e))))}))},me=Object(r.createContext)([{},function(){}]),de=function(e){var n=Object(r.useState)("Fellow Spacer"),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(me.Provider,{value:{user:c,setUsername:l}},e.children)},fe=Object(r.createContext)([{},function(){}]),pe=function(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(fe.Provider,{value:{currentHouse:c,setHouse:l}},e.children)},he=function(e){return a.a.createElement(de,null,a.a.createElement(pe,null,a.a.createElement(p,null,e.children)))},be=t(6),ge=t.n(be),ve=t(19),Ee=t.n(ve),xe=t(20),we=t.n(xe);function Oe(){var e=Object(o.a)(["\n  list-style-type: none;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 0.5rem;\n"]);return Oe=function(){return e},e}function je(){var e=Object(o.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return je=function(){return e},e}function ke(){var e=Object(o.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return ke=function(){return e},e}var ye=u.a.nav(ke()),Se=u.a.li(je()),Ce=u.a.li(Oe()),_e=function(){return a.a.createElement(ye,null,a.a.createElement(ge.a,{trigger:"Credits"},a.a.createElement("p",null,"Art used:"),a.a.createElement("ul",null,a.a.createElement(Se,null,'"Metatron Menu" forked from'," ",a.a.createElement("a",{href:"https://github.com/MGrudule/metatron",target:"_blank",rel:"noopener noreferrer"},"@MGrudule")," "),a.a.createElement(Se,null,'"Space Image" by'," ",a.a.createElement("a",{href:"https://www.pexels.com/photo/cluster-of-stars-1341279/",target:"_blank",rel:"noopener noreferrer"},"Kai Pilger from Pexels")," ")),a.a.createElement("hr",null),a.a.createElement("p",null,"Tech used:"),a.a.createElement("ul",null,a.a.createElement(Ce,null,a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:we.a,width:"30px",alt:"Jitsi logo"})),a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},"Video Conferencing - JitSi Open Source")),a.a.createElement(Ce,null,a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:Ee.a,width:"30px",alt:"Titanembeds logo"})),a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},"Chat integration - Titan Embeds"))),a.a.createElement("hr",null),a.a.createElement("ul",null,a.a.createElement(Se,null,"Forked with"," ",a.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc9d")," ","from"," ",a.a.createElement("a",{href:"https://github.com/interspacechat",target:"_blank",rel:"noopener noreferrer"},"interspace.chat")))))};function Fe(){var e=Object(o.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(o.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return Ne=function(){return e},e}var Ie=u.a.nav(Ne()),Pe=u.a.li(Fe()),ze=function(){return a.a.createElement(Ie,null,a.a.createElement(ge.a,{trigger:"Help"},a.a.createElement("p",null,"Heads up!"),a.a.createElement("ul",null,a.a.createElement(Pe,null,"For a smoother experience, we recommend that you close all non-essential apps and browser tabs.",a.a.createElement("br",null),a.a.createElement("br",null),"We recommend viewing VR in full screen.",a.a.createElement("br",null),a.a.createElement("br",null),"By default, you are muted when entering any room.",a.a.createElement("br",null),a.a.createElement("br",null),"Having sound issues in VR? Try switching your audio output on the welcome screen to internal speakers.",a.a.createElement("br",null),a.a.createElement("br",null),"This is experimental.",a.a.createElement("br",null),a.a.createElement("br",null),"VR may cause dizziness.",a.a.createElement("br",null),a.a.createElement("br",null),"For VR headset viewing, must be viewed in Firefox with Firefox running off your discrete graphics card. Please note, some headsets have limited support."," ")),a.a.createElement("hr",null),a.a.createElement("p",null,"Privacy:"),a.a.createElement("ul",null,a.a.createElement(Pe,null,"Private Server"),a.a.createElement(Pe,null,"Fully end to end encrypted"),a.a.createElement(Pe,null,"Please don't write sensitive data into the chats."),a.a.createElement(Pe,null,"Please adhere to a general code of conduct or risk banning."))))};function Te(){var e=Object(o.a)(["\n  display: flex;\n  width: 100px;\n  text-decoration-line: none;\n  padding-bottom: 2rem;\n"]);return Te=function(){return e},e}function Ve(){var e=Object(o.a)(["\n  align-self: flex-end;\n  margin: 0;\n  font-size: 18px;\n"]);return Ve=function(){return e},e}function Re(){var e=Object(o.a)(["\n  position: fixed;\n  z-index: 999;\n  top: 0px;\n  left: 20px;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-rows: auto auto;\n  padding: 1rem;\n  justify-items: start;\n\n  :hover {\n    opacity: 1;\n  }\n"]);return Re=function(){return e},e}var Be=u.a.div(Re()),Ae=u.a.h2(Ve()),Le=u.a.a(Te()),Me=function(){return a.a.createElement(Be,null,a.a.createElement(Le,{href:"https://raveconvr.github.io/interspace/"},a.a.createElement(Ae,null,"Solarpunk VR Party")),a.a.createElement(ze,null),a.a.createElement(_e,null))};var We=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(he,null,a.a.createElement(pe,null,a.a.createElement(b,null,a.a.createElement(i.BrowserView,null,a.a.createElement(Me,null)),a.a.createElement(L,null))),a.a.createElement(se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.18b5ccc3.chunk.js.map