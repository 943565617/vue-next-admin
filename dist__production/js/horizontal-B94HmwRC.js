const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./subItem-BM8OQNCY.js","./@vue-5amejw8K.js","./index-DtAKVlX9.js","./pinia-CTGgt2hX.js","./vue-demi-Dq6ymT-8.js","./vue-router-Bq7HluqB.js","./js-cookie-BXEMiIsG.js","./@element-plus-YR8FD5Tz.js","./nprogress-CwwpQnHY.js","./@intlify-KwFOTgoq.js","../css/nprogress.CSXic_Zd.css","./axios-XtWrBBVz.js","./qs-d0NUDaEV.js","./side-channel-ABGcfzWN.js","./get-intrinsic-Dcwdwnz4.js","./es-errors-Bza6HHKb.js","./has-symbols-BjfDv0FJ.js","./has-proto-DxUgyt-t.js","./function-bind-Ckw9YnhN.js","./hasown-DTGZhiFA.js","./call-bind-COXgxIYc.js","./set-function-length-CYeVTiyi.js","./define-data-property-DvIQPL4R.js","./es-define-property-DwRRhIwF.js","./gopd-CVOMcQVD.js","./has-property-descriptors-CDOEcoVi.js","./object-inspect-Da024_OR.js","./element-plus-AyclcJdL.js","./lodash-es-EFZEm3Z2.js","./@vueuse-DWSxN83p.js","./@popperjs-CpAfbxx4.js","./@ctrl-D2oWfImC.js","./dayjs-BeASU03D.js","./async-validator-Cuo4gI4y.js","./memoize-one-Ds0C_khL.js","./normalize-wheel-es-Vn5vHDCm.js","./@floating-ui-DT7V1Oc1.js","./vue-i18n-agluwRAO.js","./vue-CBwmpGZq.js","./mitt-CNZ6avp8.js","./vue-grid-layout-WvDAhvPt.js","../css/index.BVvPMfFH.css","../css/tailwindcss.B_OxdTrg.css"])))=>i.map(i=>d[i]);
import{d as e,u as t,b as i,o as s,e as a,_ as o}from"./index-DtAKVlX9.js";import{d as n,_ as r,k as l,G as m,ai as p,o as u,c,V as d,P as j,F as h,a9 as v,O as f,a as y,U as _,u as b,ab as g,T as k,a3 as x,aU as A}from"./@vue-5amejw8K.js";import{u as L,o as C}from"./vue-router-Bq7HluqB.js";import{s as w}from"./pinia-CTGgt2hX.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-YR8FD5Tz.js";import"./nprogress-CwwpQnHY.js";import"./@intlify-KwFOTgoq.js";import"./axios-XtWrBBVz.js";import"./qs-d0NUDaEV.js";import"./side-channel-ABGcfzWN.js";import"./get-intrinsic-Dcwdwnz4.js";import"./es-errors-Bza6HHKb.js";import"./has-symbols-BjfDv0FJ.js";import"./has-proto-DxUgyt-t.js";import"./function-bind-Ckw9YnhN.js";import"./hasown-DTGZhiFA.js";import"./call-bind-COXgxIYc.js";import"./set-function-length-CYeVTiyi.js";import"./define-data-property-DvIQPL4R.js";import"./es-define-property-DwRRhIwF.js";import"./gopd-CVOMcQVD.js";import"./has-property-descriptors-CDOEcoVi.js";import"./object-inspect-Da024_OR.js";import"./element-plus-AyclcJdL.js";import"./lodash-es-EFZEm3Z2.js";import"./@vueuse-DWSxN83p.js";import"./@popperjs-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BeASU03D.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./vue-i18n-agluwRAO.js";import"./vue-CBwmpGZq.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-WvDAhvPt.js";/* empty css                    */import"./vue-demi-Dq6ymT-8.js";const z={class:"el-menu-horizontal-warp"},I=["onClick"],O=o(n({__name:"horizontal",props:{menuList:{type:Array,default:()=>[]}},setup(o){const n=A((()=>i((()=>import("./subItem-BM8OQNCY.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url))),O=o,$=e(),S=t(),{routesList:D}=w($),{themeConfig:H}=w(S),P=L(),T=r({defaultActive:""}),V=l((()=>O.menuList)),E=e=>e.filter((e=>{var t;return!(null==(t=e.meta)?void 0:t.isHide)})).map((e=>((e=Object.assign({},e)).children&&(e.children=E(e.children)),e))),G=e=>{const{path:t,meta:i}=e;if("classic"===H.value.layout)T.defaultActive=`/${null==t?void 0:t.split("/")[1]}`;else{const e=(null==i?void 0:i.isDynamic)?i.isDynamicPath.split("/"):t.split("/");e.length>=4&&(null==i?void 0:i.isHide)?T.defaultActive=e.splice(0,3).join("/"):T.defaultActive=t}};return m((()=>{G(P)})),C((e=>{G(e);let{layout:t,isClassicSplitMenu:i}=H.value;"classic"===t&&i&&a.emit("setSendClassicChildren",(e=>{const t=e.split("/");let i={children:[]};return E(D.value).map(((e,s)=>{e.path===`/${t[1]}`&&(e.k=s,i.item={...e},i.children=[{...e}],e.children&&(i.children=e.children))})),i})(e.path))})),(e,t)=>{const i=p("SvgIcon"),a=p("el-sub-menu"),o=p("el-menu-item"),r=p("el-menu");return u(),c("div",z,[d(r,{router:"","default-active":T.defaultActive,"background-color":"transparent",mode:"horizontal"},{default:j((()=>[(u(!0),c(h,null,v(V.value,(t=>(u(),c(h,null,[t.children&&t.children.length>0?(u(),f(a,{index:t.path,key:t.path},{title:j((()=>[d(i,{name:t.meta.icon},null,8,["name"]),y("span",null,_(e.$t(t.meta.title)),1)])),default:j((()=>[d(b(n),{chil:t.children},null,8,["chil"])])),_:2},1032,["index"])):(u(),f(o,{index:t.path,key:t.path},g({_:2},[!t.meta.isLink||t.meta.isLink&&t.meta.isIframe?{name:"title",fn:j((()=>[d(i,{name:t.meta.icon},null,8,["name"]),k(" "+_(e.$t(t.meta.title)),1)])),key:"0"}:{name:"title",fn:j((()=>[y("a",{class:"w100",onClick:x((e=>(e=>{s.handleOpenLink(e)})(t)),["prevent"])},[d(i,{name:t.meta.icon},null,8,["name"]),k(" "+_(e.$t(t.meta.title)),1)],8,I)])),key:"1"}]),1032,["index"]))],64)))),256))])),_:1},8,["default-active"])])}}}),[["__scopeId","data-v-eeb1bc19"]]);export{O as default};
