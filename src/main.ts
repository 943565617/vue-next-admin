/*
 * @Author: luoyi 943565617@qq.com
 * @Date: 2024-04-02 16:09:34
 * @LastEditors: luoyi 943565617@qq.com
 * @LastEditTime: 2024-11-25 17:37:58
 * @FilePath: \vue-next-admin-master\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue';
import pinia from '@/stores/index';
import App from '@/App.vue';
import router from '@/router';
import { directive } from '@/directive/index';
import { i18n } from '@/i18n/index';
import other from '@/utils/other';
import ElementPlus from 'element-plus';
import './styles/index.scss';
import VueGridLayout from 'vue-grid-layout';
// svg图标
import "virtual:svg-icons-register";
import SvgIcons from "@/assets/SvgIcon.vue";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./styles/tailwind.css";
import "tailwindcss/tailwind.css";
const app = createApp(App);

directive(app);
other.elSvg(app);
app.component("SvgIcons", SvgIcons);//svg图标
app.use(pinia).use(router).use(ElementPlus).use(i18n).use(VueGridLayout).mount('#app');
// 图标库引用
// for (const [key, component] of Object.entries(ElementPlusIconsVue:any)) {
//     app.component(key, component);
//   }
