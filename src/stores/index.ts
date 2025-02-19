// https://pinia.vuejs.org/
import { createPinia } from 'pinia';
import type { App } from "vue";

// 创建
const pinia = createPinia();
// // 全局注册 store
// export function setupStore(app: App<Element>) {
//     app.use(pinia);
//   }
// 导出
export default pinia;
// export { pinia };
