import { createApp } from 'vue'
import App from './App.vue'
import VueWriter from 'vue-writer'

import router from './router'
import './assets/main.css'


const app = createApp(App)

app.use(router)
app.use(VueWriter)
app.mount('#app')
