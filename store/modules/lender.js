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
    LENDER_DETAIL(state, data) {
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
    getLenderListCode({ commit }, parames) {
      api.fetchLenderList(parames).then((res) => {
        let result = res.data[0];
        // if()
        commit(types.LENDER_LIST, result)
      })
    },
    getLenderList({ commit }, parames) {
      api.fetchLenderList(parames).then((res) => {
        // {
        //   utype: '',
        //   uname: '',
        //   mobile: '',
        //   email: '',
        //   bak: '',
        //   admin: false
        // }
        commit(types.LENDER_LIST, res.data)
      })
    },
    getLenderDetail({ commit }, parames) {
      api.getLenderDetail(parames).then((res) => {
        let result = res.data;
        commit(types.LENDER_LIST, result)
      })
    },
    postLenderAdd({ commit }, data) {
      api.postLender(data).then((res) => {
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
