<template>
  <div class="col-sm-6">
    <div class="card">
        <div class="card-header">{{Stock.name}} <small>(Price:{{Stock.price}} | Quantity: {{ Stock.quantity }})</small></div>
      <div class="card-body">
          <form action="" class="form-inline">
              <input :class="{danger:insufficientQuantity}" v-model="quantity" type="number" placeholder="Quantity">
              <input type="button" :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(Number(quantity))" class="btn btn-success" @click="sellStock" :value="insufficientQuantity?'Not enough stock':'Sell'">
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
        insufficientQuantity() {
            return this.quantity > this.Stock.quantity
        }
    },
    methods:{
      sellStock() {
        const order = {
          stockId:this.Stock.id,
          stockPrice:this.Stock.price,
          quantity:this.quantity
      }
          console.log(order)
          this.$store.dispatch('portfolio/sellStock',order)
          this.quantity = 0
    }
  }
}
</script>



<style scoped>
    .card-header {
        background-color:#27c0c5;
    }
     .danger {
        border:1px solid red
    }
</style>


