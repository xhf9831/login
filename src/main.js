import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from "./http"
import dayjs from 'dayjs'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')