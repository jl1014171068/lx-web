import Vue from 'vue'
import api from '@/api'
import * as types from '@/store/mutation-types'


export default {
  state: {
    lists: [],
    add: {
      success: false,
      failure: null,
    }
  },
  mutations: {
    SP_LIST(state, data) {
      state.lists = data
    },
    SP_ADD: (state) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', null);
    },
    SP_ADD_SUCCESS: (state) => {
      Vue.set(state.add, 'success', true);
    },
    SP_ADD_FAILURE: (state, data) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', data);
    },
  },
  actions: {
    getSpList({ commit }, parames) {
      api.fetchSpList().then((res) => {
        commit(types.SP_LIST, res.list)
      })
    },
    postSpAdd({ commit }, data) {
      api.postSp(data).then((res) => {
        commit(types.SP_ADD_SUCCESS)
      })
    }
  }
}
