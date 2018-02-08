<template>
  <div id="sidebar">
    <div class="logo-con">
      <img src="~assets/img/common/admin-logo.png"  alt="">
    </div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['4']">
        <el-submenu index="1">
          <template slot="title"><i class="lx-iconfont">&#xe603;</i>
          产品管理</template>
            <el-menu-item index="1-1">产品新增</el-menu-item>
            <el-menu-item index="1-2">产品查询</el-menu-item>
            <el-menu-item index="1-3">产品计算器</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="lx-iconfont">&#xe606;</i>
          贷款管理</template>
            <el-menu-item index="2-1">车贷申请</el-menu-item>
            <el-menu-item index="2-2">车贷变更</el-menu-item>
            <el-menu-item index="2-3">车贷查询</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="lx-iconfont">&#xe609;</i>
          系统配置</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="lx-iconfont">&#xe609;</i>
          合作机构</template>
            <el-menu-item index="4-1">车抵贷集团准入</el-menu-item>
            <el-menu-item index="4-2">车抵贷渠道准入</el-menu-item>
            <el-menu-item index="4-3">车抵贷展厅准入</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {}

</script>
<style lang="scss">
@import "./Sidebar.scss"

</style>
