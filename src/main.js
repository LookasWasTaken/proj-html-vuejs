import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPhone,
    faEnvelope,
    faLocationDot,
  } from '@fortawesome/free-solid-svg-icons'
import {
    faClock,
  } from '@fortawesome/free-regular-svg-icons'
import {
    faLinkedinIn,
    faFacebookF,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
  library.add(faPhone, faEnvelope, faLocationDot, faClock, faLinkedinIn , faFacebookF, faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')