<template>
    <div>
        <nav-bar  class='home-nav'><div slot='center'>购物街</div></nav-bar>
        <home-swiper :banner='banner'></home-swiper>
        <recommendView :recommend='recommend'></recommendView>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './ChildComps/HomeSwiper'
import RecommendView from './ChildComps/RecommendView'

import {getHomeMultidata} from 'network/home'
export default {
    data() {
        return {
            banner: [],
            recommend: []
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView
    },
    created() {
        getHomeMultidata().then(res => {
            this.banner = res.data.banner.list;
            this.recommend = res.data.recommend.list;
        })
    },
}
</script>

<style>
    .home-nav {
        background: var(--color-tint);
        color: white;
    }
</style>