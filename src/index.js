import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store/index'
import "./styles/index.css";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template  : '<App/>'
})

if (module.hot) {
  module.hot.accept();
}
