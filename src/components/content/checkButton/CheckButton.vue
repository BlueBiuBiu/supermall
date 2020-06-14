<template>
    <div class="check-button" :class="{checked: isCheck}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        isCheck: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .check-button {
        border: 2px solid #dbd9d9;
        border-radius: 50%;
    }
    .checked {
        background-color: red;
        border: 1px solid red;
    }
</style>
