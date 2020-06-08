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
            }
    },
    components:{
        bsScroll
    },
    mounted() {
        this.bsscroll = new bsScroll(this.$refs.wrapper,{
            click: true,
            probeType: this.probeType
            
        })
        //console.log(this.probeType);
        
        this.bsscroll.on('scroll', (position) => {
            this.$emit('scrollPosition',position)
        })
    },
    methods: {
       scrollTo(x, y, time=300){
            this.bsscroll.scrollTo(x, y, time)
        }
    },
}
</script>

<style scoped>

</style>