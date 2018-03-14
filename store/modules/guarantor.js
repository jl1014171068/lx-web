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
    GUARANTOR_LIST(state, data) {
      state.lists = data
    },
    GUARANTOR_ADD: (state) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', null);
    },
    GUARANTOR_ADD_SUCCESS: (state) => {
      Vue.set(state.add, 'success', true);
    },
    GUARANTOR_ADD_FAILURE: (state, data) => {
      Vue.set(state.add, 'success', false);
      Vue.set(state.add, 'failure', data);
    },
  },
  actions: {
    getGrarantorList({ commit }, parames) {
      api.fetchGuarantorList().then((res) => {
        commit(types.GUARANTOR_LIST, res.list)
      })
    },
    postGrarantorAdd({ commit }, data) {
      api.postGuarantor(data).then((res) => {
        console.log(res)
        commit(types.GUARANTOR_ADD_SUCCESS)
      })
    }
  }
}
