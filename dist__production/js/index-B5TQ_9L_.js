import{b as e}from"./vue-router-Bq7HluqB.js";import{d as a,_ as t,c as l,a as s,V as i,P as n,ai as u,o,T as m,U as d}from"./@vue-5amejw8K.js";const c={class:"layout-padding"},g={class:"layout-padding-auto layout-padding-view"},r={class:"flex-margin",style:{width:"400px"}},p=a({__name:"index",setup(a){const p=e(),w=t({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),V=()=>{const e={id:w.value};w.tagsViewName&&(e.tagsViewName=w.tagsViewName),p.push({path:"/params/common/details",query:e}),w.value=""},N=()=>{w.tagsViewNameIsI18n=!w.tagsViewNameIsI18n,w.tagsViewNameIsI18n?w.tagsViewName=JSON.stringify({"zh-cn":"测试用",en:"test page","zh-tw":"測試用"}):w.tagsViewName="我是普通路由测试tagsViewName(非国际化)"};return(e,a)=>{const t=u("el-alert"),p=u("el-input"),f=u("SvgIcon"),h=u("el-button"),v=u("el-result");return o(),l("div",c,[s("div",g,[s("div",r,[i(v,{icon:"success",title:"普通路由",subTitle:"可 `开启 TagsView 共用` 进行单标签测试"},{extra:n((()=>[i(t,{type:"success",closable:!1,class:"mb30"},{default:n((()=>a[2]||(a[2]=[s("div",null,"1、设置非国际化：格式：tagsViewName=xxx",-1),s("br",null,null,-1),s("div",null,'2、设置国际化：格式：tagsViewName=JSON.stringify({"zh-cn":"测试用","en":"test+page","zh-tw":"測試用"})',-1),s("br",null,null,-1),s("div",null,"3、设置国际化后，去顶栏切换语言查看演示效果",-1),s("br",null,null,-1),s("div",null,[m(" 4、 "),s("a",{href:"https://gitee.com/q7but",target:"_black"},"感谢@q7but"),m("、 "),s("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add 添加自定义 tagVIewName 拓展,支持国际化")],-1)]))),_:1}),i(p,{modelValue:w.tagsViewName,"onUpdate:modelValue":a[0]||(a[0]=e=>w.tagsViewName=e),placeholder:"请输入tagsView 名称",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),i(p,{modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value=e),placeholder:"请输入路由参数 id 值",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),i(h,{type:"primary",size:"default",class:"mt15",onClick:V},{default:n((()=>[i(f,{name:"iconfont icon-putong"}),a[3]||(a[3]=m(" 普通路由传参 "))])),_:1}),i(h,{type:"primary",size:"default",class:"mt15",onClick:N},{default:n((()=>[i(f,{name:"iconfont icon-fuhao-zhongwen"}),m(" "+d(w.tagsViewNameIsI18n?"普通的演示":"国际化演示"),1)])),_:1})])),_:1})])])])}}});export{p as default};
