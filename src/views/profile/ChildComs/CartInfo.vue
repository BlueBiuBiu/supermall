<template>
    <div>
        <div class="cart">
            <img src="~assets/img/profile/cart.svg" alt="">
            <p>我的购物车</p>
        </div>
        <div class="cart-app">
            <img src="~assets/img/profile/shopping.svg" alt="">
            <p>下载购物APP</p>
        </div>
    </div>
</template>

<script>
export default {
    name: ''
}
</script>

<style scoped>
    .cart {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .cart p {
        padding-left: 10px;
    }
    .cart img {
        width: 20px;
        height: 20px;
    }
    .cart-app {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .cart-app p {
        padding-left: 10px;
    }
    .cart-app img {
        width: 20px;
        height: 20px;
    }
</style>
