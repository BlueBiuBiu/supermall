<template>
    <div class="profile">
        <nav-bar class="profile-bav-bar"><div slot="center">我的资料</div></nav-bar>
        <login></login>
        <pocket></pocket>
        <profile-info></profile-info>
        <cart-info></cart-info>
    </div>
</template>

<script>
import Login from './ChildComs/Login'
import Pocket from './ChildComs/Pocket'
import ProfileInfo from './ChildComs/ProfileInfo'
import CartInfo from './ChildComs/CartInfo'

import NavBar from 'components/common/navbar/NavBar'
export default {
    name: '',
    components: {
        NavBar,
        Login,
        Pocket,
        ProfileInfo,
        CartInfo
    }
}
</script>
<style scoped>
    .profile {
        height: 100vh;
    }
    .profile-bav-bar {
        background-color: var(--color-tint);
        color: white;
    }
</style>
