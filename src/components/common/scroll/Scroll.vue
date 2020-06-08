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
            bsscroll: null 
        }
    },
    components:{
        bsScroll
    },
    mounted() {
        this.bsscroll = new bsScroll(this.$refs.wrapper,{

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