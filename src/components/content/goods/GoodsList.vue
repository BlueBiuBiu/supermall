<template>
    <div class="goods-list">
        <goods-list-item :key='index' v-for="(item,index) in goods" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 5px;
    }
</style>