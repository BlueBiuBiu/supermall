<template>
    <div class="login">
        <div class="avatar">
            <img src="~assets/img/profile/avatar.svg" alt="">
        </div>
        <div class="login-phone">
            <div class="login_buttom">
                <p>登录/注册</p>
            </div>
            <div class="phone">
                <img src="~assets/img/profile/phone.svg" alt="">
                <p>暂无绑定手机号</p>
            </div>
        </div>
        <div class="phone-nav">
            <img src="~assets/img/profile/navigate-right.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: ''
}
</script>

<style scoped>
    .login {
        display: flex;
        background-color: var(--color-tint);
        text-align: center;
        color: white;
        font-size: 15px;
    }
    .avatar {
        display: flex;
        padding: 5px 15px;
    }
    .avatar img {
        width: 55px;
        height: 55px;
    }
    .login-phone {
        padding-top: 15px;
    }
    .login_buttom {
        position: relative;
        right: 15px;
    }
    .phone {
        display: flex;
        padding-top: 5px;
        font-size: 13px;
    }
    .phone img {
        width: 18px;
        height: 18px;
    }
    .phone-nav img{
        width: 25px;
        height: 25px;
        display: flex;
        position: absolute;
        right: 0;
        margin-top: 20px;
    }
</style>
