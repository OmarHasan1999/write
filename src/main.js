import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/HomeHero.css'
import './css/footers.css'
import './css/Header.css'
import './css/HomeFood.css'
import './css/HomeFeatured.css'
import './css/RecipeCards.css'
import './css/HomePopular.css'
import './css/AboutHero.css'
import './css/DownloadHero.css'
import './css/ContactHero.css'







const app = createApp(App)

app.use(router)

app.mount('#app')

document.ready(function(){
    alert('hello');
})