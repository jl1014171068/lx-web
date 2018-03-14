import Vue from 'vue'
import api from '@/api'
import * as types from '@/store/mutation-types'


export default {
  state: {
    lists: [],
    add: {
      success: false,
      failure: null,
    },
    put: {
      success: false,
      failure: null,
    }
  },
  mutations: {
    LENDER_LIST(state, data) {
      state.lists = data
    },
    LENDER_ADD: (state) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', null);
    },
    LENDER_PUT: (state) => {
      Vue.set(state.put, 'success', false);
      Vue.set(state.put, 'failure', null);
    },
    LENDER_ADD_SUCCESS: (state) => {
      Vue.set(state.add, 'success', true);
    },
    LENDER_ADD_FAILURE: (state, data) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', data);
    },
  },
  actions: {
    getLenderList({ commit }, parames) {
      api.fetchLenderList().then((res) => {
        commit(types.LENDER_LIST, res.data)
      })
    },
    postLenderAdd({ commit }, data) {
      api.postLender(data).then((res) => {
        console.log(res)
        commit(types.LENDER_ADD_SUCCESS)
      })
    },
    putLender({ commit }, data) {
      api.putLender(data).then((res) => {
        commit(types.LENDER_PUT)
      })
    }
  }
}
