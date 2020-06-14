<template>
    <div class="tab-control">
        <div :key='index' v-for="(item,index) in title" 
            class="tab-control-item" 
            @click="itemClick(index)" 
            :class="{active : index === currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        title: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabControl',index)
        }
    },
}
</script>

<style scope>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        background-color: white;
    }
    .tab-control-item {
        flex: 1;
    }
    .tab-control-item span {
        padding: 5px;
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>