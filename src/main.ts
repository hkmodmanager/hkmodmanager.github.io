import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/css/dark.scss"
import "@/css/light.scss"
import "@/css/common.scss"
import { createI18n } from 'vue-i18n'

import Lang from '@/lang/langs'

const i18n = createI18n({
    fallbackWarn: false,
    missingWarn: false,
    legacy: false,
    messages: Lang,
    fallbackLocale: 'en-US',
    locale: navigator.language
});


//(window as any).isEmbedded = true;

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
