<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item,index) in topImages" :key='index'>
                <!-- {{item}} -->
                <img :src="item" alt="" @load='imgLoad'>
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
            counter: 0
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
    },
    methods: {
        imgLoad(){
            this.counter += 1
            if(this.counter === this.topImages.length){
                this.$emit('imgLoad')
                //console.log(this.topImages.length);
                
            }
        }
    },
}
</script>

<style>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>