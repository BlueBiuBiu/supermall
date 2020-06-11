<template>
    <div>
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-images='topImages' :iid='iid'></detail-swiper>
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/ChildComs/DetailNavBar'
import DetailSwiper from './ChildComs/DatailSwiper'

import {getDetailData} from 'network/detail'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: []
        }
    },
    created() {
        this.iid = this.$route.params.iid
        console.log(this.iid);
         getDetailData(this.iid).then(res => {
             //console.log(res);
             this.topImages = res.result.itemInfo.topImages
         })
        
    },
    components: {
        DetailNavBar,
        DetailSwiper
    }
}
</script>

<style>
    
</style>