<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{name:'home'}" >Stock Trader</router-link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link class="nav-item" tag="li" active-class="active" :to="{name:'portfolio'}"><a class="nav-link">Portfolio</a></router-link>
      <router-link class="nav-item" tag="li" active-class="active" :to="{name: 'stocks'}"><a class="nav-link">Stocks</a></router-link>
      
      
      
    </ul>
    <strong>Funds:{{ funds | filter-cash }}</strong>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" @click="randomizeData" href="#">End Day</a>
      </li>
      <li class="nav-item dropdown" @click="toShowDropdown = !toShowDropdown" :class="{show:toShowDropdown}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save &#38; Load
        </a>
        <div class="dropdown-menu" :class="{show:toShowDropdown}" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" @click="saveData" href="#">Save</a>
          <a class="dropdown-item" @click="loadData" href="#">Load</a>
        </div>    
      </li>
    </ul>
    
  
  </div>
</nav>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios'
export default {
  computed:{
    funds() {
      return this.$store.getters['portfolio/funds']
    }
  },
  methods:{
    randomizeData() {
      this.randomizeStocks()
    },
    ...mapActions('stocks',['randomizeStocks']),
    saveData() {
      const data = {
        funds:this.$store.getters['portfolio/funds'],
        portfolioStocks:this.$store.getters['portfolio/stocks'],
        stocks:this.$store.getters['stocks/stocks']
      }
      console.log(data);
      axios.put('/data.json',data)
    },
    loadData() {
      this.$store.dispatch('loadData')
    }
  },
  data() {
    return {
      toShowDropdown:false
    }
  }
}
</script>
