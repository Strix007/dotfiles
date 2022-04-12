"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[179,342],{85917:(e,n,t)=>{t.d(n,{k:()=>u});var a=t(63038),i=t.n(a),l=(t(68309),t(67294)),r=t.n(l),c=t(28760),d=t(20657),o=t(42922),s=t(28248);const m="nUpwbkL4Yaj31N0emCvb";var u=function(e){var n=e.nrTracks,t=e.initialTracks,a=e.usePlayContextItem,u=(0,l.useState)(!1),k=i()(u,2),v=k[0],S=k[1],p=(0,l.useCallback)((function(){S(!v)}),[v]),E=(0,l.useCallback)((function(e,n){var t=e.uri,i=e.contextUri,l=e.totalMilliseconds,c=e.name,d=e.artists,o=e.contentRating,m=e.isPlayable,u=e.playcount,k=e.imageUrl,v=e.albumUri;return r().createElement(s.l0,{key:t,index:n,uri:t,contextUri:i,totalMilliseconds:l,name:c,artists:d,isPlayable:m,contentRating:o,playcount:u||0,imageUrl:k,albumUri:v,usePlayContextItem:a})}),[a]),N=(0,l.useCallback)((function(e){return e.uri}),[]),g=(0,l.useMemo)((function(){return[s.QD.INDEX,s.QD.TITLE,s.QD.PLAYS,s.QD.DURATION]}),[]);return r().createElement(o.ZP,{value:"artist-popular-tracks-list"},r().createElement(s.Pv,{ariaLabel:d.ag.get("tracklist.popular-tracks"),renderRow:E,nrTracks:Math.min(n,v?10:5),tracks:t,resolveUri:N,columns:g}),n>5?r().createElement("button",{"aria-expanded":v,className:m,onClick:p},r().createElement(c.Dy,{as:"div",variant:"minuetBold"},v?d.ag.get("artist-page.tracks.showless"):d.ag.get("artist-page.tracks.seemore"))):null)}},75864:(e,n,t)=>{t.r(n),t.d(n,{Track:()=>Zn,default:()=>Tn});var a,i=t(48926),l=t.n(i),r=t(63038),c=t.n(r),d=t(87757),o=t.n(d),s=(t(68309),t(21249),t(92222),t(69600),t(47042),t(67294)),m=t.n(s),u=t(65858),k=t(16528),v=t(69518),S=t.n(v),p=t(20657),E=t(30947),N=t(11414),g=t(55911),y=t(32626),f=t(94233),b=t(63926),h=t(28760),I=(t(47941),t(82526),t(57327),t(41539),t(38880),t(89554),t(54747),t(49337),t(33321),t(69070),t(59713)),F=t.n(I),A=t(18172);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){F()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(a||(a={}));var C=(0,A.ZP)((function(e,n){switch(n.type){case"LYRICS_LOADING":e[n.uri]={status:a.LOADING};break;case"LYRICS_LOADED":e[n.uri]={status:a.LOADED,data:{lyrics:_({},n.response.lyrics)}};break;case"LYRICS_ERROR":e[n.uri]={status:a.UNAVAILABLE};break;default:throw new Error("Unhandled lyrics action with type: ".concat(n.type))}})),O=t(80624),Z=t(19719),T=function(){var e=l()(o().mark((function e(n){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S().from(n),e.next=3,Z.Zz.getSEOTrackLyrics(O.b.getInstance(),t.getBase62Id());case 3:return a=e.sent,e.abrupt("return",a.body);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R={status:a.LOADING},D={status:a.UNAVAILABLE},w=m().createContext(void 0),U=function(e){var n=e.children,t=e.initialState,a=void 0===t?{}:t,i=m().useReducer(C,a);return m().createElement(w.Provider,{value:i,children:n})},P=function(e,n){var t=m().useContext(w);if(void 0===t)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!S().isTrack(e)||n)return D;var a=c()(t,2),i=a[0],l=a[1],r=i[e];return r||(l({type:"LYRICS_LOADING",uri:e}),T(e).then((function(n){l({type:"LYRICS_LOADED",uri:e,response:n})})).catch((function(){l({type:"LYRICS_ERROR",uri:e})})),R)};const x="_WZNTY8cs6JMVcAp9j8A",j="br3AcUgf2WazXovcTr0L";var B,V,M=function(e){var n=e.padded;return m().createElement(h.Dy,{as:"p",dir:"auto",variant:"finale",className:"".concat(x," ").concat(n?j:"")},"Lyrics powered by Musixmatch.")},Q=function(e){var n=e.uri;return P(n).status!==a.LOADED?null:m().createElement(M,null)},Y=t(4383),H=t(84242),G=t(55773),z=t(16526);!function(e){e.UNAUTH_LYRICS="track-lyrics-unauth-1.0"}(B||(B={})),function(e){e.CONTROL="0",e.UNAUTH_LYRICS="1",e.RTP_HOLDOUT="2"}(V||(V={}));var W=function(e,n,t){if(e&&e[n]){var a=e[n];return a.experimentId===B.UNAUTH_LYRICS&&a.treatment===t}return!1},J=t(56802),K=t(80322),q=t(4236),X=t(29255),$=(0,t(20573).P1)((function(e){return e.seoExperiment}),(function(e){return null==e?void 0:e.track})),ee=t(90110),ne=t(95661),te=t(86213),ae=t(70369),ie=t(42273),le=t(59482),re=t(72907),ce=t(1663),de=t(55120),oe=t(44137),se=t(67154),me=t.n(se);const ue="JtmUDerSLCaN8LuQv9tM",ke="mQtVA857h95uvEmY9SPP",ve="bObO_7Z_b1atmqMnYiU2",Se="vHqxBD3S0NJpGMsVRwHT",pe="pxMz7QGxCF9LYKHJzOlY",Ee="PTVcqp5lumB25L7FY7ai",Ne="DqqPRJJPXjVNE52h_cPt";var ge,ye=t(78688),fe=t(48528),be=t(94184),he=t.n(be),Ie=t(44887),Fe=t(42781),Ae=t(7469);!function(e){e.SMALL="small",e.LARGE="large"}(ge||(ge={}));var Le=function(e){var n,t=e.art,a=e.disabled,i=void 0!==a&&a,l=e.LinkComponent,r=e.name,c=e.size,d=void 0===c?ge.SMALL:c,o=e.type,s=e.uri,u=t?[t]:[],v=d===ge.SMALL?(0,fe.R)(o):function(e){switch(e){case ye.albumType.SINGLE:return p.ag.get("track-page.from-the-single");case ye.albumType.EP:return p.ag.get("track-page.from-the-ep");case ye.albumType.COMPILATION:return p.ag.get("track-page.from-the-compilation");case ye.albumType.ALBUM:default:return p.ag.get("track-page.from-the-album")}}(o),E=(0,k.k6)();return m().createElement("div",{className:he()(ue,(n={},F()(n,ve,d===ge.SMALL),F()(n,ke,i),n))},m().createElement("div",{className:Se},m().createElement(Ie.O,{images:u,size:Ae.m$.SIZE_80,title:r,type:Fe.p.ALBUM})),m().createElement("div",{className:pe},m().createElement(h.Dy,{variant:d===ge.SMALL?"minuetBold":"finale"},v),m().createElement(l,{to:s},m().createElement(h.Dy,{as:"div",className:Ee,variant:"balladBold",dir:"auto"},r))),m().createElement("div",{onClick:function(){E.push(S().from(s).toURLPath(!0))},className:Ne}))},_e=t(42922),Ce=t(7073),Oe=t(85917),Ze=t(42811),Te=t(13768),Re=t(67892),De=t(19480),we=t(319),Ue=t.n(we),Pe=t(98984),xe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackFields"}}]}}]}}].concat(Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}},{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}},{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTracks"}}]}}]}}]}}]}}]}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumGroupPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}}]}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"topTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTrack"}}]}}]}}]}}]),Ue()([{kind:"FragmentDefinition",name:{kind:"Name",value:"topTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"previews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"audioPreviews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]))},je=(t(66992),t(78783),t(33948),t(41637),t(74916),t(64765),t(77392)),Be=t(75987),Ve=t(41734);const Me=function(e){var n,t=e.richTrack,a=(0,k.k6)(),i=(0,s.useCallback)((function(){return new URLSearchParams(a.location.search.slice(1)).get("highlight")||""}),[a.location.search])(),l=(0,Be.W)().tracklistRef,r=t.album,c=(0,K.Y)(r.uri),d=(0,H.n)({uri:c},{featureIdentifier:"album"}).usePlayContextItem,o=(0,s.useMemo)((function(){return{items:[],total_count:0}}),[]);return r?m().createElement("div",{ref:l,className:Ve.Z.tracklist},m().createElement(je.AlbumTrackList,{ariaLabel:r.name,nrTracks:null===(n=r.tracks)||void 0===n?void 0:n.totalCount,albumUri:r.uri,highlightUri:i,discs:o,usePlayContextItem:d,hasHeaderRow:!1})):null};var Qe=t(68569);const Ye="NyTgQLBMbP0S3tKSRCs9",He="hCOVAZTJWusN_w2vFlHb",Ge="GKrQF4Y14e5YsTYK4Shj",ze="dBS838bk0cna4pcQ9Q0I",We="Vfjpe8Q1SyjkZMeqnA5a",Je="iyOEFMEyp7ZcRdlxIZo5";var Ke=function(e){var n=e.album,t=e.index,a=e.artistURI;return m().createElement(_e.JL,{value:"card",index:t,key:n.uri},m().createElement(Te.i,me()({index:t,latest:!1,showType:!0},(0,Ze.B$)(n,a,n.name))))},qe=function(e){var n,t=e.richTrack.artistsWithRoles.items[0].artist,a=S().artistURI(t.id).toURI(),i=null===(n=t.discography)||void 0===n?void 0:n.singles;return i?m().createElement(_e.JL,{value:"shelf/singles-and-eps"},m().createElement(De.P,{total:i.totalCount,title:p.ag.get("track-page.popular-singles-and-eps-by-artist",{artist:t.profile.name}),seeAllUri:"".concat((0,Ze.GJ)(t.id),":discography:").concat(Ce.VZ.Single.toLowerCase()),seeAllLabel:p.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:Qe.Z.artistShelfSpacer},(0,Ze.Hr)(i.items).map((function(e,n){return m().createElement(Ke,{album:e,index:n,artistURI:a})})))):null},Xe=function(e){var n,t=e.richTrack,a=t.artistsWithRoles.items[0].artist,i=S().artistURI(a.id).toURI(),l=null===(n=t.artistsWithRoles.items[0].artist.discography)||void 0===n?void 0:n.albums;return l?m().createElement(_e.JL,{value:"shelf/albums"},m().createElement(De.P,{total:l.totalCount,title:p.ag.get("track-page.popular-albums-by-artist",{artist:a.profile.name}),seeAllUri:"".concat((0,Ze.GJ)(a.id),":discography:").concat(Ce.VZ.Album.toLowerCase()),seeAllLabel:p.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:Qe.Z.artistShelfSpacer},(0,Ze.Hr)(l.items).map((function(e,n){return m().createElement(Ke,{album:e,index:n,artistURI:i})})))):null},$e=function(e){var n,t=e.richTrack.artistsWithRoles.items[0].artist,a=S().artistURI(t.id).toURI(),i=null===(n=t.discography)||void 0===n?void 0:n.popularReleasesAlbums;return i?m().createElement(_e.JL,{value:"shelf/releases"},m().createElement(De.P,{total:10,title:p.ag.get("track-page.popular-releases-by-artist",{artist:t.profile.name}),seeAllUri:"".concat((0,Ze.GJ)(t.id),":discography:").concat(Ce.VZ.Album.toLowerCase()),seeAllLabel:p.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:Qe.Z.artistShelfSpacer},i.items.map((function(e,n){return m().createElement(Ke,{album:e,index:n,artistURI:a})})))):null},en=function(e){var n,t=e.richTrack,a=t.artistsWithRoles.items[0].artist,i=null===(n=a.discography)||void 0===n?void 0:n.topTracks,l=(0,s.useMemo)((function(){return null==i?void 0:i.items.map((function(e){return(0,Ze.X7)(e,t.uri)}))}),[i,t]),r=(0,H.n)({uri:a.uri},{featureIdentifier:"artist"}).usePlayContextItem;return l?m().createElement("div",{className:We},m().createElement("div",null,m().createElement(h.Dy,{variant:"mesto"},p.ag.get("track-page.popular-tracks")),m().createElement(h.Dy,{as:"h2",variant:"canon",semanticColor:"textBase",className:Qe.Z.heading},a.profile.name)),m().createElement(Oe.k,{nrTracks:l.length,initialTracks:l,usePlayContextItem:r})):null};const nn=m().memo((function(){var e,n,t,a,i=(0,k.UO)().trackId,l=S().trackURI(i).toURI(),r=(t={uri:l},(0,Pe.a)(xe,t,a)),c=(0,q.k)();if(r.loading||null===(e=r.data)||void 0===e||!e.trackUnion)return m().createElement(ce.h,{hasError:null!==r.error,errorMessage:p.ag.get("track-page.error")});var d=r.data.trackUnion,o=d.album,s=null==o||null===(n=o.playability)||void 0===n?void 0:n.playable;return m().createElement("div",{"data-testid":"rich-track"},m().createElement(en,{richTrack:d}),m().createElement($e,{richTrack:d}),m().createElement(Xe,{richTrack:d}),m().createElement(qe,{richTrack:d}),m().createElement(Le,{art:o.coverArt?o.coverArt.sources[0]:void 0,disabled:!s||!c,LinkComponent:Re.Z,name:o.name,type:o.type,size:ge.LARGE,uri:o.uri}),m().createElement(Me,{richTrack:d}))}));var tn=t(6479),an=t.n(tn);const ln="FTTfxsCa1sJIu1Y7utDO",rn="vrjrGtquvKnX8rzOuAaA",cn="HeVBalD_EHmtuqfIkkjo",dn="GQqQDXMybjyriRQKH_ID",on="DX4i2V_0jaKraBkfcDnR",sn="zCVFaVQz6MUyNwqjGS4c",mn="USV2e_90ZCdBCH9Dr5Vw",un="PhpDpIcERAEMvFD0NvPk";var kn,vn=["size","disabled"];!function(e){e.SMALL="small",e.LARGE="large"}(kn||(kn={}));var Sn=function(e){var n=e.disabled,t=e.images,a=e.LinkComponent,i=e.name,l=e.size,r=e.uri,c=l===kn.SMALL,d=(0,k.k6)();return m().createElement("div",{className:he()(rn,F()({},cn,n)),"data-testid":"track-artist-link-card"},m().createElement(Ie.O,{shape:Ie.K.CIRCLE,images:t,size:Ae.m$.SIZE_80,title:i,type:Fe.p.ARTIST}),m().createElement("div",{className:he()(on,F()({},sn,c))},m().createElement(h.Dy,{variant:"minuetBold",className:dn},p.ag.get("card.tag.artist")),m().createElement(a,{to:r},m().createElement(h.Dy,{as:"div",dir:"ltr",className:mn,variant:"balladBold"},i))),m().createElement("div",{onClick:function(){d.push(S().from(r).toURLPath(!0))},className:un}))},pn=function(e){var n=e.size,t=void 0===n?kn.LARGE:n,a=e.disabled,i=void 0!==a&&a,l=an()(e,vn);return m().createElement("div",{className:ln},l.artists.map((function(e){return m().createElement(Sn,{key:e.id,name:e.name,uri:e.uri,images:e.images,size:t,LinkComponent:l.LinkComponent,disabled:i})})))},En=t(54675),Nn=t(21770),gn=t(99450);const yn="QhDsXG1Gmo7XmQWLggAO",fn="bZgWQj7UxvK8GYKWDA7N",bn="AW61P3tnW5cKJCWtbhFh";var hn=function(e){var n=e.buttonText,t=e.onSecondaryButtonClick,a=e.onPrimaryButtonClick,i=e.secondaryButtonText,l=e.text;return m().createElement("div",{className:yn,"data-testid":"static-activation-trigger"},m().createElement(h.Dy,{className:fn,variant:"cello"},l),m().createElement("div",{className:bn},m().createElement(Nn.oM,{onClick:t,semanticColor:"textBase",buttonLegacy:!0},i),m().createElement(gn.D,{onClick:a,colorSet:"invertedLight",buttonLegacy:!0},n)))};const In="o7c89JiqZPfyQtLPjgrK",Fn="uzdLGhPskgWtE64HOVL8";var An=function(e){var n=e.lines,t=void 0===n?[]:n,a=e.isRtlLanguage,i=void 0!==a&&a;return 0===t.length?null:m().createElement("div",null,m().createElement(h.Dy,{as:"h2",variant:"canon",semanticColor:"textBase",className:In},p.ag.get("web-player.lyrics.title")),t.map((function(e,n){var t=e.words;return m().createElement(h.Dy,{as:"p",dir:i?"rtl":"auto",variant:"ballad",key:"lyrics-seo-line-".concat(n),className:Fn},t)})))};const Ln=function(e){var n=e.uri,t=P(n),i=t.status,l=t.data;return i!==a.LOADED?null:m().createElement(An,{lines:null==l?void 0:l.lyrics.lines,isRtlLanguage:null==l?void 0:l.lyrics.isRtlLanguage})};function _n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Cn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_n(Object(t),!0).forEach((function(n){F()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_n(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var On=function(e){var n=e.albumArtists,t=e.columnCount,i=e.uri,l=e.isRTPHoldoutSEOEnabled,r=e.isUnauthLyricsSEOEnabled,d=t-2,o={"--column-count":t,"--left-column-end":d-2,"--right-column-start":d},v=(0,u.v9)(X.Gg).isAnonymous,S=(0,q.k)(),E=(0,k.TH)(),N=(0,G.j)([z.k.UnauthLyrics],E),g=c()(N,1)[0],y=P(i,v),f=y.data,b=y.status,h=r||g,I=h||!!f&&b!==a.UNAVAILABLE;return m().createElement(s.Suspense,{fallback:null},I&&m().createElement("div",{className:he()(Ge,F()({},ze,t>5)),style:Cn({},o)},v?h&&m().createElement(hn,{buttonText:p.ag.get("sign_up"),secondaryButtonText:p.ag.get("login"),text:p.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:En.L6,onSecondaryButtonClick:En.h$}):m().createElement(Ln,{uri:i})),!l&&m().createElement("div",{className:he()(Ye,F()({},He,t>5&&I)),style:Cn({},o)},m().createElement(pn,{artists:n,LinkComponent:Re.Z,disabled:!S})))},Zn=function(e){var n,t,a=e.uri,i=e.track,r=(0,J.o)(),d=(0,q.k)(),v=(0,k.TH)(),S=(0,G.j)([z.k.UnauthLyrics],v),h=c()(S,1)[0],I=(0,u.v9)(X.Gg).isAnonymous,F=i.artistsWithRoles,A=i.album,L=i.duration,_=i.name,C=A.coverArt,O=A.copyright.items,Z=A.courtesyLine,T=null===(n=A.date)||void 0===n?void 0:n.isoString,R=null==C||null===(t=C.extractedColors)||void 0===t?void 0:t.colorRaw.hex,D=((null==C?void 0:C.sources)||[]).map((function(e){return{url:e.url,width:e.width||void 0,height:e.height||void 0}})),w=F.items.map((function(e){var n;return{name:e.artist.profile.name,images:((null===(n=e.artist.visuals.avatarImage)||void 0===n?void 0:n.sources)||[]).map((function(e){return{url:e.url,width:e.width,height:e.height}})),uri:e.artist.uri,id:e.artist.uri}})),P=(0,u.v9)($),x=W(P,i.id,V.RTP_HOLDOUT),j=W(P,i.id,V.UNAUTH_LYRICS),B=j||h,M=i.playability.playable,ce=(0,K.Y)(a),oe=(0,H.n)({uri:ce},{featureIdentifier:"track"}),se=oe.togglePlay,me=oe.isPlaying,ue=(0,Y.Z)(a),ke=c()(ue,2),ve=ke[0],Se=ke[1],pe=(0,s.useCallback)(l()(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({targetUri:a,intent:ve?"unsave":"save",type:"click"}),e.prev=1,e.next=4,Se(!ve);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])}))),[r,a,ve,Se]),Ee=(0,s.useCallback)((function(){return B?"".concat(i.name," - song and lyrics by ").concat(w.map((function(e){return e.name})).join(", ")):"".concat(i.name," - song by ").concat(w.map((function(e){return e.name})).join(", "))}),[w,B,i.name]);return m().createElement("section",{"data-testid":"track-page"},m().createElement(ae.$,null,Ee()),m().createElement(ie.gF,{backgroundColor:R},m().createElement(le.W,null,m().createElement(de.$,{size:g.qE.sm,onClick:function(){return se()},disabled:!M,isPlaying:me,uri:a}),m().createElement(re.i,{text:_,dragUri:a,dragLabel:_})),m().createElement(y._P,{menu:m().createElement(te.$,{uri:a})},m().createElement(ie.Oz,{dragUri:a,images:D,name:_,placeholderType:"album"})),m().createElement(ie.sP,null,m().createElement(ie.dy,{small:!0,uppercase:!0},p.ag.get("song")),m().createElement(y._P,{menu:m().createElement(te.$,{uri:a})},m().createElement(ie.xd,{dragUri:a,dragLabel:_},_)),m().createElement(ie.QS,{creators:w,releaseDate:T,durationMilliseconds:L.totalMilliseconds,isTrack:!0}))),m().createElement(E.o,{backgroundColor:R},m().createElement(E.F,null,m().createElement(ie.rn,null,m().createElement(de.$,{onClick:function(){return se()},isPlaying:me,disabled:!M,size:g.qE.lg,uri:a})),m().createElement(ie.rn,null,m().createElement(N.H,{isAdded:!!ve,onClick:pe,disabled:!d,size:N.q.md})),d?m().createElement(ee.o,{uri:a,isFollowing:!!ve,onFollow:pe,size:ee.q.md}):null,m().createElement(y.yj,{menu:m().createElement(te.$,{uri:a})},m().createElement(ne.z,{label:p.ag.get("more.label.context",_)})))),m().createElement(U,null,m().createElement("div",{className:"contentSpacing"},m().createElement("div",{className:We},m().createElement(b.T,{render:function(e){return m().createElement(On,{albumArtists:w.slice(0,1),columnCount:e,uri:a,isRTPHoldoutSEOEnabled:x,isUnauthLyricsSEOEnabled:j})}})),!x&&m().createElement(nn,null)),m().createElement("div",{className:"contentSpacing"},m().createElement("div",{className:Je},m().createElement(f.k,{copyrights:O,courtesyLine:Z}),!I&&m().createElement(Q,{uri:a})))))};const Tn=m().memo((function(){var e,n,t,a=(0,k.UO)().trackId,i=S().trackURI(a).toURI(),l=(0,oe.QN)({uri:i});if(l.loading||null===(e=l.data)||void 0===e||!e.trackUnion||"NotFound"===(null===(n=l.data)||void 0===n||null===(t=n.trackUnion)||void 0===t?void 0:t.__typename))return m().createElement(ce.h,{hasError:null!==l.error,errorMessage:p.ag.get("track-page.error")});var r=l.data.trackUnion;return m().createElement(Zn,{uri:i,track:r})}))},44137:(e,n,t)=>{t.d(n,{QN:()=>c});var a=t(319),i=t.n(a),l=(t(92222),t(98984)),r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackFields"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackNotFound"}}]}}]}}].concat(i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbum"}}]}}]),i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]),i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbumCoverArt"}}]}}]}}]),i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]),i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"trackNotFound"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}}]))},c=function(e,n){return(0,l.a)(r,e,n)}},75987:(e,n,t)=>{t.d(n,{W:()=>i});var a=t(70131);function i(){var e=(0,a.YD)({initialInView:!1}),n=e.ref,t=e.inView,i=(0,a.YD)({initialInView:!1}),l=i.ref,r=i.inView;return{titleRef:n,tracklistRef:l,displayTopBar:!t&&r}}},44887:(e,n,t)=>{t.d(n,{O:()=>I,K:()=>v});var a=t(59713),i=t.n(a),l=(t(57327),t(41539),t(2707),t(69600),t(21249),t(92222),t(26699),t(32023),t(37268),t(47941),t(82526),t(38880),t(89554),t(54747),t(49337),t(33321),t(69070),t(67294)),r=t.n(l),c=t(94184),d=t.n(c),o=t(80418),s=t(7469);const m={xsmall:"g3kBhX1E4EYEC2NFhhxG",small:"O5_0cReFdHe81E0xFAD1",medium:"H71KtIrytVayf_dFofu7",large:"SBpny8HrUTBzSjk7Vtk1",square:"CxurIfvXVb_TqGF4q8Yf",circle:"OadpZJiOaGfX6Qp4j6n5",image:"iJp40IxKg6emF6KYJ414",imageContainer:"vreceNX3ABcxyddeS83B",imagePlaceholder:"p6xU6jAgF1YQ43M1zZbV"},u="Ozitxbqs1vcOukDz3GDw",k="AeEoI6ueagbJtaHl2cRd";var v,S=t(42781),p=t(45322),E=t(68101),N=t(28151),g=t(79458),y=t(68251),f=function(e){var n=e.title,t=e.type,a=e.className,i=function(e){switch(e){case S.p.ALBUM:return r().createElement(p.c,{className:k});case S.p.ARTIST:return r().createElement(E.a,{className:k});case S.p.SHOW:case S.p.EPISODE:return r().createElement(N.J,{className:k});case S.p.USER:return r().createElement(g.f,{className:k});case S.p.PLAYLIST:default:return r().createElement(y.U,{className:k})}}(t);return r().createElement("div",{"aria-label":n,className:d()(u,a)},i)};function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(v||(v={}));var I=r().memo((function(e){var n,t,a=e.loadingMode,l=void 0===a?"lazy":a,c=e.type,u=e.title,k=e.images,S=void 0===k?[]:k,p=e.shape,E=void 0===p?v.SQUARE:p,N=e.size,g=void 0===N?s.m$.SIZE_56:N,y=e.className,b=e.onContextMenu,I=void 0===b?function(){}:b,F=e.onTouchStart,A=void 0===F?function(){}:F,L=e.onTouchEnd,_=void 0===L?function(){}:L,C=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return Boolean(e.width)})),n=e.filter((function(e){return e.url&&e.width&&e.width>=s.eM[s.m$.SIZE_56]})).sort((function(e,n){return e.width-n.width}));return n.length?n:e}(S),O=C.length>0?C[0].url:"",Z=C.map((function(e){var n=e.url,t=e.width;return"".concat(n," ").concat(t/2,"w, ").concat(n," ").concat(t,"w")})).join(", "),T=function(){var e;return e={},i()(e,m.xsmall,s.pj.includes(g)),i()(e,m.small,s.wL.includes(g)),i()(e,m.medium,s.VZ.includes(g)),i()(e,m.large,s.B_.includes(g)),e};return r().createElement("div",{className:d()(m.imageContainer,y),onContextMenu:I,onTouchStart:A,onTouchEnd:_,style:{width:"".concat(s.eM[g],"px"),height:"".concat(s.eM[g],"px")}},r().createElement(o.E,{loading:l,src:O,alt:u,ariaHidden:!0,className:d()(m.image,h((n={},i()(n,m.roundedCorners,E===v.ROUNDED_CORNERS),i()(n,m.circle,E===v.CIRCLE),i()(n,m.square,E===v.SQUARE),n),T())),srcSet:Z||void 0,testid:"entity-image"},r().createElement(f,{title:u,type:c,className:d()(h((t={},i()(t,m.roundedCorners,E===v.ROUNDED_CORNERS),i()(t,m.circle,E===v.CIRCLE),i()(t,m.square,E===v.SQUARE),t),T()))})))}))},7469:(e,n,t)=>{t.d(n,{m$:()=>i,eM:()=>c,pj:()=>d,wL:()=>o,VZ:()=>s,B_:()=>m});var a,i,l=t(59713),r=t.n(l);!function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(i||(i={}));var c=(a={},r()(a,i.SIZE_48,48),r()(a,i.SIZE_56,56),r()(a,i.SIZE_64,64),r()(a,i.SIZE_72,72),r()(a,i.SIZE_80,80),r()(a,i.SIZE_96,96),r()(a,i.SIZE_104,104),r()(a,i.SIZE_112,112),r()(a,i.SIZE_120,120),r()(a,i.SIZE_128,128),r()(a,i.SIZE_136,136),r()(a,i.SIZE_144,144),r()(a,i.SIZE_152,152),r()(a,i.SIZE_160,160),r()(a,i.SIZE_168,168),r()(a,i.SIZE_176,176),r()(a,i.SIZE_184,184),r()(a,i.SIZE_200,200),r()(a,i.SIZE_232,232),a),d=[i.SIZE_48,i.SIZE_56,i.SIZE_64],o=[i.SIZE_72,i.SIZE_80,i.SIZE_96,i.SIZE_104,i.SIZE_112,i.SIZE_120,i.SIZE_128],s=[i.SIZE_136,i.SIZE_144,i.SIZE_152,i.SIZE_160,i.SIZE_168,i.SIZE_176],m=[i.SIZE_184,i.SIZE_200,i.SIZE_232]},41734:(e,n,t)=>{t.d(n,{Z:()=>a});const a={topBar:"M_Sdhr1fQomXfFpJhlAV",topBarScrolled:"y1_VPBbLK5eyOtpider1",artistName:"jy0edgg9sHX2n0pFa4vj",button:"dLvkpxjslIRQbk1CwUmA",active:"Q4Tjljkt3LIpk7eBBKgp",tracklist:"flODZ8OHLrIZdsmmorij",cardGrid:"cfLzS7jCKWI2Q04gBr1F",headerContainer:"Fz5_rAxpenrV3rKWvEE0",firstAlbum:"ZxsW3oR7Vn5LaJ7V01M9",headerImage:"ul3GJOil7Z8NKLlukZoK",headerMetadata:"xvvNq8f5m_OwRXAXfjGY",headerButtons:"zh6kn35ACwwkQDbuf9dk",headerTitle:"Fs4KnCRGI01L4kCcEQcS"}},68569:(e,n,t)=>{t.d(n,{Z:()=>a});const a={artistOverviewContent:"iB16LxoPzDeVZo8zPhPQ",artistOverviewContainer:"FWzKEQQ9PYhHWOqfnYJV",popularTracks:"uhUnBNQXv7eaTTjCiPnp",artistShelfSpacer:"gS5Yk2DVcvRFAuyG_4r4",sideBlock:"kySHiIHbAOOdeS_SiOKz",popularTracksBlock:"m2I9Af9uHAIhYwi4fyo2",about:"bwNHXCZFo6f46VJEQNEl",events:"N7W_r4ZH8LUdXhpDsQ8c",merch:"jnwkIthi9wxLu9UAyQ7P",merchSmall:"_5tLXPYx42wERUwuJIEcE",overview:"cikURTYDxmyv0HGq10TK",heading:"l6YAKmkzQj4WAyn82MP6"}}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map