<template>
  <div id="Breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">平常金服</el-breadcrumb-item>
      <el-breadcrumb-item>{{breadcumbList.node.name}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{breadcumbList.parentNode.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss">
@import "./Breadcrumb.scss"

</style>
<script>
import SidebarConfig from '~/config/sidebar.config'
import utils from '~/utils/index'


export default {
  data() {
    return {
      breadcumbList: []
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      this.breadcumbList = utils.recrysuve(SidebarConfig, first.path, 'path', 'menu')[0]
    }
  }
}

</script>
