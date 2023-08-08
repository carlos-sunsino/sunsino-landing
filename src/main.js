import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss' // 全局樣式
import 'aos/dist/aos.css'
import AOS from 'aos'
import { createI18n } from 'vue-i18n'
import { zh, cn, en } from '@/assets/i18n'

const Vue = createApp(App)

const i18n = createI18n({
	legacy: false,
	locale: 'zh-TW',
	fallbackLocale: 'zh-TW',
	messages: {
		'en-US': en,
		'zh-TW': zh,
		'zh-CN': cn
	}
})

Vue.use(router)
Vue.use(i18n)
Vue.mount('#app')
AOS.init()
