import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { clickOutside } from './directives/clickOutside'

import App from './App.vue'

import 'normalize.css/normalize.css'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

// Directives
app.directive('click-outside', clickOutside)

app.use(pinia)
app.mount('#app')
