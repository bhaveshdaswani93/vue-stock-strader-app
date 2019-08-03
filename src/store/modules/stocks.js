const state = {
  stocks: []
}

const mutations = {
  setStocks (state, stocks) {
    state.stocks = stocks
  },
  randomizeStocks (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round((stock.price * (Math.random() + 0.5)))
    })
  }
}

const getters = {
  stocks (state) {
    return state.stocks
  }
}

const actions = {
  initStocks ({ commit }, stocks) {
    commit('setStocks', stocks)
  },
  buyStock ({ commit }, order) {
    console.log(order)
    commit('portfolio/buyStock', order, { root: true })
  },
  randomizeStocks ({ commit }) {
    commit('randomizeStocks')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
