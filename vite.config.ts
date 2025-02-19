import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
// import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
import viteCompression from 'vite-plugin-compression';// 压缩插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { buildConfig } from './src/utils/build';

const pathResolve = (dir: string) => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
	'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
};

export default defineConfig(({ mode, command }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [
			vue(),
			// vueSetupExtend(),
			// 压缩插件
			// viteCompression({
			// 	filter: /\.(js|css|json|txt|ico|svg)(\?.*)?$/i, // 需要压缩的文件
			// 	threshold: 10240, // 文件容量大于这个值进行压缩
			// 	algorithm: 'gzip', // 压缩方式
			// 	ext: 'gz', // 后缀名
			// 	deleteOriginFile: true, // 压缩后是否删除压缩源文件
			// }),
			JSON.parse(env.VITE_OPEN_CDN) ? buildConfig.cdn() : null,
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [resolve(process.cwd(), './src/assets/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[name]',
			}),
		],
		root: process.cwd(),
		resolve: { alias },
		css: {
			preprocessorOptions: {
				// 定义全局 SCSS 变量
				scss: {
					javascriptEnabled: true,
					api: 'modern-compiler',
					additionalData: `@use "@/styles/mixins.scss" as *;`,
				},
				css: { charset: false },
			},
		},
		// base: command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
		base: './',
		// 预加载项目必需的组件
		optimizeDeps: {
			// // 是否将 Vue、React、@vueuse/core 和 @vueuse/head 作为外部依赖提取出来
			// include: ['vue', 'react', '@vueuse/core', '@vueuse/head'],
			// // 是否开启预构建，将预构建后的代码提前注入到浏览器缓存中，以减少首次加载的时间
			// prebuild: false,
			exclude: ['vue-demi'],
		},
		server: {
			host: '0.0.0.0',
			port: env.VITE_PORT as unknown as number, // 设置服务启动端口号
			open: JSON.parse(env.VITE_OPEN), // 设置服务启动时是否自动打开浏览器
			hmr: true, //禁用或配置hmr连接
			cors: true, // 允许跨域
			// proxy: {
			// 	// 代理 /dev-api 的请求
			// 	'/gitee': {
			// 		target: 'https://gitee.com',
			// 		ws: true,
			// 		changeOrigin: true,
			// 		rewrite: (path) => path.replace(/^\/gitee/, ''),
			// 	},
			// },
		},
		build: {
			chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
			outDir: `dist__${mode}`, //指定打包输出路径
			assetsDir: 'assets', //指定静态资源存放路径
			cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
			sourcemap: false, //是否构建source map 文件
			minify: 'terser',
			terserOptions: {
				compress: {
					keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
					drop_console: true, // 生产环境去除 console
					drop_debugger: true, // 生产环境去除 debugger
				},
			},
			//会打包出 css js 等文件夹 目录显得清晰
			rollupOptions: {
				output: {
					chunkFileNames: 'js/[name]-[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
					entryFileNames: 'js/[name]-[hash].js', // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
					// assetFileNames: '[ext]/[name]-[hash].[ext]',
					// 用于输出静态资源的命名，[ext]表示文件扩展名
					assetFileNames: (assetInfo: any) => {
						const info = assetInfo.name.split('.');
						let extType = info[info.length - 1];
						// console.log('文件信息', assetInfo.name)
						if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
							extType = 'media';
						} else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
							extType = 'img';
						} else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
							extType = 'fonts';
						}
						return `${extType}/[name].[hash].[ext]`;
					},
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender';
						}
					},
				},
				...(JSON.parse(env.VITE_OPEN_CDN) ? { external: buildConfig.external } : {}),
			},
			plugins: [{ src: '~/plugins/vue-cropper', ssr: false }],
		},
		// build: {
		// 	outDir: 'dist',
		// 	chunkSizeWarningLimit: 1500,
		// 	rollupOptions: {
		// 		output: {
		// 			chunkFileNames: 'assets/js/[name]-[hash].js',
		// 			entryFileNames: 'assets/js/[name]-[hash].js',
		// 			assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
		// 			manualChunks(id) {
		// 				if (id.includes('node_modules')) {
		// 					return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender';
		// 				}
		// 			},
		// 		},
		// 		...(JSON.parse(env.VITE_OPEN_CDN) ? { external: buildConfig.external } : {}),
		// 	},
		// },

		define: {
			__VUE_I18N_LEGACY_API__: JSON.stringify(false),
			__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
			__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
			__NEXT_VERSION__: JSON.stringify(process.env.npm_package_version),
			__NEXT_NAME__: JSON.stringify(process.env.npm_package_name),
		},
	};
});
