<template>
	<el-config-provider :size="getGlobalComponentSize" :locale="getGlobalI18n">
		<router-view v-show="setLockScreen" />
		<LockScreen v-if="themeConfig.isLockScreen" />
		<Setings ref="setingsRef" v-show="setLockScreen" />
		<CloseFull v-if="!themeConfig.isLockScreen" />
		<Upgrade v-if="getVersion" />
		<!-- <Sponsors /> -->
	</el-config-provider>
</template>

<script setup lang="ts" name="app">
import { defineAsyncComponent, computed, ref, onBeforeMount, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useTagsViewRoutes } from '@/stores/tagsViewRoutes';
import { useThemeConfig } from '@/stores/themeConfig';
import other from '@/utils/other';
import { Local, Session } from '@/utils/storage';
import { ElMessageBox } from 'element-plus'
import mittBus from '@/utils/mitt';
import setIntroduction from '@/utils/setIconfont';
// 导入 Element Plus 中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
// 引入组件
const LockScreen = defineAsyncComponent(() => import('@/layout/lockScreen/index.vue'));
const Setings = defineAsyncComponent(() => import('@/layout/navBars/topBar/setings.vue'));
const CloseFull = defineAsyncComponent(() => import('@/layout/navBars/topBar/closeFull.vue'));
const Upgrade = defineAsyncComponent(() => import('@/layout/upgrade/index.vue'));
const Sponsors = defineAsyncComponent(() => import('@/layout/sponsors/index.vue')); //赞助商提示
const isShowUpdate = ref(false) // 是否提示过弹窗
// 在其他文件中监听自定义更新版本事件
document.body.addEventListener('plugin_web_update_notice', (e: any) => {
  const { version, options } = e.detail
  console.log('版本号:', e.detail)
  // write some code, show your custom notification and etc.
  // 使用 ElMessageBox.confirm 弹出一个确认对话框
  if (!isShowUpdate.value) {
    isShowUpdate.value = true
    ElMessageBox.confirm('页面有更新，请点击确定刷新页面！', '提示', {
      closeOnClickModal: false, // 是否可以通过点击遮罩关闭对话框
      showClose: false, // 是否显示右上角关闭按钮
      showCancelButton: false, // 显示取消按钮
      confirmButtonText: '确定', // 确认按钮的文本
      cancelButtonText: '取消', // 取消按钮的文本
      type: 'warning', // 对话框类型为警告
    })
      .then(() => {
        // 如果用户点击了确认按钮，则刷新页面
        location.reload()
      })
      .catch(() => {})
  }
})
// 定义变量内容
const setingsRef = ref();
const route = useRoute();
const stores = useTagsViewRoutes();
// 读取 pinia 默认语言
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);

// 设置锁屏时组件显示隐藏
const setLockScreen = computed(() => {
	// 防止锁屏后，刷新出现不相关界面
	// https://gitee.com/lyt-top/vue-next-admin/issues/I6AF8P
	return themeConfig.value.isLockScreen ? themeConfig.value.lockScreenTime > 1 : themeConfig.value.lockScreenTime >= 0;
});
// 获取版本号
const getVersion = computed(() => {
	let isVersion = false;
	if (route.path !== '/login') {
		// @ts-ignore
		if ((Local.get('version') && Local.get('version') !== __NEXT_VERSION__) || !Local.get('version')) isVersion = true;
	}
	return isVersion;
});
// 获取全局组件大小
const getGlobalComponentSize = computed(() => {
	return other.globalComponentSize();
});
  /**
   * 根据语言标识读取对应的语言包
   */
const getGlobalI18n = computed(() => {
	if (themeConfig.value.globalI18n == "en") {
      return en;
    } else {
      return zhCn;
    }
});


// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
	// 设置批量第三方 icon 图标
	setIntroduction.cssCdn();
	// 设置批量第三方 js
	setIntroduction.jsCdn();
});
// 页面加载时
onMounted(() => {
	nextTick(() => {
		// 监听布局配'置弹窗点击打开
		mittBus.on('openSetingsDrawer', () => {
			setingsRef.value.openDrawer();
		});
		// 获取缓存中的布局配置
		if (Local.get('themeConfig')) {
			storesThemeConfig.setThemeConfig({ themeConfig: Local.get('themeConfig') });
			document.documentElement.style.cssText = Local.get('themeConfigStyle');
		}
		// 获取缓存中的全屏配置
		if (Session.get('isTagsViewCurrenFull')) {
			stores.setCurrenFullscreen(Session.get('isTagsViewCurrenFull'));
		}
	});
});
// 页面销毁时，关闭监听布局配置/i18n监听
onUnmounted(() => {
	mittBus.off('openSetingsDrawer', () => {});
});
// 监听路由的变化，设置网站标题
watch(
	() => route.path,
	() => {
		other.useTitle();
	},
	{
		deep: true,
	}
);
</script>
