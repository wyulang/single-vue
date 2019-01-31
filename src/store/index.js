import Vue from 'vue'
import Vuex from 'vuex'
import api from '../config/webapi';
import env from '../config/envConfig';
import wx from './wx';
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    wx
  },
  state: {
  },
  actions: {
  },
  mutations: {}
})