"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[59,396],{87581:(e,r,n)=>{n.d(r,{Q:()=>u});var t=n(67154),o=n.n(t),s=n(67294),i=n.n(s),a=n(94184),c=n.n(a);const p="_pMNGOs2KBLWGpGmunYI";function u(e){return i().createElement("section",o()({},e,{className:c()(p,e.className)}))}},14784:(e,r,n)=>{n.r(r),n.d(r,{ALL_EPISODE_SPONSORS_TESTID:()=>O,AllEpisodeSponsors:()=>b,allEpisodeSponsorsPath:()=>v.e,default:()=>E});var t=n(67154),o=n.n(t),s=n(67294),i=n.n(s),a=n(16528),c=n(46886),p=n(28975),u=n(87581),d=n(77186);var f=n(88396),l=n(99922),v=n(61737),O="all-episode-sponsors";function b(e){var r=e.EpisodeSponsorsWrapper,n=void 0===r?f.EpisodeSponsorsWrapper:r,t=(0,a.UO)()[p.hd],s=(0,d.P)(),v=(0,l.o)();return s.location.state?i().createElement(u.Q,{"data-testid":O},i().createElement(n,o()({},v,{numberOfSponsorsToDisplay:1/0,reason:"Episode page See All"}))):i().createElement(c.AP,{to:(0,p.lc)(t)})}const E=b},88396:(e,r,n)=>{n.r(r),n.d(r,{EPISODE_SPONSORS_SHELF_TESTID:()=>T,EpisodeSponsorsWrapper:()=>I,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>_,default:()=>B});var t=n(67154),o=n.n(t),s=n(59713),i=n.n(s),a=(n(66992),n(41539),n(88674),n(78783),n(33948),n(47941),n(82526),n(57327),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070),n(67294)),c=n.n(a),p=n(63038),u=n.n(p),d=n(48926),f=n.n(d),l=n(87757),v=n.n(l);n(21249),n(92222),n(47042);var O=(0,a.lazy)((function(){return Promise.all([n.e(814),n.e(258)]).then(n.bind(n,87258))}));function b(e){var r=e.fetchedEpisodeSponsorsData,t=e.fireTrackingEvent,s=e.numberOfSponsorsToDisplay,i=e.firedViewedEvents,p=e.version,d=e.reason,l=e.uri,b=function(e){var r=e.fetchedEpisodeSponsorsData,n=e.numberOfSponsorsToDisplay;return(0,a.useMemo)((function(){return{displayedEpisodeSponsorsData:r.slice(0,n)}}),[r,n])}({fetchedEpisodeSponsorsData:r,numberOfSponsorsToDisplay:s}),E=b.displayedEpisodeSponsorsData,S=(0,a.useMemo)((function(){return E.map((function(e,r){return c().createElement(O,o()({key:"".concat(e.metadata.lineitem_id,"-").concat(r),fireTrackingEvent:t,firedViewedEvents:i,version:p,onClick:function(){var e=f()(v().mark((function e(){var t,o,s,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.resolve().then(n.bind(n,24872)),n.e(814).then(n.bind(n,1486))]);case 2:return t=e.sent,o=u()(t,2),s=o[0].getEventSenderInstance,i=o[1].createPodcastAdCtaCardEvent,e.abrupt("return",s().send(i({uri:l,reason:d,lineitem_id:E.map((function(e){return e.metadata.lineitemId})),ui_navigate:E.map((function(e,n){var t=e.clickthrough;return r===n?t:""})),navigate_to_external_uri:E.map((function(e,n){return r===n}))})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},e))}))}),[E,t,i,p,d,l]);return{displayedEpisodeSponsorsData:E,displayedSponsors:S}}var E=n(69518),S=n.n(E);var y=n(16528);var m=n(18693);n(70189);function h(e){var r,n=e.firedViewedEvents,t=(0,a.useRef)();return{firedViewedEvents:t.current=null!==(r=null!=n?n:t.current)&&void 0!==r?r:new Set}}function D(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?D(Object(n),!0).forEach((function(r){i()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function g(e){var r=e.uri,n=e.getEpisodeSponsors,t=e.fireTrackingEvent,o=e.numberOfSponsorsToDisplay,s=e.version,i=e.reason,c=(0,y.TH)().state,p=function(e){var r=e.uri,n=e.episodeBase62Id;return{episodeBase62Id:(0,a.useMemo)((function(){var e;return n||(null===(e=S().from(r))||void 0===e?void 0:e.getBase62Id())}),[r,n])}}(P(P({},c),{},{uri:r})),u=p.episodeBase62Id,d=(0,m.m)(P(P({},c),{},{episodeBase62Id:u,getEpisodeSponsors:n,version:s})).fetchedEpisodeSponsorsData,f=h(P({},c)).firedViewedEvents;return P(P({uri:r,episodeBase62Id:u,fetchedEpisodeSponsorsData:d},b({fetchedEpisodeSponsorsData:d,fireTrackingEvent:t,numberOfSponsorsToDisplay:o,firedViewedEvents:f,version:s,reason:i,uri:r})),{},{firedViewedEvents:f,reason:i})}function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function j(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){i()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var k=(0,a.lazy)((function(){return n.e(479).then(n.bind(n,27479))})),T="episode-sponsors-shelf",_="see-all-episode-sponsors";function I(e){var r,n={numberOfSponsorsToDisplay:void 0===(r=e.numberOfSponsorsToDisplay)?3:r}.numberOfSponsorsToDisplay,t=g(j(j({},e),{},{numberOfSponsorsToDisplay:n}));return t.episodeBase62Id&&t.displayedSponsors.length?c().createElement(a.Suspense,{fallback:!0},c().createElement(k,o()({},e,{numberOfSponsorsToDisplay:n,state:t}))):null}const B=I},18693:(e,r,n)=>{n.d(r,{F:()=>f,m:()=>l});var t=n(48926),o=n.n(t),s=n(63038),i=n.n(s),a=n(87757),c=n.n(a),p=(n(66992),n(41539),n(88674),n(78783),n(33948),n(67294)),u=n(64005),d=n(31604),f=420;function l(e){var r=e.episodeBase62Id,t=e.getEpisodeSponsors,s=e.fetchedEpisodeSponsorsData,a=void 0===s?[]:s,l=e.version,v=(0,p.useState)(a),O=i()(v,2),b=O[0],E=O[1],S=(0,p.useCallback)(o()(c().mark((function e(){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==t){e.next=7;break}e.t0=t,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(n.bind(n,11401));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return o=e.t0,e.t1=E,e.next=14,o(r,{version:l});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),E([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[r,t,l]),y=(0,u.y)(S,f);return(0,p.useEffect)((function(){a.length||y()}),[y,a.length]),(0,d.H)(y),{fetchedEpisodeSponsorsData:b}}},99922:(e,r,n)=>{n.d(r,{o:()=>s});var t=n(44794),o=n(44503);function s(){return{version:(0,t.W6)(o.GE)?2:1}}},31604:(e,r,n)=>{n.d(r,{H:()=>p});n(32564);var t=n(67294),o=n(44794),s=n(44503),i=n(40080),a=n(8341),c=n(89952);function p(e){var r=(0,o.W6)(s.oF),n=(0,a.Y)((function(e){var r,n,t=null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0;return(0,c.k6)(t)&&t.isPodcastAd&&null!==(n=t.id)&&void 0!==n?n:void 0})),p=(0,i.D)(n);(0,t.useEffect)((function(){n!==p&&Boolean(n)&&setTimeout(e,r)}),[e,n,p,r])}},77186:(e,r,n)=>{n.d(r,{P:()=>p});n(47941),n(82526),n(57327),n(41539),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070);var t=n(59713),o=n.n(t),s=n(67294),i=n(16528);function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(){var e=(0,i.k6)(),r=e.listen,n=e.location;return(0,s.useEffect)((function(){return r((function(e,r){"POP"===r&&(e.state=c(c(c({},void 0),n.state),e.state))}))})),e}},40080:(e,r,n)=>{n.d(r,{D:()=>o});var t=n(67294);function o(e){var r=(0,t.useRef)();return(0,t.useEffect)((function(){r.current=e}),[e]),r.current}}}]);
//# sourceMappingURL=xpui-routes-all-episode-sponsors.js.map