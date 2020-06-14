<template>
    <div id='home'>
        <nav-bar  class='home-nav'><div slot='center'>购物街</div></nav-bar>
        <home-tab-control ref='homeTabControl1'
                :title="['流行','新款','精选']" 
                @tabControl="tabControl" :class="{isShow: tabShow}" v-show="tabShow"/>
        <Scroll class='content' ref='scroll' 
            :probe-type='3'
            @scrollPosition="scrollPosition"
            :pull-up-load="true"
            @pullingUp="loadMore">
            <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad'></home-swiper>
            <recommendView :recommend='recommend'></recommendView>
            <feature-view></feature-view>
            <home-tab-control ref='homeTabControl2'
                :title="['流行','新款','精选']" 
                @tabControl="tabControl"> 
            </home-tab-control>
            <goods-list :goods="Goods[currentTab].list"></goods-list>
        </Scroll>
        <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './ChildComps/RecommendView'
import FeatureView from './ChildComps/FeatureView'

import HomeSwiper from './ChildComps/HomeSwiper'
import HomeTabControl from 'components/content/homeTabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
//import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getGoodsData} from 'network/home'

import {itemImgListenerMixin,backTopMixin} from 'common/mixin'

import {debounce} from 'common/utils'
export default {
    data() {
        return {
            banner: [],
            recommend: [],
            Goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
            },
            currentTab: 'pop',
            //isShowBackTop: false,
            tabOffsetTop: 0,
            tabShow: false,
            saveY: 0
        }
    },
    mixins: [itemImgListenerMixin,backTopMixin],
    components:{
        NavBar,
        RecommendView,
        HomeSwiper,
        FeatureView,
        HomeTabControl,
        GoodsList,
        Scroll,
        //BackTop
    },
    created() {
        this.getHomeMultidata(),
        this.getGoodsData('pop'),
        this.getGoodsData('new'),
        this.getGoodsData('sell')
    },
    activated() {
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        
    },
    deactivated() {
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        this.$bus.$off('imageLoad', this.itemImgListener)
        //console.log(this.$refs.scroll.bsscroll.y);
        this.saveY = this.$refs.scroll.getScrollY()
    },
    mounted() {
    },
    methods: {
        /**
         * 跟事件监听相关的方法
         */
        swiperImageLoad(){
            //console.log('-----');
            //console.log(this.$refs.homeTabControl.$el.offsetTop);
            //$el可以取到组件里面的所有元素
            this.tabOffsetTop = this.$refs.homeTabControl2.$el.offsetTop
            
        },
        tabControl(index){
            switch(index){
                case 0:
                    this.currentTab = 'pop'
                    break
                case 1:
                    this.currentTab = 'new'
                    break
                case 2:
                    this.currentTab = 'sell'
                    break
            }
            this.$refs.homeTabControl1.currentIndex = index
            this.$refs.homeTabControl2.currentIndex = index
        },
        // backTopClick(){
        //     this.$refs.scroll.scrollTo(0,0)
        // },
        scrollPosition(position){
            //console.log(position);
            this.isShowBackTop = (-position.y) > 1500
            this.tabShow = (-position.y) > this.tabOffsetTop
        },
        loadMore(){
            //console.log('------');
            
            this.getGoodsData(this.currentTab)
            this.$refs.scroll.finishPullUp()
        },
        /**
         * 跟网络请求相关的方法
         */
        getHomeMultidata(){
            getHomeMultidata().then(res => {
            this.banner = res.data.banner.list;
            this.recommend = res.data.recommend.list;
        })
        },
        getGoodsData(type){
            const page = this.Goods[type].page + 1;
            getGoodsData(type,page).then(res => {
            this.Goods[type].list.push(...res.data.list)
            this.Goods[type].page += 1
        })
        }
    },
}
</script>

<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }
    .home-nav {
        background: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 9;
    }
    /* .home-tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    } */
    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;
        overflow: hidden;
    }
    .isShow {
        position: relative;
        z-index: 9;
    }
</style>