import api from '../config/webapi';
export default {
  state: {
    wxuserId: ""
  },
  actions: {
    getWxList({}, param = {}) {
      return api.post("MiniProgramy/seleCtcomplete", param);
    }
  },
  mutations: {

  }
}