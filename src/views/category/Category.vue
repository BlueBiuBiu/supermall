<template>
    <div id="category">
        <nav-bar><div slot="center" class="category-nav-bar">商品分类</div></nav-bar>
        <scroll class="content">
            <category-tab-control></category-tab-control>
            <tab-control :title="['流行','新款','精选']" class="tab"></tab-control>
        </scroll>
    </div>
</template>

<script>
import CategoryTabControl from './ChildComs/CategoryTabControl'

import TabControl from 'components/content/homeTabControl/TabControl'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

export default {
    name: 'Category',
    data() {
        return {

        }
    },
    components: {
        NavBar,
        CategoryTabControl,
        Scroll,
        TabControl
    },
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