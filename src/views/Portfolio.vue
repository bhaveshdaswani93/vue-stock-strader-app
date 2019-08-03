<template>
    <div class="row">
        <app-stock v-for="(Stock,index) in Stocks" :Stock="Stock" :key="index"> </app-stock>
    </div>
</template>

<script>
import Stock from "./../components/portfolio/Stock.vue";
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters('portfolio',{Stocks:'stocks'})
    },
    components:{
        appStock:Stock
    }
}
</script>
