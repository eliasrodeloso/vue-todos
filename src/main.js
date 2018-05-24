import Vue from 'vue'
import App from './App.vue'
import store from './store'
import uuid from 'uuid/v4'

Vue.prototype.$localStorageKey = 'LOCAL_STORAGE_KEY'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
