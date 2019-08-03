import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Stocks from './views/Stocks.vue'

export const routes = [
  { path: '/', component: Home,name:'home' },
  { path: '/portfolio', component: Portfolio, name:'portfolio' },
    { path: '/stocks', component: Stocks, name: 'stocks' }
]
