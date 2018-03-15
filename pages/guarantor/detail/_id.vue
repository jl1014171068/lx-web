<template>
  <div class="pch-detail">
    <titleField>
      <h1 slot='title' class="leg-text">开户</h1>
      <div slot='con'>
        <el-row :gutter="24">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,index) of detail" :key='index'>
            <div class="pch-detail-item">
              <div class="pch-detail-name">
                {{item}}：
              </div>
              <div class="pch-detail-con">
                {{form[index]||'null'}}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </titleField>
    <titleField v-if="form.contactsList">
      <h1 slot='title' class="leg-text">联系人信息</h1>
      <div slot='con'>
        <el-table :data="form.contactsList" style="width: 100%" class='pch-table' stripe>
          <el-table-column prop="realName" label="姓名" width="250"></el-table-column>
          <el-table-column prop="mobile" label="联系电话" width="250"></el-table-column>
          <el-table-column prop="email" label="电子邮箱" width="250"></el-table-column>
          <el-table-column prop="remark" label="备注" width="250"></el-table-column>
        </el-table>
      </div>
    </titleField>
    <titleField>
      <h1 slot='title' class="leg-text">管理员信息</h1>
      <div slot='con'>
        <el-row :gutter="24">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" >
            <div class="pch-detail-item">
              <div class="pch-detail-name">
                手机号：
              </div>
              <div class="pch-detail-con">
                姓名
              </div>
            </div>
          </el-col>
           <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" >
            <div class="pch-detail-item">
              <div class="pch-detail-name">
                手机号：
              </div>
              <div class="pch-detail-con">
                姓名
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </titleField>
    <titleField>
      <h1 slot='title' class="leg-text">营业执照</h1>
      <div slot='con'>
        <el-row :gutter="24">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,index) in 3" :key='index'>
            <div class="pch-detail-item">
              <img src="http://temp.im/200x200"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </titleField>
    <titleField>
      <h1 slot='title' class="leg-text">联系人信息</h1>
      <div slot='con'>
        <el-table :data="form.contactsList" style="width: 100%" class='pch-table' stripe>
          <el-table-column prop="realName" label="姓名" width="250"></el-table-column>
          <el-table-column prop="mobile" label="联系电话" width="250"></el-table-column>
          <el-table-column prop="email" label="电子邮箱" width="250"></el-table-column>
          <el-table-column prop="remark" label="备注" width="250"></el-table-column>
        </el-table>
      </div>
    </titleField>
  </div>
</template>
<script>
import Vue from 'vue'
import titleField from '~/components/common/title-field/title-field'
import { mapState } from 'vuex'
export default {
  validate({ params, store }) {
    return true
    // return (!!params.article_id && !Object.is(Number(params.article_id), NaN))
  },
  fetch({ store, params, error }) {
    // return store.dispatch('getLenderDetail', params).catch(err => {
    //   error({ statusCode: 404, message: '众里寻他 我已不再' })
    // })
  },
  data() {
    return {
      detail: {
        code: "资方编码",
        name: "资方名称",
        shortName: "资方简称",
        type: "类型",
        cardType: "证件类型",
        cardNo: "证件号码",
        businessStartDate: "营业起始日",
        businessEndDate: "营业到期日",
        cooperativeStartDate: "合作开始日",
        cooperativeEndDate: "合作到期日",
        email: "电子邮件",
        regCapital: "资产资本（万美元）",
        undefined: "法人",
        province: "注册地址",
      }
    }
  },
  computed: mapState({
    // 映射 this.count 为 store.state.count
    form: state => state.lender.lists
  }),
  created() {
    console.log(this.$route.params)
    // console.log(params)
    // console.log(this.$route.query.code)
    // console.log(params)
    this.$store.dispatch('getLenderDetail', this.$route.params.id)
  },
  components: {
    titleField
  },
  layout: 'detail'
}

</script>
