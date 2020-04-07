import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'
// import $ from 'jquery'
// import 'bootstrap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(Vant)

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
