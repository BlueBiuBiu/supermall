<template>
    <div class="category-tab">
        <div :key="index" class="tab-title" 
        v-for="(item,index) in tabTitle" 
        :class="{active: index === currentIndex}"
        @click="categoryClick(index)">
            {{item.title}}
        </div>
    </div>
</template>

<script>
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
}
</script>

<style scoped>
    .category-tab {
        width: 80px;
        background-color: #eee;
        margin-right: 70%;
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
