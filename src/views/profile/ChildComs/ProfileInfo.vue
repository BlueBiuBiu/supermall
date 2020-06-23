<template>
    <div class="profile-info">
        <div class="message">
            <img src="~assets/img/profile/message.svg" alt="">
            <p>我的消息</p>
        </div>
        <div class="pointer">
            <img src="~assets/img/profile/pointer.svg" alt="">
            <p>积分商城</p>
        </div>
        <div class="vip">
            <img src="~assets/img/profile/vip.svg" alt="">
            <p>会员卡</p>
        </div>
    </div>
</template>

<script>
export default {
    name: ''
}
</script>

<style scoped>
    .profile-info {
        border-bottom: 10px solid rgba(100,100,100,0.1);
    }
    .message {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .message p {
        padding-left: 10px;
    }
    .message img {
        width: 20px;
        height: 20px;
    }
    .pointer {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .pointer p {
        padding-left: 10px;
    }
    .pointer img {
        width: 20px;
        height: 20px;
    }
    .vip {
        display: flex;
        padding: 10px;
    }
    .vip p{
        padding-left: 10px;
    }
    .vip img {
        width: 20px;
        height: 20px;
    }
</style>
