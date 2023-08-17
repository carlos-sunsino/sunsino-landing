import { useRouter, createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: home, meta: { locale: 'zh-TW' } },
		{ path: '/en-US', component: home, meta: { locale: 'en-US' } },
		{ path: '/zh-TW', component: home, meta: { locale: 'zh-TW' } },
		{ path: '/zh-CN', component: home, meta: { locale: 'zh-CN' } }
	]
})
