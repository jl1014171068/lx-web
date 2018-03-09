import Vue from 'vue'
import api from '@/api'
import * as types from '@/store/mutation-types'


export default {
  state: {
      breadcumbList: []
  },
  mutations: {
    BREADCUMB_LIST(state, data) {
      state.breadcumbList = data
      // Vue.set(state.breadcumbList, data);
    }
  },
  actions: {
    // getBreadcumbList({ commit }) {
      // commit(types.BREADCUMB_LIST, '111')
      // api.fetchList().then((res) => {
      // let matched = this.$route.matched.filter(item => item.name)
      // console.log(matched)
      // const first = (matched[0] && matched[0].path) || ''
      // let data = utils.recrysuve(SidebarConfig, first, 'path', 'menu', 'breadcrumb')[0]
      // if (!data) return false;
      // let result = data.speArray.length ? data.speArray : [data.node.name, data.parentNode.name]
      // this.breadcumbList = Array.from(new Set(result))
        // commit(types.BREADCUMB_LIST, commit)
      // })
    // }
  }
}
