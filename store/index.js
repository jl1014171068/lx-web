/**
 * store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';


import outer from './modules/outer';
import * as actions from './actions';
import * as getters from './getters';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = () => {
  return new Vuex.Store({
    modules: {
      outer
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}


export default store
