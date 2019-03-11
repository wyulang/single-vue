import Vue from 'vue';
import Router from 'vue-router';
import index from './pages/index';
import program from './pages/index';
import wx from './pages/wx/index';
import order from './pages/order/index';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(Router);

const routes=[
  {
    path: '',
    name: "survey",
    component: index,
    meta: { title: "概况" },
  },
  {
    path: '/wx',
    name: "wx",
    component: r => require.ensure([], () => r(require('./pages/wx/index')), 'wx'),
    meta: { title: "小程管理" },
  },
  {
    path: '/template',
    name: "template",
    component: program,
    meta: { title: "模板管理" },
  },
  {
    path: '/order',
    name: "order",
    component: r => require.ensure([], () => r(require('./pages/order/index')), 'order'),
    meta: { title: "订单管理" },
  },
  {
    path: '/custom',
    name: "custom",
    component: program,
    meta: { title: "商家管理" },
  },
  {
    path: '/activity',
    name: "activity",
    component: program,
    meta: { title: "营销管理" },
    children:[
      {
        path: '/activity/skill',
        name: "skill",
        component: r => require.ensure([], () => r(require('./pages/wx/index')), 'wx'),
        meta: { title: "秒杀管理" },
      },
      {
        path: '/activity/pingtuan',
        name: "pingtuan",
        component: program,
        meta: { title: "拼团管理" },
      }
    ]
  },
  {
    path: '/finance',
    name: "finance",
    component: program,
    meta: { title: "财务报表" },
  },
  {
    path: '/net',
    name: "net",
    component: program,
    meta: { title: "网站装修" },
  },
  {
    path: '/message',
    name: "message",
    component: program,
    meta: { title: "消息公告" },
  },
  {
    path: '/public',
    name: "public",
    component: program,
    meta: { title: "公众号管理" },
  },
  {
    path: '/system',
    name: "system",
    component: program,
    meta: { title: "系统设置" },
  },
]

export default new Router({
  routes
})

export const memus = routes;