import{b as e}from"./vue-router-Bq7HluqB.js";import{v as s}from"./vue-i18n-agluwRAO.js";import{s as t}from"./pinia-CTGgt2hX.js";import{a as o,_ as i}from"./index-D30c5w24.js";import{d as r,b as a,_ as m,ai as p,o as l,c as n,V as u,P as d,a as c,T as j,U as h,n as f}from"./@vue-5amejw8K.js";import"./@intlify-KwFOTgoq.js";import"./vue-CBwmpGZq.js";import"./vue-demi-Dq6ymT-8.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-YR8FD5Tz.js";import"./nprogress-CwwpQnHY.js";import"./axios-XtWrBBVz.js";import"./qs-d0NUDaEV.js";import"./side-channel-ABGcfzWN.js";import"./get-intrinsic-Dcwdwnz4.js";import"./es-errors-Bza6HHKb.js";import"./has-symbols-BjfDv0FJ.js";import"./has-proto-DxUgyt-t.js";import"./function-bind-Ckw9YnhN.js";import"./hasown-DTGZhiFA.js";import"./call-bind-COXgxIYc.js";import"./set-function-length-CYeVTiyi.js";import"./define-data-property-DvIQPL4R.js";import"./es-define-property-DwRRhIwF.js";import"./gopd-CVOMcQVD.js";import"./has-property-descriptors-CDOEcoVi.js";import"./object-inspect-Da024_OR.js";import"./element-plus-AyclcJdL.js";import"./lodash-es-EFZEm3Z2.js";import"./@vueuse-DWSxN83p.js";import"./@popperjs-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BeASU03D.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-WvDAhvPt.js";/* empty css                    */const w={class:"layout-search-dialog"},v=i(r({__name:"search",setup(i,{expose:r}){const v=o(),{tagsViewRoutes:g}=t(v),y=a(),{t:S}=s.useI18n(),V=e(),L=m({isShowSearch:!1,menuQuery:"",tagsViewList:[]}),_=(e,s)=>{s(e?L.tagsViewList.filter(x(e)):L.tagsViewList)},x=e=>s=>s.path.toLowerCase().indexOf(e.toLowerCase())>-1||s.meta.title.toLowerCase().indexOf(e.toLowerCase())>-1||S(s.meta.title).indexOf(e.toLowerCase())>-1,b=()=>{if(L.tagsViewList.length>0)return!1;g.value.map((e=>{var s;(null==(s=e.meta)?void 0:s.isHide)||L.tagsViewList.push({...e})}))},C=e=>{var s,t,o;let{path:i,redirect:r}=e;(null==(s=e.meta)?void 0:s.isLink)&&!(null==(t=e.meta)?void 0:t.isIframe)?window.open(null==(o=e.meta)?void 0:o.isLink):r?V.push(r):V.push(i),L.isShowSearch=!1};return r({openSearch:()=>{L.menuQuery="",L.isShowSearch=!0,b(),f((()=>{setTimeout((()=>{y.value.focus()}))}))}}),(e,s)=>{const t=p("ele-Search"),o=p("el-icon"),i=p("SvgIcon"),r=p("el-autocomplete"),a=p("el-dialog");return l(),n("div",w,[u(a,{modelValue:L.isShowSearch,"onUpdate:modelValue":s[1]||(s[1]=e=>L.isShowSearch=e),"destroy-on-close":"","show-close":!1},{footer:d((()=>[u(r,{modelValue:L.menuQuery,"onUpdate:modelValue":s[0]||(s[0]=e=>L.menuQuery=e),"fetch-suggestions":_,placeholder:e.$t("message.user.searchPlaceholder"),ref_key:"layoutMenuAutocompleteRef",ref:y,onSelect:C,"fit-input-width":!0},{prefix:d((()=>[u(o,{class:"el-input__icon"},{default:d((()=>[u(t)])),_:1})])),default:d((({item:s})=>[c("div",null,[u(i,{name:s.meta.icon,class:"mr5"},null,8,["name"]),j(" "+h(e.$t(s.meta.title)),1)])])),_:1},8,["modelValue","placeholder"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-22ae010e"]]);export{v as default};
