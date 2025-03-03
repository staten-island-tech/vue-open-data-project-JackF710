import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'

const app = createApp(App)

app.use(router)

app.mount('#app')
