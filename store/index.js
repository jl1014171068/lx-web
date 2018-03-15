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
import guarantor from './modules/guarantor';
import sp from './modules/sp';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = () => {
  return new Vuex.Store({
    modules: {
      outer,
      global,
      lender,
      guarantor,
      sp
    },
    strict: false,
    // strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}

export default store
