<template>
    <div class="pocket">
        <div class="change">
            <div class="value-color">{{change | changeFilter}}</div>
            <div class="change-item">我的余额</div>
        </div>
        <div class="discount">
            <div class="value-color">{{discount}}个</div>
            <div class="discount-item">我的优惠</div>
        </div>
        <div class="integral">
            <div class="value-color">{{integral | integralFilter}}</div>
            <div class="integral-item">我的积分</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            change: 0,
            discount: 0,
            integral: 0
        }
    },
    filters: {
        changeFilter(value) {
            if (value <10000)
                return value.toFixed(2) + "元"
            else
                return (value/10000).toFixed(2) + '万'
        },
        integralFilter(value) {
            return value.toFixed(1) + '分'
        }
    }
}
</script>

<style scoped>
    .pocket{
        display: flex;
        justify-content: space-around;
        text-align: center;
        border-bottom: 10px solid rgba(100,100,100,0.1);
    }
    .change {
        padding: 14px;
        border-right: 1px solid rgba(100,100,100,0.1);
    }
    .change-item {
        padding-top: 5px;
    }
    .discount {
        padding: 14px 25px;
        border-right: 1px solid rgba(100,100,100,0.1);
    }
    .discount-item {
        padding-top: 5px;
    }
    .integral {
        padding: 14px 20px;
    }
    .integral-item {
        padding-top: 5px;
    }
    .value-color {
        color: rgb(255, 82, 2);
    }
</style>
