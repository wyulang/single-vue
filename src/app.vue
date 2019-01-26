<template>
  <el-container>
    <el-aside width="230px">
      <el-menu class="menu-body" background-color="#2b333e" text-color="#fff" active-text-color="#fff">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">概况</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group class="menu-list">
            <el-menu-item class="menu-items" index="1-1">选项1</el-menu-item>
            <el-menu-item class="menu-items" index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
/* 252c34 */
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #fff;
  .menu-body {
    min-height: 800px;
    .menu-list {
      .menu-items {
        padding-left: 50px !important;
      }
      .is-active {
        background-color: #252c34 !important;
        &::before{
          background-color: #409eff;
          content: " ";
          width: 3px;
          float: left;
        }
      }
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  min-height: 100%;
}
</style>