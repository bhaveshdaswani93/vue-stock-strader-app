import axios from 'axios'

export const actions = {
    loadData({commit}) {
        axios.get('/data.json')
        .then(res=>{
            const data = res.data;
            commit('stocks/setStocks', data.stocks)
            commit('portfolio/setPortfolio',data)
        })
        .catch(err=>console.log(err))
    }
}