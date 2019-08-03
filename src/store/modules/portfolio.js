const state = {
  stocks: [],
  funds: 10000
}

const mutations = {
  buyStock (state, { stockId, quantity, stockPrice }) {
    //   return;
    let record = state.stocks.find(element => element.id === stockId)
    if (record) {
      let recordIndex = state.stocks.indexOf(record)
      record.quantity += Number(quantity)
      state.stocks[recordIndex] = record
    //   state.stocks = state.stocks.map(element => {
    //     if (element.id === record.id) {
    //       element.quantity = record.quantity
    //     }
    //     return element
    //   })
    } else {
      state.stocks.push({
        id: stockId,
        quantity: Number(quantity)
      })
    }
    state.funds -= quantity * stockPrice
  },
  sellStock (state, { stockId, quantity, stockPrice }) {
    let record = state.stocks.find(element => element.id === stockId)
    let recordIndex = state.stocks.indexOf(record)
    if (record.quantity > quantity) {
      record.quantity -= Number(quantity)
      state.stocks[recordIndex] = record
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += quantity * stockPrice
  },
  setPortfolio (state, portfolio) {
    state.funds = portfolio.funds
    portfolio.portfolioStocks ? state.stocks = portfolio.portfolioStocks:[]
  }
}

const actions = {
  sellStock ({ commit }, order) {
    commit('sellStock', order)
  }
}

const getters = {
  stocks (state, getters, rootState, rootGetters) {
    return state.stocks.map(element => {
      let record = rootGetters['stocks/stocks'].find(stock => stock.id === element.id)
      return {
        'id': element.id,
        'quantity': Number(element.quantity),
        'price': record.price,
        'name': record.name
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
