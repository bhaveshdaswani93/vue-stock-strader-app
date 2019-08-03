<template>
  <div class="col-sm-6">
    <div class="card">
        <div class="card-header">{{Stock.name}} <small>(Price:{{Stock.price}})</small></div>
      <div class="card-body">
          <form action="" class="form-inline">
              <input v-model="quantity" :class="{danger:insufficientFund}" type="number" placeholder="Quantity">
              <input type="button" :disabled="insufficientFund  ||quantity<=0 || !Number.isInteger(Number(quantity))" class="btn btn-success" @click="buyStock" :value="insufficientFund?'Low Fund':'Buy'">
          </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['Stock'],
    data() {
      return {
        quantity:0
      }
    },
    computed:{
      funds() {
        return this.$store.getters['portfolio/funds']
      },
      insufficientFund() {
        return this.quantity * this.Stock.price > this.funds
      }
    },
    
    methods:{
      buyStock() {
        const order = {
          stockId:this.Stock.id,
          stockPrice:this.Stock.price,
          quantity:this.quantity
      }
          console.log(order)
          this.$store.dispatch('stocks/buyStock',order)
          this.quantity = 0
    }
  }
}
</script>



<style scoped>
    .card-header {
        background-color:#62df62;
    }
    .danger {
        border:1px solid red
    }
</style>


