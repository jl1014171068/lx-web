<template>
  <div id="sidebar">
    <div class="logo-con">
      <img src="~assets/img/common/admin-logo.png" alt="">
    </div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="defaultIndex" :default-active="activeIndex" @select="onSelect">
        <div v-for="(item, index) in SidebarData" v-bind:key='index'>
          <el-submenu :index="item.path">
            <template slot="title"><i class="lx-iconfont" v-html='item.unicode'></i> {{item.name}}</template>
            <div v-for="(item,key) in item.menu" :key='key'>
              <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
            </div>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>
<style lang="scss">
@import "./Sidebar.scss"
</style>
<script>
import SidebarConfig from '~/config/sidebar.config'
export default {
  created() {
    // console.log(SidebarConfig[0].menu)
    // console.log(this.$route.path);
  },
  data() {
    return {
      activeIndex: this.$route.path,
      defaultIndex: ['4'],
      SidebarData: SidebarConfig
    };
  },
  methods: {
    onSelect(index, indexPath) {
      console.log(index, indexPath);
      this.goPage(index);
    },
    goPage(url) {
      this.$router.push(url)
    }
  }
}

</script>
