<template>
    <scroll class="content1">
        <div class="category-tab">
            <div :key="index" class="tab-title" 
            v-for="(item,index) in tabTitle" 
            :class="{active: index === currentIndex}"
            @click="categoryClick(index)">
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    name: '',
    data() {
        return {
            currentIndex: 0,
        }
    },  
    props: {
        tabTitle: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        categoryClick(index){
            this.currentIndex = index
            this.$emit('categoryClick',index)
        }
    },
    components: {
        Scroll
    } 
}
</script>

<style scoped>
    .content1 {
        position: absolute;
        left: 0;
        top: 44px;
        bottom: 49px;
        width: 100px;
        overflow: hidden; 
    }
    .category-tab {
        width: 80px;
        background-color:#eee;
    }
    .tab-title {
        width: 80px;
        padding: 10px 10px;
        font-size: 13px;
        text-align: center;
    }
    .active{
        color: var(--color-tint);
        background-color: white;
    }
</style>
