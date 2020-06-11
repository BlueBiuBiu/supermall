<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item,index) in topImages" :key='index'>
                <!-- {{item}} -->
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
        <!-- <div v-for="item in topImages">{{item}}</div> -->
    </div>
</template>

<script>
import swiper from 'components/common/swiper/Swiper'
import swiperItem from 'components/common/swiper/SwiperItem'
export default {
    data() {
        return {
            
        }
    },
    props:{
        topImages: {
            type: Array,
            default(){
                return []
            },
            iid: String
        }
    },
    components:{
        swiper,
        swiperItem
    }
}
</script>

<style>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>