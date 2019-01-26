import Vue from 'vue';
import App from './app.vue';
import router from './router';
import "./styles/index.css";

new Vue({
  el: '#app',
  router,
  components: { App },
  template  : '<App/>'
})

if (module.hot) {
  module.hot.accept();
}
