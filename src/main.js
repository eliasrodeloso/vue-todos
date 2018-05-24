import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.prototype.$localStorageKey = 'LOCAL_STORAGE_KEY'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
