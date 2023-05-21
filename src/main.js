import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseWrapper from './components/UI/BaseWrapper.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseLogo from './components/UI/BaseLogo.vue'
import BaseLoader from './components/UI/BaseLoader.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faLaptopCode, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './main.css'

const pinia = createPinia()
const app = createApp(App)

library.add(faUser, faLock, faLaptopCode, faLinkedin, faGithub, faHeart, faComment)

app.component('base-wrapper', BaseWrapper)
app.component('base-button', BaseButton)
app.component('base-logo', BaseLogo)
app.component('base-loader', BaseLoader)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(pinia)

app.mount('#app')
