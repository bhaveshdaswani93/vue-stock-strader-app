import Vue from 'vue'
import Vuex from 'vuex'

import Stocks from './modules/stocks'
import Portfolio from './modules/portfolio'
import { actions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks: {
      namespaced: true,
      ...Stocks
    },
    portfolio: {
      namespaced: true,
      ...Portfolio
    }
  },
  actions
})
