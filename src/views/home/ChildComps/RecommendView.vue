<template>
    <div class='recommend'>
        <div :key='index' v-for="(item,index) in recommend" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommend: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        font-size: 12px;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 8px solid rgb(212, 205, 205);
    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item img {
        width: 65px;
        margin-bottom: 5px;
    }
</style>