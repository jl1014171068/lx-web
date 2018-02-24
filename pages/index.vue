<template>
  <section class="container">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span='24'>
        <el-card class="box-card">
          <img src="~/assets/img/admin-advert.png" alt="">
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import SidebarConfig from '~/config/sidebar.config'
export default {
  created() {
    // console.log(SidebarConfig)
  },
  components: {},
  layout: 'home'
}

</script>
<style>
.box-card {
  margin-bottom: 10px;
}
</style>
