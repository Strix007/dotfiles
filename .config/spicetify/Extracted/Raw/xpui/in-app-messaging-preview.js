"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[924],{98454:(e,t,n)=>{n.r(t),n.d(t,{InAppMessagingPreviewTool:()=>f,default:()=>E});var a=n(63038),l=n.n(a),i=(n(32564),n(21249),n(67294)),s=n.n(i),r=n(65858),o=n(62890),p=n(79145),u=n(5965);const c="eSfDJCRbxcgjQOuJba3X",d="E_ZkPF7R2fwnynIBQu9b",v="OKVBpIKRY0UB0tKbOd53",g="mOunZCWRZ7BzPqCprBdQ";var m=[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],f=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.inAppMessaging.env})),n=(0,r.v9)((function(e){return e.inAppMessaging.message})),a=(0,i.useState)(""),f=l()(a,2),E=f[0],b=f[1],k=(0,i.useState)(""),A=l()(k,2),C=A[0],M=A[1],h=(0,i.useState)(!1),w=l()(h,2),I=w[0],y=w[1];(0,i.useEffect)((function(){n&&I&&y(!1)}),[n,I]);var N=!n&&I;return s().createElement("div",{className:c},s().createElement("h1",null,"In-App Messaging Preview"),s().createElement("div",{className:d},s().createElement("div",null,s().createElement("label",{htmlFor:"desktop.settings.inAppMessagingEnv"},"Mode (endpoint):")),s().createElement(p.v,{dir:"auto",value:t,id:"desktop.settings.inAppMessagingEnv",onSelect:function(t){"prod"!==t&&"dev"!==t||e((0,u.q1)(t))}},m.map((function(e){var t=e.label,n=e.value;return s().createElement("option",{key:n,value:n},t)}))),s().createElement("div",null,s().createElement("label",{htmlFor:"desktop.settings.inAppMessagingCreativeId"},"Creative Id:")),s().createElement("div",null,s().createElement("input",{className:v,placeholder:"(eg. 12123434)",id:"desktop.settings.inAppMessagingCreativeId",name:"Creative Id",type:"text",value:E,onChange:function(e){b(e.target.value),y(!1)}})),s().createElement("div",null,s().createElement("label",{htmlFor:"desktop.settings.inAppMessagingAppUri"},"URI for Dynamic Content (optional):")),s().createElement("div",null,s().createElement("input",{className:v,placeholder:"(eg. spotify:artist:123)",id:"desktop.settings.inAppMessagingAppUri",name:"App Uri",type:"text",value:C,onChange:function(e){M(e.target.value),y(!1)}})),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null,s().createElement(o.z,{version:"secondary",onClick:function(t){t.preventDefault(),e((0,u.XJ)(E,C)),y(!1),window.setTimeout((function(){y(!0)}),1e3)}},"Get Preview")),N&&s().createElement("div",{className:g},"No Messsage found")))};const E=f}}]);
//# sourceMappingURL=in-app-messaging-preview.js.map