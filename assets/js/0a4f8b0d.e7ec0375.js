"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9730],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const o={id:"PriceFormatCustom",title:"Interface: PriceFormatCustom",sidebar_label:"PriceFormatCustom",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,l={unversionedId:"api/interfaces/PriceFormatCustom",id:"version-4.0/api/interfaces/PriceFormatCustom",title:"Interface: PriceFormatCustom",description:"Represents series value formatting options.",source:"@site/versioned_docs/version-4.0/api/interfaces/PriceFormatCustom.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceFormatCustom",permalink:"/lightweight-charts/docs/4.0/api/interfaces/PriceFormatCustom",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"PriceFormatCustom",title:"Interface: PriceFormatCustom",sidebar_label:"PriceFormatCustom",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"formatter",id:"formatter",level:3},{value:"minMove",id:"minmove",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents series value formatting options."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"type"},"type"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"type"),": ",(0,i.yg)("inlineCode",{parentName:"p"},'"custom"')),(0,i.yg)("p",null,"The custom price format."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"formatter"},"formatter"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"formatter"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#priceformatterfn"},(0,i.yg)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,i.yg)("p",null,"Override price formatting behaviour. Can be used for cases that can't be covered with built-in price formats."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"minmove"},"minMove"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"minMove"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,"The minimum possible step size for price value movement."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"0.01")))}m.isMDXComponent=!0}}]);