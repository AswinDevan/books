import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './route/index';
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')
