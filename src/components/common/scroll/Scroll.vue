<template>
    <div class="wrapper" ref='wrapper'>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import bsScroll from 'better-scroll'

export default {
    data() {
        return {
            bsscroll: null,
        }
    },
    props:{
        probeType: {
                type: Number,
                default: 0
            },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    components:{
        bsScroll
    },
    mounted() {
        this.bsscroll = new bsScroll(this.$refs.wrapper,{
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
            
        })
        //console.log(this.probeType);
        //console.log(this.pullUpLoad);
        
        this.bsscroll.on('scroll', (position) => {
            this.$emit('scrollPosition',position)
        })
        this.bsscroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    },
    methods: {
       scrollTo(x, y, time=300){
            this.bsscroll.scrollTo(x, y, time)
        },
        finishPullUp(){
            this.bsscroll.finishPullUp()
        },
        refresh(){
            //console.log('------')
            this.bsscroll.refresh()
        },
        getScrollY(){
            return this.bsscroll.y
        }
        
    },
}
</script>

<style scoped>

</style>