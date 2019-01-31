import EnvBase from 'lib/env-base';
// import { getQueryString } from 'lib/uri';

export class EnvConfig extends EnvBase {
  getEnvName() {
    let env = 'prod';
    let url = window.location.href;
    if (url.indexOf('groupTest') > 0) {
      env = "test"
    }
    if (url.indexOf('groupmall') > 0) {
      env = "prod"
    }
    if (url.indexOf('localhost') > 0) {
      env = "inte"
    }
    if (url.indexOf('192') > 0) {
      env = "inte"
    }
    return env;
  }
  groupmall = {
    // inte: 'http://192.168.1.114:8080/groupmall/',
    // inte: 'http://192.168.1.104:8080/groupmall/',
    // inte: 'http://192.168.1.104:8080/grouptest/',
    inte: 'https://www.superprism.cn/groupmall/',
    test: 'https://www.superprism.cn/grouptest/',
    prod: 'https://www.superprism.cn/groupmall/',
  };
  plat = {
    // inte: 'http://192.168.1.104:8080/',
    inte: 'https://www.superprism.cn/medusaplatform/',
    prod: 'https://www.superprism.cn/medusaplatform/',
    test: 'https://www.superprism.cn/medusaplatform/'
  };
  uploadUrl = 'https://www.superprism.cn/medusafile/common/v1/uploads/';
  projectName = 'medusaplatform';
  userInfo = {
    inte: {
      accessToken: null,
      appmodelId: "S00050001wx219007e82b660f17",
      // appmodelId: "S00050001wxb9601dd5a833886d",
      closeMiniCount: 1,
      createTime: null,
      defaultAppmodelId: null,
      defaultBackUrl: null,
      headImg: "http://thirdwx.qlogo.cn/mmopen/vi_32/qh1wmJHk0LMSnj3cVT7QlRbNJNoyianTia7LcQYTniclDHuTer7cqXEicg3Wg8BXRLPR5BzRKSM8ibvct3PBrnciakrA/132",
      isDelete: null,
      lastLogTime: "2018-09-28 14:58:35",
      markLevel: null,
      // miniProgramyId: 184,
      miniProgramyId: 137,
      miniName:"笔歌拼团",
      nickName: "Medusa",
      openid: null,
      password: "5C5D15C09ED9EA492E1EA7765DC1566B",
      realName: "孵化器",
      refreshToken: null,
      remark: null,
      runMiniCount: 3,
      state: null,
      subAccount: 4,
      token: "ojrHR84g/GttUsZ0zsjLlTRNMUG4yTXy8KCidV6Zg1o=",
      totalMoney: 300,
      unauthMiniCount: 2,
      unionid: null,
      updateTime: null,
      userId: 62,
      // userChildId:30,
      userState: 0,
      userTel: "18058505737",
      userpw: "t",
      currentVersion: 0

    },
    prod: window.sessionStorage.getItem('userInfo') && JSON.parse(window.sessionStorage.getItem('userInfo')),
    test: window.sessionStorage.getItem('userInfo') && JSON.parse(window.sessionStorage.getItem('userInfo'))
  }

  loginHref = "https://superprism.cn/login";
}

export default new EnvConfig()