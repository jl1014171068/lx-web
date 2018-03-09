<template>
  <div class='table-pagination'>
    <el-table :data="sourceData" border>
      <slot></slot>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleIndexChange" :page-size="pageSize" :page-sizes="[10, 20, 50]" :current-page="pageIndex" layout="total,sizes, prev, pager, next,jumper" :total="sourceTotal"></el-pagination>
  </div>
</template>
<style lang="scss">
// @import "./Breadcrumb.scss"

</style>
<script>
import SidebarConfig from '~/config/sidebar.config'
import utils from '~/utils/index'
import { mapMutations } from 'vuex'
import request from '@/plugins/axios'

export default {
  props: {
    url: String,
    params: Object
  },
  data() {
    return {
      sourceData: [],
      sourceTotal: 100,
      pageIndex: 1,
      pageSize: 10
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData(index, size) {
      let send = this.params || {},
          self = this;
      send.pageIndex = index || 1;
      send.pageSize = size || 20;
      let { data } = await request.get(this.url, this.params)
      self.sourceData = data.list
      self.sourceTotal= data.total;
    },
    handleSizeChange: function(size) {
      this.pageSize = size;
      this.pageIndex = 1;
      this.getData(this.pageIndex, size);
    },
    handleIndexChange: function(index) {
      this.pageIndex = index;
      this.getData(index, this.pageSize);
    }
  }
}

</script>
