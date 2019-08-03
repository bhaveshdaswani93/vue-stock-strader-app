import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './axios-default'

Vue.config.productionTip = false
Vue.filter('filter-cash',(value)=>{
  return `$${value}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
