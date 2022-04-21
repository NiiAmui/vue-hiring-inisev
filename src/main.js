import Vue from 'vue'
import App from './App.vue'
import './styles.css'
import store from './store'

window.Fire = new Vue()
// window.$ = $

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
