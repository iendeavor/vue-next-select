import { createApp } from 'vue'
// @ts-ignore-next
import App from './App.vue'
import route from './route'
import store from './store'
import 'vue-next-select/dist/index.css'
import ApiReferenceLink from './components/api-reference-link.vue'

createApp(App).component('api', ApiReferenceLink).use(route).use(store).mount('#app')
