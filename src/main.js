import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseWrapper from './components/UI/BaseWrapper.vue'
import BaseButton from './components/UI/BaseButton.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import './main.css'

const app = createApp(App)

library.add(faUser, faLock)

app.component('base-wrapper', BaseWrapper)
app.component('base-button', BaseButton)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
