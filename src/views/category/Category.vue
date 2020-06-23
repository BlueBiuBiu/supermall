<template>
    <div id="category">
        <nav-bar><div slot="center" class="category-nav-bar">商品分类</div></nav-bar>
        <category-tab-control @categoryClick="categoryClick" 
            :tab-title='tabTitle'>
        </category-tab-control>  
        <tab-control :title="['流行','新款','精选']" 
        @tabControl='tabControl' class="tabHidden" v-show='tabShow'>
        </tab-control>
        <scroll class="content" ref='scroll' :probe-type='3' @scrollPosition="scrollPosition">
            <category-top-info :category-info="topCategoryList"></category-top-info>
            <tab-control :title="['流行','新款','精选']" @tabControl='tabControl' class="tab"></tab-control>
            <category-info :category-info="categoryList"></category-info>
        </scroll>
    </div>
</template>

<script>
import CategoryTabControl from './ChildComs/CategoryTabControl'
import CategoryInfo from './ChildComs/categoryInfo'
import CategoryTopInfo from './ChildComs/CategoryTopInfo'

import TabControl from 'components/content/homeTabControl/TabControl'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {getSubCategoryData, getSubCategoryDetailData, getCategoryData} from 'network/category'

import {debounce} from 'common/utils'

export default {
    name: 'Category',
    data() {
        return {
            categoryList: [],
            topCategoryList: [],
            miniWallkey: [],
            currentTab: 'pop',
            currentIndex: 1,
            tabTitle: [],
            tabShow: false,
            saveY: 0
        }
    },
    components: {
        NavBar,
        CategoryTabControl,
        Scroll,
        TabControl,
        CategoryInfo,
        CategoryTopInfo
    },
    created(){ 
        getCategoryData().then(res => {
            //console.log(res.data.category.list);
            this.tabTitle = res.data.category.list   
            this.categoryClick(0)
            this.getSubCategoryDetailData(0)
        })
        console.log('created');
        
    },
    mounted() {
            this.$bus.$on('categoryImageLoad', () =>{
            debounce(this.$refs.scroll.refresh(),500)
            console.log(this.$refs.scroll.refresh)
        })
    },
    activated() {
        this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
        console.log('deactivated')
        this.saveY = this.$refs.scroll.getScrollY()
        console.log(this.$refs.scroll.getScrollY);
        this.$bus.$off('imageLoad', 'categoryImageLoad', () => {
            debounce(this.$refs.scroll.refresh(),500)
            console.log(this.$refs.scroll.refresh)
        })  
    },
    methods: {
        scrollPosition(position){
            this.tabShow = (-position.y) > 960
        },
        categoryClick(index){
            this.currentIndex = index
            const maitKey = this.tabTitle[index].maitKey
            getSubCategoryData(maitKey).then(res => {
                //console.log(res);
                this.topCategoryList = res.data.list 
            })
            this.getSubCategoryDetailData(index)
        },
        getSubCategoryDetailData(index){
            const miniWallkey = this.tabTitle[index].miniWallkey
            getSubCategoryDetailData(miniWallkey,this.currentTab).then(res => {
                this.categoryList = res
                //console.log(res);
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
            this.getSubCategoryDetailData(this.currentIndex)
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
        top: 44px;
        right: 0;
        left: 25%;
        bottom: 49px;
        overflow: hidden;
    }
    .tab {
        background-color: white;
    }
    .tabHidden {
        position: absolute;
        top: 44px;
        right: 0;
        left: 25%;
        bottom: 49px;
        z-index: 9;
        overflow: hidden;
        background-color: white;
    }
</style>