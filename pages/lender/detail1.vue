<template>
  <div class="pch-detail">
    <titleField>
      <h1 slot='title' class="leg-text">开户</h1>
      <div slot='con'>
        <el-row :gutter="24">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
            <div class="pch-detail-item">
              <div class="pch-detail-name">
                活动名称:
              </div>
              <div class="pch-detail-con">
                活动内容
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </titleField>
  </div>
</template>
<script>
import Vue from 'vue'
import titleField from '~/components/common/title-field/title-field'
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: mapState({
    // 映射 this.count 为 store.state.count
    form : state => state.lender.lists
  }),
  created() {
    this.$store.dispatch('getLenderDetail',this.$route.query.code )
  },
  components: {
    titleField
  }
}

</script>
