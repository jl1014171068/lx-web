<template>
  <div>
    <elTablePage :params="params" url="/guarantor/getInfoList">
      <el-table-column prop="code" width="250" label="资金方编码"></el-table-column>
      <el-table-column prop="name" width="250" label="公司名称"></el-table-column>
      <el-table-column prop="shortName" width="250" label="简称"></el-table-column>
      <el-table-column prop="type" width="250" label="类型"></el-table-column>
      <el-table-column prop="businessStartDate" width="250" label="营业起始日"></el-table-column>
      <el-table-column prop="businessEndDate" width="250" label="营业到期日"></el-table-column>
      <el-table-column prop="cooperativeStartDate" width="250" label="合作开始日"></el-table-column>
      <el-table-column prop="cooperativeEndDate" width="250" label="合作到期日"></el-table-column>
      <el-table-column prop="address" width="250" label="注册地址"></el-table-column>
      <el-table-column prop="regCapital" width="250" label="注册资本(万美金)"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="lookDetail(scope.row,'look')" type="text" size="small">查看</el-button>
          <el-button @click="lookDetail(scope.row,'update')" type="text" size="small">编辑</el-button>
          <el-button @click="lookDetail(scope.row,'bind')" type="text" size="small">绑定担保方</el-button>
        </template>
      </el-table-column>
    </elTablePage>
    <!-- 担保方绑定 -->
    <no-ssr>
      <modal name="bind-way" width="800px" height="auto" class='pch-form-modal' :clickToClose="false">
        <h3 class="pch-modal-title">绑定担保方</h3>
        <el-form class='pch-form' ref="form" :inline="true" label-position="right" label-width='130px'>
          <el-row :gutter="24">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="资方编码" for="id">
                <el-input :disabled="true" v-model="id" name="id" type="text" placeholder="资方编码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </modal>
    </no-ssr>
  </div>
</template>
<style lang="scss">
@import "./guarantor.scss"

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
      params: {},
      id:''
    }
  },
  computed: mapState({
    // lists: state => state.lender.lists,
  }),
  methods: {
    lookDetail(row, action) {
      let url;
      if (action == 'look') {
        url = "/guarantor/detail/" + row.code
        this.$router.push(url)
      } else if (action == 'update') {
        url = "/guarantor/update?code=" + row.code
        this.$router.push(url)
      } else {
        this.showModal()
      }
    },
    showModal() {
      this.$modal.show('bind-way');
    },
  },
  mounted() {
    // this.$store.dispatch('getOuterApplyDetail',{page:1,limit:10});
    // this.$store.dispatch('getLenderList',{page:1,limit:10});
  }
}

</script>
