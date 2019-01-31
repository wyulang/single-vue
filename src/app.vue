<template>
  <el-container>
    <el-aside width="230px">
      <section class="logo flex jc-c pt30 pb40">
        <img src="./assets/logo.png" alt="">
      </section>
      <el-menu class="menu-body" background-color="#2b333e" :default-active="active" @select="handleOpen" text-color="#fff" active-text-color="#fff">
        <div v-for="(item, index) in menuList" :key="index">
          <el-menu-item v-if="!item.children" class="menu-tops" :index="item.name">
            <i :style="{'background-image':'url('+getIcon(item.name)+')'}" class="menu-icons"></i>
            <span class="pl5" slot="title">{{item.meta.title}}</span>
          </el-menu-item>
          <el-submenu v-if="item.children" :index="item.name">
            <template slot="title">
              <i :style="{'background-image':'url('+getIcon(item.name)+')'}" class="menu-icons"></i>
              <span class="pl5">{{item.meta.title}}</span>
            </template>
            <el-menu-item-group class="menu-list">
              <el-menu-item class="menu-items" v-for="(v, crr) in item.children" :key="crr" :index="v.name">{{v.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="flex ai-c">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index"><span class="fb">{{item}}</span></el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="padding:10px 15px;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { memus } from "./router.js";
export default {
  data() {
    return {
      menuList: [],
      active: "survey",
      activeList: ["survey"],
      breadcrumb: []
    };
  },
  methods: {
    getIcon(name) {
      return require(`./assets/${name}${
        this.active == name ? "-select" : "-no"
      }.png`);
    },
    handleOpen(key, keyPath) {
      this.active = keyPath[0];
      this.activeList = [];
      this.activeList = keyPath;
      this.selectMenus();
      this.$router.push({ name: key });
    },
    selectMenus() {
      this.breadcrumb = [];
      this.menuList.forEach((v, index) => {
        if (this.activeList.includes(v.name)) {
          this.breadcrumb.push(v.meta.title);
        }
        if (v.children) {
          v.children.forEach(item => {
            if (this.activeList.includes(item.name)) {
              this.breadcrumb.push(item.meta.title);
            }
          });
        }
      });
    }
  },
  created() {
    this.menuList = memus;
    let m = window.location.hash.replace("#/", "");
    this.active = (m && m.split("/")[0]) || "survey";
    this.activeList = (m && m.split("/")) || ["survey"];
    this.selectMenus();
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
  background-color: #2b333e;
  .logo {
    background-color: #2b333e;
    img {
      width: 160px;
      height: 40px;
    }
  }
  .menu-body {
    min-height: 800px;
    .menu-icons {
      width: 33px;
      height: 33px;
      background-size: 100% !important;
      display: inline-block;
    }
    .menu-tops {
      &.is-active {
        background-color: #252c34 !important;
        position: relative;
        &::before {
          background-color: #409eff;
          content: " ";
          width: 3px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
        }
      }
    }
    .menu-list {
      .menu-items {
        padding-left: 58px !important;
      }
      .is-active {
        background-color: #252c34 !important;
        position: relative;
        &::before {
          background-color: #409eff;
          content: " ";
          width: 3px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
        }
      }
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  min-height: 100%;
}

.serch {
  padding: 20px 30px;
}
.tr-pb20 {
  td {
    padding-bottom: 20px;
  }
}
.tr-blank{
  td{
    height: 10px;
  }
}
.tr-head {
  td {
    background-color: #f7f8fc;
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
}
.tr-check{
  td{
     padding: 10px;
     background-color: #ecf6ff;
     border-left: #ecf6ff 1px solid;
     border-right: #ecf6ff 1px solid;
  }
}
.tr-body{
  td{
     padding: 10px;
     border-bottom: 1px #eee solid;
  }
}
.list-body {
  padding: 20px 30px;
}
</style>