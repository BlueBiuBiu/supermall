<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list></cart-list>
        </scroll>    
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './ChildComs/CartList'
import CartBottomBar from './ChildComs/CartBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'
export default {
    components:{
        NavBar,
        CartList,
        Scroll,
        CartBottomBar
    },
    computed: {
        //可以将store里面的getters方法映射到局部计算属性
        //第一种用法
        //...mapGetters(['cartListLength'])
        //第二种用法
        ...mapGetters({
            length: 'cartListLength'
        })
    },
    activated() {
        //console.log('Cart-----');
        this.$refs.scroll.refresh()
    },
}
</script>

<style scoped>
    .cart {
        height: 100vh;
    }
    .cart-nav {
        background-color: var(--color-tint);
        color: white;
    }
    .content {
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }
</style>