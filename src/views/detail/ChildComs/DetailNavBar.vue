<template>
    <div>
        <nav-bar>
            <div slot='left' class='detail-back' @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="detail-nav-bar">
                <div :key='index' v-for="(item,index) in titles" 
                    class="detail-item" @click="titleClick(index)"
                    :class="{active: index === currentIndex}">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    components: {
        NavBar
    },
    methods: {
        titleClick(index){
            this.currentIndex = index
            this.$emit('titleClick', index)
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    .detail-nav-bar {
        display: flex;
        font-size: 14px;
    }
    .detail-item {
        flex: 1;
    }
    .active {
        color: var(--color-tint);
    }
    .detail-back img{
        margin-top: 11px;
    }
</style>