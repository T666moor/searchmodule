import Vue from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(InstantSearch)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
