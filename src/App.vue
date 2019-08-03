<template>
  <div class="container" >
    <app-header></app-header>
    <div class="row">
      <div class="col">
        <transition name='slide' mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
    
  </div>
</template>

  <script>
  import Header from "./components/Header.vue";
  import Stocks from "./data/stocks";
  export default {
    components:{
      appHeader:Header
    },
    created(){
      this.$store.dispatch('stocks/initStocks',Stocks)
    }
  }
  </script>
  

<style scoped>
  body {
    padding:30px;
  }

  .slide-enter-active {
    animation:slide-in 0.5s forwards
  }

  .slide-leave-active {
    animation: slide-out 0.5s forwards;
  }


  @keyframes slide-in {
    from {
      opacity:0;
      transform: translateY(-30px)
    }
    to {
      opacity:1;
      transform:translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      opacity:1;
      /* transform: translateY(-30px) */
    }
    to {
      opacity:0;
      transform:translateY(-30px);
    }
  }

</style>
