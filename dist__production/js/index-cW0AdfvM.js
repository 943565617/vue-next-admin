import{b as e}from"./vue-router-Bq7HluqB.js";import{a}from"./element-plus-AyclcJdL.js";import{d as t,_ as l,c as s,a as i,V as n,P as m,ai as o,o as u,T as r,U as d}from"./@vue-5amejw8K.js";import"./lodash-es-EFZEm3Z2.js";import"./@vueuse-DWSxN83p.js";import"./@element-plus-YR8FD5Tz.js";import"./@popperjs-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BeASU03D.js";import"./@intlify-KwFOTgoq.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";const p={class:"layout-padding"},g={class:"layout-padding-auto layout-padding-view"},c={class:"flex-margin",style:{width:"400px"}},w=t({__name:"index",setup(t){const w=e(),V=l({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),v=()=>V.tagsViewName?V.value?(w.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:V.value,tagsViewName:V.tagsViewName}}),void(V.value="")):a.warning("路由参数id值为必填"):a.warning("动态路由tagsViewName为必填，因为路由配置了"),f=()=>{V.tagsViewNameIsI18n=!V.tagsViewNameIsI18n,V.tagsViewNameIsI18n?V.tagsViewName=JSON.stringify({"zh-cn":"我是动态路由",en:"Im dynamic routing","zh-tw":"我是動態路由"}):V.tagsViewName="我是动态路由测试tagsViewName(非国际化)"};return(e,a)=>{const t=o("el-alert"),l=o("el-input"),w=o("SvgIcon"),N=o("el-button"),y=o("el-result");return u(),s("div",p,[i("div",g,[i("div",c,[n(y,{icon:"warning",title:"动态路由",subTitle:"可 `开启 TagsView 共用` 进行单标签测试"},{extra:m((()=>[n(t,{type:"success",closable:!1,class:"mb30"},{default:m((()=>a[2]||(a[2]=[i("div",null,"1、设置非国际化：格式：tagsViewName=xxx",-1),i("br",null,null,-1),i("div",null,'2、设置国际化：格式：tagsViewName=JSON.stringify({"zh-cn":"测试用","en":"test+page","zh-tw":"測試用"})',-1),i("br",null,null,-1),i("div",null,"3、设置国际化后，去顶栏切换语言查看演示效果",-1),i("br",null,null,-1),i("div",null,[r(" 4、 "),i("a",{href:"https://gitee.com/q7but",target:"_black"},"感谢@q7but"),r("、 "),i("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add 添加自定义 tagVIewName 拓展,支持国际化")],-1)]))),_:1}),n(l,{modelValue:V.tagsViewName,"onUpdate:modelValue":a[0]||(a[0]=e=>V.tagsViewName=e),placeholder:"请输入tagsView 名称",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),n(l,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e),placeholder:"请输入路由参数id值",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),n(N,{type:"primary",size:"default",class:"mt15",onClick:v},{default:m((()=>[n(w,{name:"iconfont icon-dongtai"}),a[3]||(a[3]=r(" 动态路由传参 "))])),_:1}),n(N,{type:"primary",size:"default",class:"mt15",onClick:f},{default:m((()=>[n(w,{name:"iconfont icon-fuhao-zhongwen"}),r(" "+d(V.tagsViewNameIsI18n?"普通的演示":"国际化演示"),1)])),_:1})])),_:1})])])])}}});export{w as default};
