"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[450],{70369:(e,n,t)=>{t.d(n,{$:()=>r.$});var r=t(22578)},86964:(e,n,t)=>{t.d(n,{c:()=>C});var r=t(59713),l=t.n(r),o=(t(26699),t(32023),t(74916),t(15306),t(23157),t(21249),t(57327),t(41539),t(68309),t(82526),t(41817),t(47941),t(38880),t(89554),t(54747),t(49337),t(33321),t(69070),t(67294)),a=t.n(o),i=t(54543),c=t(18686),u=t(42922),s=t(37146),m=t(21794),f=t(28760),d=t(44794),v=t(44503),g=t(67892);const p="EPMDgp7znILo0hvyirzv",b="noUm6pjQ6KWq7mVxYDor",y="PqnKjxzJ1Zvr9qKRlRbO",E="uuBQS9Ym_VPmAQrLhPQb";var h=function(e){return(0,d.W6)(v.sE)?a().createElement(g.Z,{to:e.uri,target:"_blank",className:p},a().createElement("div",{className:b}),a().createElement(f.Dy,{className:y,as:"h2",variant:"alto"},e.label),a().createElement(f.Dy,{className:E,as:"p",variant:"mesto"},e.tagline)):null},w=function(e){return a().createElement(o.Suspense,{fallback:null},a().createElement(h,e))},O=t(5001),k=t(1150);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function(e){var n;return null===(n=e.id)||void 0===n?void 0:n.startsWith("scc-corona")},C=function(e){var n=e.spaces,t=e.viewName,r=e.viewId,l=e.isAnonymous,f=(0,o.useCallback)((function(e,n){var t=function(e,n){var t=e.uri;return e.href.includes("https://api.spotify.com/v1/views/")&&(t=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),t=(0,s.$)(t),"hub-browse-grid"===n&&(t=t.replace(":view:",":genre:"))),t}(e,r);return a().createElement(i.q,{key:e.href,index:n,entity:j(j({},e),{},{uri:t})})}),[r]),d=(0,o.useCallback)((function(e,n){return a().createElement(u.JL,{key:e.uri||n,value:"card",index:n},a().createElement(i.q,{index:n,entity:e}))}),[]),v=(0,o.useCallback)((function(e,n){return"link"===e.type?f(e,n):d(e,n)}),[d,f]),g=(0,o.useCallback)((function(e){return!!D(e)||!(function(e){return"HEADER"===e.rendering}(e)||0===e.content.total||l&&"uniquely-yours-shelf"===e.id)}),[l]);return n&&0!==n.length?n[0].content?a().createElement(a().Fragment,null,n.filter(g).map((function(e,n){var t=e.content&&(0,m.p)((0,m.S)(e.href));if(e.id===k.RECENTLY_PLAYED_VIEW_ID||e.id===O.uK)return a().createElement(u.JL,{value:"headered-grid",index:n,key:e.id},a().createElement(k.RecentlyPlayed,{showAll:!1,index:n}));if(D(e)){var l=e.content.items[0];return l&&l.name&&l.description&&l.href?a().createElement(w,{label:l.name,tagline:l.description,uri:l.href}):null}return a().createElement(u.JL,{value:"headered-grid",index:n,key:e.id},a().createElement(c.q,{total:e.content.total,seeAllUri:t,pageId:r,title:e.name,tagline:e.tag_line||void 0,index:n,id:e.id},e.content.items.map(v)))}))):a().createElement(u.JL,{value:"headered-grid"},a().createElement(c.q,{showAll:!0,title:t,total:(null==n?void 0:n.length)||0,index:0,id:null!=r?r:"spaces-see-all-grid"},null==n?void 0:n.map(v))):null}},71479:(e,n,t)=>{t.r(n),t.d(n,{DISALLOWED_VIEWS:()=>N,View:()=>L,default:()=>S});var r=t(59713),l=t.n(r),o=(t(57327),t(41539),t(68309),t(5212),t(26699),t(32023),t(79753),t(74916),t(4723),t(27852),t(67294)),a=t.n(o),i=t(94184),c=t.n(i),u=t(65858),s=t(16528),m=t(20657),f=t(51574),d=t(33241),v=t(31595),g=t(21794),p=t(35808),b=t(70369),y=t(42273),E=t(59482),h=t(72907),w=t(1663),O=t(86964),k=t(94321),P=t(29255);const j="XD65NhAD6ebYxMaW9cZZ",D="AJqEY1gblQDvIgjU0jAH",C="Ft1cMGlqDsCbqmXQyeKN",A="zlBEnsMyvUhuHSEtst4Q";var x=function(e){return"HEADER"===e.rendering},I=function(e){var n=e.title,t=e.images,r=e.backgroundColor;return a().createElement(a().Fragment,null,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;if(!e)return null;var r=n.filter((function(e){return"background"===e.name}));return a().createElement(y.gF,{backgroundImages:r,backgroundColor:t,size:0===r.length?y.fR.SMALL:y.fR.DEFAULT},a().createElement(E.W,null,a().createElement(h.i,{text:e})),a().createElement(y.sP,null,a().createElement(y.xd,null,e)))}(n,t,r))},N=["ginger-genre-affinity"],L=a().memo((function(e){var n=e.viewData,t=e.viewId,r=e.backgroundColor,i=e.isFullyLoaded,u=e.country,g=e.isGenre,p=e.isAnonymous,E=e.getNextPage,h=e.refreshContents,k=(0,s.k6)(),P=!!n,L=null==n?void 0:n.name;(0,o.useEffect)((function(){u&&"POP"!==k.action&&t&&h()}),[u,t,k.action,P,h]);var S=(0,o.useCallback)((function(){return N.some((function(e){var t;return null==n||null===(t=n.href)||void 0===t?void 0:t.includes(e)}))}),[n]),_=(0,o.useCallback)((function(){if(n){var e=S();i||e||E()}}),[n,S,i,E]),q=(0,o.useMemo)((function(){var e=(n||{}).content,t=(e=void 0===e?{}:e).items,r=(void 0===t?[]:t).filter(x);return r.length>0?r[0]:null}),[n]),M=(0,o.useMemo)((function(){var e=(n||{}).name;return q?q.name:r&&e}),[r,q,n]),W=(0,o.useMemo)((function(){return g||Boolean(M)}),[g,M]),F=(0,o.useMemo)((function(){return!(!n||!Array.isArray(n.content.items))&&W}),[W,n]),R=(0,y.oX)(t)?a().createElement(y.YD,{isAnonymous:p}):a().createElement(I,{title:(null==q?void 0:q.name)||M,images:(null==q?void 0:q.images)||[],backgroundColor:r}),V=null==n?void 0:n.content.items;return n?a().createElement(a().Fragment,null,L?a().createElement(b.$,null,L):null,a().createElement(d.C,{onReachBottom:_},a().createElement("section",{className:c()(l()({},j,(null==q?void 0:q.name)||M))},F&&a().createElement(v.H,{color:r||null}),W&&R,a().createElement("div",{className:C},W&&R&&a().createElement(f.I,{backgroundColor:r}),a().createElement("div",{className:c()(D,"contentSpacing",l()({},A,g))},a().createElement(O.c,{spaces:V,viewName:n.name,viewId:t,isAnonymous:p})))))):a().createElement(w.h,{hasError:!1,errorMessage:m.ag.get("error.not_found.title.page")})}));const S=a().memo((function(e){var n=e.viewId,t=e.match,r=n||t.params.viewId,l=(0,u.v9)(P.Gg).isAnonymous,o=(0,u.v9)(k.rZ),i=(0,p.P)(r),c=i.view,s=i.getNextPage,m=i.refreshContents,f=!c||null===c.content.next,d=r.endsWith("-page")?r:"".concat(r,"-page"),v=(0,u.v9)((function(e){var n,t;return(null===(n=e.browse.allItemsStyle)||void 0===n||null===(t=n[d])||void 0===t?void 0:t.color)||""})),b=function(e){return e.viewId===r||"href"in e&&e.href===(0,g.p)(r)},y=(0,u.v9)((function(e){var n,t,r,l;return(null==e||null===(n=e.browse)||void 0===n||null===(t=n.browseAll)||void 0===t?void 0:t.items.some(b))||(null==e||null===(r=e.browse)||void 0===r||null===(l=r.topGenres)||void 0===l?void 0:l.items.some(b))||!!v}));return a().createElement(L,{viewData:c,isFullyLoaded:f,viewId:r,backgroundColor:v,country:o,isGenre:y,isAnonymous:l,getNextPage:s,refreshContents:m})}))},35808:(e,n,t)=>{t.d(n,{P:()=>p});t(47941),t(82526),t(57327),t(41539),t(38880),t(89554),t(54747),t(49337),t(33321),t(69070);var r=t(59713),l=t.n(r),o=t(63038),a=t.n(o),i=t(94321),c=t(29255),u=t(67294),s=t(65858),m=t(43088),f=t(44794),d=t(8247);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=(0,m.n)(),t=(0,u.useState)((function(){return n.getViewFromCache(e)})),r=a()(t,2),l=r[0],o=r[1],v=(0,f.W6)(d.Xf),p=(0,s.v9)(i.rZ),b=(0,s.v9)(c.Gg),y=b.locale,E=b.overrides,h=(null==E?void 0:E.country)||p,w=(null==E?void 0:E.locale)||y;return(0,u.useEffect)((function(){n.getView(e,g({country:h,locale:w},v&&{extraTypes:["uri_link"]})).then((function(e){o(e)}))}),[h,w,e,n,v]),{view:l,getNextPage:(0,u.useCallback)((function(){n.getMore(e).then((function(e){e&&o(e)}))}),[e,n]),refreshContents:(0,u.useCallback)((function(){n.getView(e,g({country:h,locale:w,ignoreCache:!0},v&&{extraTypes:["uri_link"]})).then((function(e){o(e)}))}),[h,w,e,n,v])}}}}]);
//# sourceMappingURL=xpui-routes-view.js.map