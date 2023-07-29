import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "@/css/dark.scss"
import "@/css/light.scss"
import "@/css/common.scss"

createApp(App).use(router).mount('#app')
