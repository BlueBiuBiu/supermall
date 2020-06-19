<template>
    <div class="info-list">
        <category-info-item :key='index' v-for="(item,index) in categoryInfo" :goods-item="item"></category-info-item>
    </div>
</template>

<script>
import CategoryInfoItem from './CategoryInfoItem'
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
        CategoryInfoItem
    }
}
</script>

<style scoped>
     .info-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 5px;
    }
</style>
