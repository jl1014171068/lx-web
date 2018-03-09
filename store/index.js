/**
 * store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';


import * as actions from './actions';
import * as getters from './getters';
import global from './common/global';


import outer from './modules/outer';
import lender from './modules/lender';



Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = () => {
  return new Vuex.Store({
    modules: {
      outer,
      global,
      lender
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}


export default store
