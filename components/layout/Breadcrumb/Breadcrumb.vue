<template>
  <div id="Breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">平常金服</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in breadcumbList" :key='index'>
        <template><span>{{item}}</span></template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss">
@import "./Breadcrumb.scss"

</style>
<script>
import SidebarConfig from '~/config/sidebar.config'
import utils from '~/utils/index'
import { mapMutations } from 'vuex'

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
      let currname = this.$route.path || ''
      let data = utils.recrysuve(SidebarConfig, currname, 'path', 'menu', 'breadcrumb')[0]
      let result = data ? (data.speArray.length ? data.speArray : [data.parentNode.name, data.node.name]) : ['未知页面']
      this.breadcumbList = Array.from(new Set(result))
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }
}

</script>
