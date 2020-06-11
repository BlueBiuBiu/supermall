<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref='scroll'>
            <detail-swiper :top-images='topImages' :iid='iid'></detail-swiper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shop'></detail-shop-info>
            <detail-goods-info :goods-info="goodsInfo" @goodsLoad='goodsLoad'></detail-goods-info>
            <detail-goods-params :goods-params='goodsParams'></detail-goods-params>
        </scroll>
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/ChildComs/DetailNavBar'
import DetailSwiper from './ChildComs/DetailSwiper'
import DetailBaseInfo from './ChildComs/DetailBaseInfo'
import DetailShopInfo from './ChildComs/DetaShopInfo'
import DetailGoodsInfo from './ChildComs/DetailGoodsInfo'
import DetailGoodsParams from './ChildComs/DetailGoodsParams'

import Scroll from 'components/common/scroll/Scroll'

import {getDetailData, Goods, Shop, GoodsInfo, GoodsParams} from 'network/detail'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            goodsInfo: {},
            goodsParams: {}
        }
    },
    created() {
        this.iid = this.$route.params.iid
        //console.log(this.iid);
         getDetailData(this.iid).then(res => {
             console.log(res);
             const data = res.result
             this.topImages = data.itemInfo.topImages
             //console.log(data.shopInfo);
             this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
             this.shop = new Shop(data.shopInfo)
             //console.log(this.shop);
             this.goodsInfo = new GoodsInfo(data.detailInfo)
             this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
             
         })
        
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        GoodsInfo,
        DetailGoodsInfo,
        DetailGoodsParams
    },
    methods: {
        goodsLoad(){
            console.log('--------');
            
            this.$refs.scroll.refresh()
        }
    },
}
</script>

<style>
    #detail {
        position: relative;
        z-index: 9;
        background-color: white;
        height: 100vh;
    }
    .content {
        height: calc(100% - 44px);
    }
    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: white;
    } 
</style>