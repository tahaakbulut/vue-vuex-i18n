import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import store from './store/store';
import VueResurce from 'vue-resource';
Vue.use(VueResurce)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
