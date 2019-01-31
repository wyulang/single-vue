<template>
  <div>
    <section class="serch bc-fff">
      <div class="mb25">
        <el-button size="mini" type="primary">创建小程序</el-button>
      </div>
      <div class="mb25">
        <table class="w-all">
          <tr class="tr-pb20">
            <td>
              <div class="flex ai-c">
                <span class="w-80">小程序名称：</span>
                <el-input size="mini" class="w-150" v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex ai-c">
                <span class="w-80">所属模板：</span>
                <el-input size="mini" class="w-150" v-model="input" placeholder="请输入所属模板"></el-input>
              </div>
            </td>
            <td>
              <div class="flex ai-c">
                <span class="w-80">小程序编号：</span>
                <el-input size="mini" class="w-150" v-model="input" placeholder="请输入小程序编号"></el-input>
              </div>
            </td>
            <td>
              <div class="flex ai-c">
                <span class="w-80">创建方式：</span>
                <el-input size="mini" class="w-150" v-model="input" placeholder="请输入创建方式"></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="flex ai-c">
                <span class="w-80">版本更新：</span>
                <el-input size="mini" class="w-150" v-model="input" placeholder="请输入版本更新"></el-input>
              </div>
            </td>
            <td>
              <el-button size="mini" type="primary">搜 索</el-button>
            </td>
          </tr>
        </table>
      </div>
    </section>

    <section class="list-body bc-fff mt10">
      <div class="mb20">
        <el-button size="mini">关闭</el-button>
        <el-button size="mini">续费</el-button>
        <el-button size="mini">更新</el-button>
        <el-button size="mini">删除</el-button>
        <el-button size="mini">备注</el-button>
      </div>

      <table class="w-all">
        <thead>
          <tr class="tr-head">
            <td class="wi-200">
              <el-checkbox></el-checkbox><span class="pl15">小程序</span>
            </td>
            <td>运行状态</td>
            <td>审核版本</td>
            <td>登录账号</td>
            <td>密码</td>
            <td>到期时间</td>
            <td>操作</td>
          </tr>
        </thead>

        <tbody v-for="(item, index) in list" :key="index">
          <tr class="tr-blank">
            <td colspan="7"></td>
          </tr>
          <tr class="tr-check">
            <td colspan="7">
              <el-checkbox class="fl"></el-checkbox>
              <span class="pl17 wi-200 fl pr30">编号：{{item.appmodelId}}</span>
              <span class="fl">创建时间：{{item.createTime}}</span>
            </td>
          </tr>
          <tr class="tr-body">
            <td class="bl">
              <div class="flex ai-c">
                <img class="wh55" :src="item.logo" alt="">
                <div class="pl15">
                  <span class="block pb5">{{item.miniName}}</span>
                  <span>{{item.modelTypeClass}}</span>
                </div>
              </div>
            </td>
            <td>运行状态</td>
            <td>审核版本</td>
            <td>登录账号</td>
            <td>密码</td>
            <td>到期时间</td>
            <td class="br">操作</td>
          </tr>
        </tbody>
       
      </table>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      list: [],
      serch: {
        page: 1,
        size: 10
      }
    };
  },
  methods: {
    ...mapActions(["getWxList"]),
    initData() {
      this.list=[];
      this.getWxList(this.serch).then(res => {
        if (res.code == 100) {
          this.list = res.object;
        }
      });
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="less" scoped>
</style>
