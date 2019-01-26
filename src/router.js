import Vue from 'vue';
import Router from 'vue-router';
import index from './pages/index';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: "index",
      component: index,
      meta: { title: "首页" },
    }
  ]
})