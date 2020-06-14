import {debounce} from 'common/utils'
export const itemImgListenerMixin ={
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            refresh()
            //return this.debounce(this.$refs.scroll.refresh,100)
        }
        this.$bus.$on('imageLoad', this.itemImgListener)
        //console.log('混入--------');
        
    }
}

import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
    components:{
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTopClick(){
            this.$refs.scroll.scrollTo(0,0)
        }
    },
}