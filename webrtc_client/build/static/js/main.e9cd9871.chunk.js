(this.webpackJsonpwebrtc_client=this.webpackJsonpwebrtc_client||[]).push([[0],{123:function(e,t,n){},130:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c,a=n(0),o=n.n(a),i=n(44),r=n.n(i),s=(n(123),n(10)),l=(n(141),n(16)),d=n(17),u=n(104),h=new(function(){function e(){Object(l.a)(this,e),this.logMessage="",this.logMessage=""}return Object(d.a)(e,[{key:"addLogMessage",value:function(e,t){this.logMessage+="[".concat(t,"]:").concat(e)}},{key:"getLogMessage",value:function(){return this.logMessage}}]),e}()),f=n(32),v=n.n(f),j=n(52),g=new(function(){function e(){Object(l.a)(this,e),this.localStream=null,this.remoteStream=null,this.localStreamChangeListeners=[],this.remoteStreamChangeListeners=[]}return Object(d.a)(e,[{key:"requestPermission",value:function(){var e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(e,t){var n=this;e&&t?navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:e}},audio:{deviceId:{exact:t}}}).then((function(e){n.localStream=e,n.localStreamChangeListeners.forEach((function(t){return t(e)}))})).catch((function(e){console.error("get stream error !!!",e)})):this.resetLocalStream()}},{key:"addListener",value:function(e,t){"localStreamChange"===e?(this.localStreamChangeListeners.push(t),this.localStream&&t(this.localStream)):"remoteStreamChange"===e&&(this.remoteStreamChangeListeners.push(t),this.remoteStream&&t(this.remoteStream))}},{key:"removeListener",value:function(e,t){if("localStreamChange"===e){var n=this.localStreamChangeListeners.indexOf(t);n>-1&&this.localStreamChangeListeners.splice(n,1)}else if("remoteStreamChange"===e){var c=this.remoteStreamChangeListeners.indexOf(t);c>-1&&this.remoteStreamChangeListeners.splice(c,1)}}},{key:"getLocalStream",value:function(){return this.localStream}},{key:"resetLocalStream",value:function(){var e=this;this.localStream=null,this.localStreamChangeListeners.forEach((function(t){t(e.localStream)}))}},{key:"resetRemoteStream",value:function(){var e=this;this.remoteStream=null,this.remoteStreamChangeListeners.forEach((function(t){t(e.remoteStream)}))}},{key:"addTrackToRemoteStream",value:function(e){var t=this;this.remoteStream?this.remoteStream.addTrack(e):this.remoteStream=new MediaStream([e]),this.remoteStreamChangeListeners.forEach((function(e){e(t.remoteStream)}))}}]),e}()),b=function(){function e(){var t,n=this;Object(l.a)(this,e),this.connection=void 0,this.rtcMessage="",this.connection=new RTCPeerConnection({iceServers:[{urls:"turn:xulin.fun:3478",username:"aaaaaa",credential:"bbbbbb"}],iceTransportPolicy:"relay",iceCandidatePoolSize:0}),this.connection.addEventListener("icecandidate",(function(e){var t;console.log("icecandidate: ".concat(e.candidate)),h.addLogMessage("icecandidate: ".concat(e.candidate,"\n"),"rtc"),m.sendMessage({type:"icecandidate",candidate:null===(t=e.candidate)||void 0===t?void 0:t.toJSON()})})),this.connection.addEventListener("track",(function(e){console.log("track",e),h.addLogMessage("track: ".concat(e),"rtc"),g.addTrackToRemoteStream(e.track)})),this.connection.addEventListener("iceconnectionstatechange",(function(e){console.log("iceconnectionstatechange --\x3e",n.connection.iceConnectionState),h.addLogMessage("iceconnectionstatechange --\x3e".concat(n.connection.iceConnectionState,"\n"),"rtc")})),this.connection.addEventListener("icegatheringstatechange",(function(){console.log("icegatheringstatechange ---\x3e",n.connection.iceGatheringState),h.addLogMessage("icegatheringstatechange ---\x3e".concat(n.connection.iceGatheringState,"\n"),"rtc")})),null===(t=g.getLocalStream())||void 0===t||t.getTracks().forEach((function(e){console.log("add local track ---\x3e",e.label),h.addLogMessage("add local track ---\x3e".concat(e.label,"\n"),"rtc"),n.connection.addTrack(e)}))}return Object(d.a)(e,[{key:"createOffer",value:function(){var e=Object(j.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connection.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!0});case 2:return t=e.sent,console.log("createOffer ---\x3e",t),h.addLogMessage("createOffer ---\x3e".concat(t,"\n"),"rtc"),this.connection.setLocalDescription(t).then((function(){console.log("LocalDescription is set"),h.addLogMessage("LocalDescription is set\n","rtc")})),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRemoteOffer",value:function(){var e=Object(j.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.connection.setRemoteDescription(t).then((function(){console.log("RemoteDescription is set"),h.addLogMessage("RemoteDescription is set\n","rtc")})),e.next=3,this.connection.createAnswer({offerToReceiveAudio:!0,offerToReceiveVideo:!0});case 3:return n=e.sent,this.connection.setLocalDescription(n).then((function(){console.log("LocalDescription is set"),h.addLogMessage("LocalDescription is set\n","rtc")})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setRemoteAnswer",value:function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connection.setRemoteDescription(t);case 2:console.log("RemoteDescription is set"),h.addLogMessage("RemoteDescription is set\n","rtc");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addCandidate",value:function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connection.addIceCandidate(t);case 2:h.addLogMessage("IceCandidate added\n","rtc"),console.log("IceCandidate added");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMessage",value:function(){return this.rtcMessage}},{key:"close",value:function(){g.resetRemoteStream(),this.connection.close()}}]),e}();!function(e){e.leave="leave",e.joined="joined",e.joined_conn="joined_conn"}(c||(c={}));var m=new(function(){function e(){Object(l.a)(this,e),this.roomId=void 0,this.socket=void 0,this.roomState=c.leave,this.rtcManager=void 0,this.roomStateChangeListeners=[]}return Object(d.a)(e,[{key:"setState",value:function(e){this.roomState=e,this.roomStateChangeListeners.forEach((function(t){return t(e)}))}},{key:"socketConnect",value:function(){var e=this;this.socketDisconnect(),this.socket=Object(u.a)("socket.xulin.fun"),this.socket.on("joined",(function(t,n,a){h.addLogMessage("receive joined message: ".concat(t," ").concat(n," ").concat(a,"\n"),"room"),console.log("receive joined message: ".concat(t," ").concat(n," ").concat(a)),e.roomId=t,e.setState(c.joined),a>1&&(e.rtcManager=new b)})),this.socket.on("other_join",(function(t,n,c){console.log("receive other_join message",t,n,c),e.rtcManager||(e.rtcManager=new b),e.rtcManager.createOffer().then((function(t){e.sendMessage(t)}))})),this.socket.on("full",(function(){var t;e.socketDisconnect(),null===(t=e.rtcManager)||void 0===t||t.close(),e.rtcManager=void 0,alert("\u623f\u95f4\u5df2\u6ee1\uff01")})),this.socket.on("left",(function(){e.setState(c.leave),e.socketDisconnect()})),this.socket.on("bye",(function(){var t;e.setState(c.leave),null===(t=e.rtcManager)||void 0===t||t.close(),e.rtcManager=void 0})),this.socket.on("message",(function(t,n){var c,a;switch(console.log("received message ---\x3e",n),null===n||void 0===n?void 0:n.type){case"offer":null===(c=e.rtcManager)||void 0===c||c.setRemoteOffer(n).then((function(t){e.sendMessage(t)}));break;case"answer":null===(a=e.rtcManager)||void 0===a||a.setRemoteAnswer(n);break;case"icecandidate":var o;if(n.candidate)null===(o=e.rtcManager)||void 0===o||o.addCandidate(n.candidate);else console.log("this is the end of candidate");break;default:console.error("can not handle message",n)}}))}},{key:"sendMessage",value:function(e){var t;console.log("sendMessage",this.roomId,e),null===(t=this.socket)||void 0===t||t.emit("message",this.roomId,e)}},{key:"socketDisconnect",value:function(){this.socket&&(this.socket.disconnect(),this.socket=void 0)}},{key:"join",value:function(e){var t;this.socketConnect(),null===(t=this.socket)||void 0===t||t.emit("join",e)}},{key:"left",value:function(){var e,t;null===(e=this.socket)||void 0===e||e.emit("leave",this.roomId),null===(t=this.rtcManager)||void 0===t||t.close(),this.rtcManager=void 0}},{key:"addListener",value:function(e,t){"roomStateChange"===e&&this.roomStateChangeListeners.push(t)}},{key:"removeListener",value:function(e,t){if("roomStateChange"===e){var n=this.roomStateChangeListeners.indexOf(t);n>-1&&this.roomStateChangeListeners.splice(n,1)}}}]),e}()),O=n(4),x=n(205),S=(n(130),n(2)),p=Object(O.a)(x.a)({position:"absolute",left:"calc(50% - 20px)",top:"calc(50% - 20px)"}),k=function(e){var t=e.videoRef,n=e.loading;return Object(S.jsxs)("div",{className:"live-player-container",children:[n&&Object(S.jsx)(p,{}),Object(S.jsx)("video",{ref:t,autoPlay:!0,muted:!0})]})},C=(n(136),function(e){var t=e.videoSelected,n=void 0===t?"":t,c=e.audioSelected,o=void 0===c?"":c,i=Object(a.useRef)(null),r=Object(a.useState)(!0),l=Object(s.a)(r,2),d=l[0],u=l[1];return Object(a.useEffect)((function(){var e=function(e){i.current&&(i.current.srcObject=e,u(!1)),e||u(!0)};return g.addListener("localStreamChange",e),function(){g.removeListener("localStreamChange",e)}}),[]),Object(a.useEffect)((function(){g.start(n,o)}),[n,o]),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{children:"local preview:"}),Object(S.jsx)(k,{videoRef:i,loading:d})]})}),L=(n(137),function(e){e.className;var t=Object(a.useRef)(null),n=Object(a.useState)(!0),c=Object(s.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var e=function(e){t.current&&(t.current.srcObject=e,i(!1)),e||i(!0)};return g.addListener("remoteStreamChange",e),function(){g.removeListener("remoteStreamChange",e)}}),[]),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{children:"remote video:"}),Object(S.jsx)(k,{videoRef:t,loading:o})]})}),M=n(47),y=n(200),w=n(178),D=n(179),R=Object(a.createContext)({toggleColorMode:function(){}}),E=function(){var e=Object(M.a)(),t=Object(a.useContext)(R);return Object(S.jsx)(y.a,{sx:{ml:1},onClick:t.toggleColorMode,color:"inherit",children:"dark"===e.palette.mode?Object(S.jsx)(w.a,{}):Object(S.jsx)(D.a,{})})},I=n(180),T=n(196),A=n(181),G=n(195),P=n(207),z=n(192),N=n(184),V=n(197),q=function(e){var t=e.videoDevices,n=e.audioDevices,c=e.videoSelected,a=e.audioSelected,o=e.onVideoSelect,i=e.onAudioSelect,r=e.onReset;return Object(S.jsxs)(I.a,{children:[Object(S.jsxs)(T.a,{children:[Object(S.jsx)(A.a,{children:"Video Device Selector"}),Object(S.jsx)(G.a,{onChange:o,children:t.map((function(e){return Object(S.jsx)(P.a,{value:e.deviceId,control:Object(S.jsx)(z.a,{checked:e.deviceId===c}),label:e.label},e.deviceId)}))})]}),Object(S.jsx)(N.a,{}),Object(S.jsxs)(T.a,{children:[Object(S.jsx)(A.a,{children:"Audio Device Selector"}),Object(S.jsx)(G.a,{onChange:i,children:n.map((function(e){return Object(S.jsx)(P.a,{value:e.deviceId,control:Object(S.jsx)(z.a,{checked:e.deviceId===a}),label:e.label},e.deviceId)}))})]}),Object(S.jsx)(V.a,{onClick:r,children:"Reset"})]})},_=n(204),W=n(201),F=n(208),H=n(206),B=n(202),J=n(102),U=n(194),K=n(185),Q=n(66),X=[{text:"OneOnOne",link:"/one-on-one"}],Y=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=function(){c(null)};return Object(S.jsx)(_.a,{position:"relative",color:"inherit",sx:{maxHeight:"64px",boxSizing:"border-box"},children:Object(S.jsx)(W.a,{maxWidth:"xl",children:Object(S.jsxs)(F.a,{disableGutters:!0,children:[Object(S.jsx)(H.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"LOGO"}),Object(S.jsxs)(B.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(S.jsx)(y.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(S.jsx)(K.a,{})}),Object(S.jsx)(J.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:o,sx:{display:{xs:"block",md:"none"}},children:X.map((function(e){return Object(S.jsx)(U.a,{onClick:o,children:Object(S.jsx)(Q.b,{to:e.link,children:Object(S.jsx)(H.a,{textAlign:"center",children:e.text})})},e.text)}))})]}),Object(S.jsx)(H.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"LOGO"}),Object(S.jsx)(B.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:X.map((function(e){return Object(S.jsx)(Q.b,{to:e.link,children:Object(S.jsx)(V.a,{onClick:o,sx:{my:2,color:"text.primary",display:"block"},children:e.text})},e.text)}))}),Object(S.jsx)(B.a,{sx:{flexGrow:0},children:Object(S.jsx)(E,{})})]})})})},Z=n(190),$=function(e){var t=e.enterDisabled,n=e.leaveDisabled,c=Object(a.useState)(0),o=Object(s.a)(c,2),i=o[0],r=o[1],l=Object(a.useCallback)((function(e){r(Number(e.target.value)||0)}),[]),d=Object(a.useCallback)((function(){m.join(i)}),[i]),u=Object(a.useCallback)((function(){m.left()}),[]);return Object(S.jsxs)("div",{className:"room-setting",children:[Object(S.jsx)(Z.a,{required:!0,id:"outlined-required",label:"RoomId",value:i,fullWidth:!0,onChange:l,size:"small"}),Object(S.jsxs)("div",{children:[Object(S.jsx)(V.a,{variant:"contained",onClick:d,disabled:t,children:"Enter Room"}),Object(S.jsx)(V.a,{variant:"outlined",color:"error",onClick:u,disabled:n,children:"Leave Room"})]})]})},ee=(n(139),n(199)),te=n(203),ne=n(189),ce=Object(ne.a)(te.a)((function(e){var t=e.theme;return{color:t.palette.text.secondary,lineHeight:"60px",padding:t.spacing(2),margin:t.spacing(1),boxSizing:"border-box"}})),ae=function(){var e=Object(a.useState)(h.getLogMessage()),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return e=window.setInterval((function(){var e=h.getLogMessage();if(e!==n){var t;c(e);var a=null===(t=o.current)||void 0===t?void 0:t.querySelector("[rows='30']");a&&(a.scrollTop=a.scrollHeight)}}),1e3),function(){e&&window.clearInterval(e)}})),Object(S.jsx)(Z.a,{ref:o,fullWidth:!0,label:"Logger",multiline:!0,disabled:!0,value:n,rows:30,sx:{overflow:"auto"}})},oe=function(){var e=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(e){c(!!e)};return g.addListener("localStreamChange",e),function(){g.removeListener("localStreamChange",e)}}),[]),{localStreamReady:n}}().localStreamReady,t=function(){var e=Object(a.useState)(c.leave),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=function(e){o(e)};return m.addListener("roomStateChange",e),function(){m.removeListener("roomStateChange",e)}}),[]),{roomState:n}}().roomState,n=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(s.a)(o,2),r=i[0],l=i[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),h=u[0],f=u[1],v=Object(a.useState)(""),j=Object(s.a)(v,2),b=j[0],m=j[1],O=Object(a.useCallback)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){c(e.filter((function(e){return"videoinput"===e.kind}))),l(e.filter((function(e){return"audioinput"===e.kind})))}))}),[]);return Object(a.useEffect)((function(){return g.requestPermission().then((function(){O()})).catch((function(e){console.error("request permission error !!!",e)})),navigator.mediaDevices.addEventListener("devicechange",O),function(){navigator.mediaDevices.removeEventListener("devicechange",O)}}),[O]),{videoSelected:h,audioSelected:b,videoDevices:n,audioDevices:r,handleVideoSelect:Object(a.useCallback)((function(e){e.target.value&&f(e.target.value)}),[]),handleAudioSelect:Object(a.useCallback)((function(e){e.target.value&&m(e.target.value)}),[]),handleReset:Object(a.useCallback)((function(){f(""),m("")}),[])}}(),o=n.videoSelected,i=n.audioSelected,r=n.videoDevices,l=n.audioDevices,d=n.handleVideoSelect,u=n.handleAudioSelect,h=n.handleReset;return Object(S.jsxs)(ee.a,{container:!0,padding:1,style:{height:"calc(100% - 64px)"},children:[Object(S.jsxs)(ee.a,{item:!0,xs:3,children:[Object(S.jsx)(ce,{elevation:8,children:Object(S.jsx)(q,{videoDevices:r,onVideoSelect:d,audioDevices:l,onAudioSelect:u,videoSelected:o,audioSelected:i,onReset:h})}),Object(S.jsx)(ce,{elevation:8,children:Object(S.jsx)($,{enterDisabled:!e||t!==c.leave,leaveDisabled:t===c.leave})})]}),Object(S.jsx)(ee.a,{item:!0,xs:!0,sx:{height:"100%"},children:Object(S.jsxs)(ce,{elevation:8,children:[Object(S.jsx)(C,{videoSelected:o,audioSelected:i}),Object(S.jsx)(L,{})]})}),Object(S.jsx)(ee.a,{item:!0,xs:3,sx:{height:"100%",maxHeight:"100%"},children:Object(S.jsx)(ce,{elevation:8,children:Object(S.jsx)(ae,{})})})]})},ie=n(14),re=n(103),se=n(198),le=function(){var e=Object(a.useState)("dark"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useMemo)((function(){return{toggleColorMode:function(){c((function(e){return"light"===e?"dark":"light"}))}}}),[]),i=Object(a.useMemo)((function(){return Object(re.a)({palette:{mode:n}})}),[n]);return Object(S.jsx)(Q.a,{children:Object(S.jsx)(R.Provider,{value:o,children:Object(S.jsx)(se.a,{theme:i,children:Object(S.jsxs)(B.a,{sx:{bgcolor:"background.default",height:"100vh",overflow:"auto"},children:[Object(S.jsx)(Y,{}),Object(S.jsx)(ie.c,{children:Object(S.jsx)(ie.a,{path:"/one-on-one",element:Object(S.jsx)(oe,{})})})]})})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(le,{})}),document.getElementById("root")),de()}},[[140,1,2]]]);
//# sourceMappingURL=main.e9cd9871.chunk.js.map