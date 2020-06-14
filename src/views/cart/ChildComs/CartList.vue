<template>
    <div class="cart-list">
        <cart-list-item :key='index' 
        v-for='(item,index) in list' 
        :goods='item'></cart-list-item>
    </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'

export default {
    name: '',
    computed: {
        ...mapGetters({
            list: 'cartList'
        })
    },
    components: {
        CartListItem
    }
}
</script>

<style scoped>
    .cart-list {
        height: 100%;
    }
</style>
