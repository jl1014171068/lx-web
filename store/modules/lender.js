import Vue from 'vue'
import api from '@/api'
import * as types from '@/store/mutation-types'


export default {
  state: {
     lists: []
  },
  mutations: {
    LENDER_LIST(state, data) {
      state.lists = data
    }
  },
  actions: {
    getLenderList({ commit },parames) {
      api.fetchLenderList().then((res) => {
        commit(types.LENDER_LIST, res.list)
      })
    }
  }
}
