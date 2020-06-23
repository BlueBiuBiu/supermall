<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="detailNav"></detail-nav-bar>
        <scroll class="content" ref='scroll' :probe-type='3' @scrollPosition='scrollPosition'>
            <detail-swiper :top-images='topImages' :iid='iid' @imgLoad="imgLoad"></detail-swiper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shop'></detail-shop-info>
            <detail-goods-info :goods-info="goodsInfo" @goodsLoad='goodsLoad'></detail-goods-info>
            <detail-goods-params ref='params' :goods-params='goodsParams'></detail-goods-params>
            <detail-comment-info ref="comment" :comment-info='commentInfo'></detail-comment-info>
            <goods-list ref='recommend' :goods='recommendImg'></goods-list>
        </scroll>
        <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
        <detail-bottom-nav @addCart='addToCart'></detail-bottom-nav>
        <!-- <toast :message='message' :is-show='isShow'></toast> -->
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/ChildComs/DetailNavBar'
import DetailSwiper from './ChildComs/DetailSwiper'
import DetailBaseInfo from './ChildComs/DetailBaseInfo'
import DetailShopInfo from './ChildComs/DetailShopInfo'
import DetailGoodsInfo from './ChildComs/DetailGoodsInfo'
import DetailGoodsParams from './ChildComs/DetailGoodsParams'
import DetailCommentInfo from './ChildComs/DetailCommentInfo'
import DetailBottomNav from './ChildComs/DetailBottomNav'
// import Toast from 'components/common/toast/Toast'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import {itemImgListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'

import {getDetailData, Goods, Shop, GoodsInfo, GoodsParams, getRecommendData} from 'network/detail'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            goodsInfo: {},
            goodsParams: {},
            commentInfo: {},
            recommendImg: [],
            titlePosition: [],
            getTitlePosition: null,
            currentIndex: 0,
            // message: '',
            // isShow: null
        }
    },
    mixins: [itemImgListenerMixin,backTopMixin],
    created() {
        this.iid = this.$route.params.iid
        //console.log(this.iid);
         getDetailData(this.iid).then(res => {
             //console.log(res);
             const data = res.result
             this.topImages = data.itemInfo.topImages
             //console.log(data.shopInfo);
             this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
             this.shop = new Shop(data.shopInfo)
             //console.log(this.shop);
             this.goodsInfo = new GoodsInfo(data.detailInfo)
             this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
             if(data.rate.cRate !==0){
                 this.commentInfo = data.rate.list[0]
             } 
         },
         this.getTitlePosition = debounce(() => {
             this.titlePosition = []
             this.titlePosition.push(0)
             this.titlePosition.push(this.$refs.params.$el.offsetTop)
             this.titlePosition.push(this.$refs.comment.$el.offsetTop)
             this.titlePosition.push(this.$refs.recommend.$el.offsetTop)
             this.titlePosition.push(Number.MAX_VALUE)
             //console.log(Number.MAX_VALUE); 
             //console.log(this.titlePosition);
         })
         ),
         getRecommendData().then(res => {
             //console.log(res);
             this.recommendImg = res.data.list
             
         })
        
    },
    mounted() {  
    },
    updated() {
        this.$refs.scroll.refresh()
    },
    destroyed() {
        this.$bus.$off('imageLoad', this.itemImgListener)
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        GoodsInfo,
        DetailGoodsInfo,
        DetailGoodsParams,
        DetailCommentInfo,
        GoodsList,
        DetailBottomNav,
        // Toast
    },
    methods: {
        addToCart(){
            //console.log('addToCart');
            const goodsList = {}
            goodsList.image = this.topImages[0]
            goodsList.title = this.goods.title;
            goodsList.desc = this.goods.desc;
            goodsList.nowPrice = this.goods.lowNowPrice;
            goodsList.iid = this.iid
            goodsList.count = 0

            //this.$store.commit('addToCart',goodsList)
            this.$store.dispatch('addToCart', goodsList).then(res => {
                console.log('加入购物车时res',res);
                
                this.$toast.show(res)
            })

            
        },
        imgLoad(){
            //console.log('----------');
            this.$refs.scroll.refresh()
        },
        goodsLoad(){
            //console.log('--------');          
            this.$refs.scroll.refresh()  
            this.getTitlePosition()
        },
        titleClick(index){
            //console.log(index);
            this.$refs.scroll.scrollTo(0, -this.titlePosition[index], 200)
        },
        scrollPosition(position){
            this.isShowBackTop = (-position.y) > 1000
            const positionY = -position.y
            const length = this.titlePosition.length-1          
            //第一种
            // for(let i=0; i<= length; i++)
            // {
            //     if((this.currentIndex !== i) && 
            //     ((i<length && this.titlePosition[i+1] > positionY && positionY >= this.titlePosition[i]) 
            //     || (length===i && positionY >= this.titlePosition[i])))
            //         {           
            //             this.currentIndex = i
            //             this.$refs.detailNav.currentIndex = this.currentIndex
            //         }
            // }
            //第二种(空间换时间
            for(let i=0; i<=length; i++)
            {
                 if((this.currentIndex !== i)&& (this.titlePosition[i+1] > positionY && positionY >= this.titlePosition[i]))
                     {           
                         this.currentIndex = i
                         this.$refs.detailNav.currentIndex = this.currentIndex
                     }
            }

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
        overflow: hidden;
    }
    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: white;
    } 
</style>