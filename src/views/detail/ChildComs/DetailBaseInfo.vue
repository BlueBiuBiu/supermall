<template>
    <div class="base-info" v-if="Object.keys(goods).length !==0">
        <div class='info-title'>{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span class="discount" :style="{backgroundColor: goods.discountBgColor}">
                {{goods.discount}}
            </span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" 
                v-for="index in goods.services.length - 1"
                :key="index">
                <img :src="goods.services[index - 1].icon" alt="" />
                <span>{{ goods.services[index - 1].name }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        goods: {
            type: Object,
            dafault(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .base-info {
        width: 100%;
        margin-top: 15px;
        padding: 0 10px;
        color: #999999;
    }

    .info-title {
        text-align: justify;
        color: #222222;
    }

    .info-price {
        margin-top: 10px;
    }

    .info-price .new-price {
        font-size: 18px;
        color: #ff5777;
    }

    .info-price .old-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
    }

    .info-price .discount {
        font-size: 12px;
        position: relative;
        top: -4px;
        margin-left: 5px;
        padding: 3px 6px;
        color: #ffffff;
        border-radius: 8px;
        background-color: #ff5777;
    }

    .info-other {
        font-size: 13px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        margin-top: 11px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }
    .info-service {
        line-height: 35px;
        display: flex;
        justify-content: space-around;
    }

    .info-service-item img {
        position: relative;
        top: 2px;
        width: 14px;
        height: 14px;
    }
    .info-service-item span {
        font-size: 13px;
        margin-left: 5px;
        color: #333333;
    }
</style>