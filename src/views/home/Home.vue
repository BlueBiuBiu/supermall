<template>
    <div id='home'>
        <nav-bar  class='home-nav'><div slot='center'>购物街</div></nav-bar>
        <Scroll class='content' ref='scroll'>
            <home-swiper :banner='banner'></home-swiper>
            <recommendView :recommend='recommend'></recommendView>
            <feature-view></feature-view>
            <home-tab-control class='home-tab-control' :title="['流行','新款','精选']" @tabControl="tabControl"></home-tab-control>
            <goods-list :goods="Goods[currentTab].list"></goods-list>
        </Scroll>
        <back-top @click.native="backTopClick"></back-top>
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
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getGoodsData} from 'network/home'
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
            currentTab: 'pop'
        }
    },
    components:{
        NavBar,
        RecommendView,
        HomeSwiper,
        FeatureView,
        HomeTabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    created() {
        this.getHomeMultidata(),
        this.getGoodsData('pop'),
        this.getGoodsData('new'),
        this.getGoodsData('sell')
    },
    methods: {
        /**
         * 跟事件监听相关的方法
         */
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
        },
        backTopClick(){
            this.$refs.scroll.bsscroll.scrollTo(0,0)
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
    .home-tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }
    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;
    }
</style>