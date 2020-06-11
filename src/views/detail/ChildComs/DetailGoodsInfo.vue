<template>
    <div class="goods-info" v-if="Object.keys(goodsInfo).length !==0">
        <div class="info-desc">
            <div class="desc">{{ goodsInfo.desc }}</div>
        </div>
        <div class="info-key">{{ goodsInfo.key }}</div>
        <div v-for="(item,index) in goodsInfo.goodsList" :key='index'>
            <div class="info-list">
                <img :src="item" @load="goodsLoad" alt=""/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            counter: 0,
            goodsListLength: 0
        }
    },
    props: {
        goodsInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        goodsLoad() {
            this.counter += 1
            this.goodsListLength = this.goodsInfo.goodsList.Length
            //console.log(this.goodsInfo.goodsList.length);
            if(this.count === this.goodsListLength){
                this.$emit('goodsLoad')
            }
            
        }
    },
}
</script>

<style scoped>
    .goods-info {
        padding: 20px 5px;
        border-bottom: 5px solid #d8d4d4;
    }

    .info-desc .desc {
        font-size: 14px;
        padding: 15px 0;
    }
    .info-key {
        font-size: 15px;
        margin: 10px 15px;
        color: #333333;
    }

    .info-list img {
        width: 100%;
    }
</style>
