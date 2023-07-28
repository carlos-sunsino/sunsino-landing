import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss' // 全局樣式
import 'aos/dist/aos.css'
import AOS from 'aos'

const Vue = createApp(App)

Vue.use(router)
Vue.mount('#app')
AOS.init()
