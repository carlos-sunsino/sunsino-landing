import { useRouter, createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [{ path: '/', name: 'home', component: home }]
})
