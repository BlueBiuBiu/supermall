<template>
    <div id="category">
        <nav-bar><div slot="center" class="category-nav-bar">商品分类</div></nav-bar>
        <scroll class="content" ref='scroll'>
            <category-tab-control @categoryClick="categoryClick" 
            :tab-title='tabTitle'>
            </category-tab-control>        
            <div class="tab">
                <tab-control :title="['流行','新款','精选']" @tabControl='tabControl'></tab-control>
                <category-info :category-info="categoryList"></category-info>
            </div>
        </scroll>
    </div>
</template>

<script>
import CategoryTabControl from './ChildComs/CategoryTabControl'
import CategoryInfo from './ChildComs/categoryInfo'

import TabControl from 'components/content/homeTabControl/TabControl'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {getSubCategoryData, getSubCategoryDetailData, getCategoryData} from 'network/category'

export default {
    name: 'Category',
    data() {
        return {
            categoryList: [],
            miniWallkey: [],
            currentTab: 'pop',
            currentIndex: 1,
            tabTitle: []
        }
    },
    components: {
        NavBar,
        CategoryTabControl,
        Scroll,
        TabControl,
        CategoryInfo
    },
    created(){ 
        getCategoryData().then(res => {
            //console.log(res.data.category.list);
            this.tabTitle = res.data.category.list   
            this.categoryClick(0)
            this.getSubCategoryDetailData(0)
        })
    },
    mounted(){
        this.$bus.$on('categoryImageLoad', () =>{
            this.$refs.scroll.refresh()
        })  
    },
    methods: {
        categoryClick(index){
            this.currentIndex = index
            const maitKey = this.tabTitle[index].maitKey
            getSubCategoryData(maitKey).then(res => {
                //console.log(res);
                // this.categoryList = res.data.list 
            })
            this.getSubCategoryDetailData(index)
        },
        getSubCategoryDetailData(index){
            const miniWallkey = this.tabTitle[index].miniWallkey
            getSubCategoryDetailData(miniWallkey,this.currentTab).then(res => {
                this.categoryList = res
                console.log(res);
                
            })
        },
        tabControl(index){
            switch(index){
                case 0:
                    this.currentTab = 'pop'
                    break
                case 1:
                    this.currentTab = 'new'
                    break
                case 2:
                    this.currentTab = 'sell'
                    break
            }
            this.categoryClick(this.currentIndex)
        }

    }
}
</script>

<style scoped>
    #category{
        height: 100vh;
    }
    .category-nav-bar {
        background: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 9;
    }
    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;
        overflow: hidden; 
    }
    .tab {
        position: absolute;
        top: 0;
        right: 0;
        left: 25%;
    }
</style>