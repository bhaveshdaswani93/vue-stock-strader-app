<template>
  <div class="home">
    <h1>Welcome to stock trader app</h1>
    <h6>Sell and Trade</h6>
    <h6>Your funds are: {{ funds | filter-cash }}</h6>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapGetters('portfolio',['funds'])
  }
}
</script>
