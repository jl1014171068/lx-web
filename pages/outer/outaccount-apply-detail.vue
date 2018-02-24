<template>
  <div class='content'>
    <div class='content-search_bar'>
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <template slot="prepend"><i class="lx-iconfont">&#xe660;</i></template>
        <el-button slot="append">查询</el-button>
      </el-input>
    </div>
    <div class="content-tab_content">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="200">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="200">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="200">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="200">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="500">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="200">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss">
@import "./outaccount-apply-detail.scss"

</style>
<script>
export default {
  data() {
    return {
      input5: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  created() {
    this.getTabData()
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getTabData() {
      this.$ajax.post('/outaccount/apply/detail', {
          isAuth: null
        })
        .then(res => {
          if (res.errorCode === 0) {
            this.$store.commit('SET_AUTH', null)
          }
        })
        .catch(err => {
          console.info(err + '/api/logout')
        })
    }
  }
}

</script>
