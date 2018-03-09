<template>
  <div>
    <elTablePage :params="params" url="/lender/search">
      <el-table-column prop="code" width="250" label="资金方编码"></el-table-column>
      <el-table-column prop="name" width="250" label="资金方名称"></el-table-column>
      <el-table-column prop="shortName" width="250" label="简称"></el-table-column>
      <el-table-column prop="type" width="250" label="类型"></el-table-column>
      <el-table-column prop="bussBegin" width="250" label=""></el-table-column>
      <el-table-column prop="bussEnd" width="250" label=""></el-table-column>
      <el-table-column prop="togeBegin" width="250" label=""></el-table-column>
      <el-table-column prop="togeEnd" width="250" label=""></el-table-column>
      <el-table-column prop="address" width="250" label="注册地址"></el-table-column>
      <el-table-column prop="regCapital" width="250" label="注册资本(万美金)"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="lookDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="lookDetail(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="lookDetail(scope.row)" type="text" size="small">绑定担保方</el-button>
        </template>
      </el-table-column>
    </elTablePage>
  </div>
</template>
<style lang="scss">
@import "./lender.scss"

</style>
<script>
import elTablePage from '@/components/common/table-pagination/table-pagination'
import { mapState } from 'vuex';
export default {
  components: {
    elTablePage
  },
  created() {},
  data() {
    return {
      params: {}
    }
  },
  computed: mapState({
    // lists: state => state.lender.lists,
  }),
  methods: {
    lookDetail(row) {
      if (row.myTask.status == 'todo') {
        let url = "/outer/apply/detail?code=" + row.id + "&taskId=" + row.myTask.id;
        this.$router.push(url)
      }
      console.log(row.myTask);
    }
  },
  mounted() {
    // this.$store.dispatch('getOuterApplyDetail',{page:1,limit:10});
    // this.$store.dispatch('getLenderList',{page:1,limit:10});
  }
}

</script>
