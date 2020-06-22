<template>
    <div class="info-list">
        <category-top-info-item :key='index' v-for="(item,index) in categoryInfo" :goods-item="item"></category-top-info-item>
    </div>
</template>

<script>
import CategoryTopInfoItem from './CategoryTopInfoItem'
export default {
    name: '',
    props: {
        categoryInfo: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        CategoryTopInfoItem
    }
}
</script>

<style scoped>
     .info-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 5px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
</style>
