<template>
  <div id="Breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">平常金服</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in breadcumbList" :key='index' >{{item}}</el-breadcrumb-item>
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
      breadcumbList: null
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      console.log(this.$route)
      let data = utils.recrysuve(SidebarConfig, first.path, 'path', 'menu', 'breadcrumb')[0]
      let result = data.speArray.length ? data.speArray : [data.node.name, data.parentNode.name]
      this.breadcumbList = Array.from(new Set(result))
    }
  }
}

</script>
