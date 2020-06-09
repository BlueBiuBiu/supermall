<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banner">
                <a href="item.link">
                <img :src="item.image" alt="" @load="SwiperImageLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
    data() {
        return {
            isLoad: false
        }
    },
    props:{
        banner: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods: {
        SwiperImageLoad(){
            if(!this.isLoad){
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    },
}
</script>

<style>
    
</style>