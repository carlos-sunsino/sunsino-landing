import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		resolve: {
			alias: {
				// JS import 取代為絕對路徑
				'@': path.resolve(__dirname, './src')
			}
		},
		server: {
			open: `http://localhost:8787`,
			host: 'localhost',
			port: 8787,
			strictPort: true,
			cors: false
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "./src/styles/_prepend.scss";`
				}
			}
		},
		plugins: [vue()]
	})
}
