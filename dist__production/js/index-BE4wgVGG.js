import{b as e}from"./vue-router-Bq7HluqB.js";import{d as t,c as s,V as n,P as a,ai as o,o as r,T as i}from"./@vue-5amejw8K.js";const u={class:"layout-pd"},l=t({__name:"index",setup(t){const l=e(),m=()=>{l.push("/limits/frontEnd/page")};return(e,t)=>{const l=o("el-alert"),d=o("ele-Position"),p=o("el-icon"),c=o("el-button");return r(),s("div",u,[n(l,{title:"温馨提示：1、此页面无法模拟后端控制路由，因为 `gitee` 上所请求的 `json` 菜单数据线上会出现跨域的情况（json地址：\r\n      https://gitee.com/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json）。2、本地接口请求文件位置：`/src/api/menu/index.ts`。\r\n      3、拉取代码后本地请求查看后端控制页面路由效果：`/src/store/modules/themeConfig.ts`中开启（isRequestRoutes 为 true，则开启后端控制路由）。\r\n      4、此页面效果只作为演示使用，若出现不可逆转的bug，请尝试 `F5` 刷新页面。5、默认启用的是 `前端控制路由`。",type:"warning",closable:!1}),n(c,{type:"primary",size:"default",class:"mt15",onClick:m},{default:a((()=>[n(p,null,{default:a((()=>[n(d)])),_:1}),t[0]||(t[0]=i(" 立即前往前端控制路由 "))])),_:1})])}}});export{l as default};
