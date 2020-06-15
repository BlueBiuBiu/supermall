<template>
    <div class="bottom-bar">
            <div class="left">
                <check-button class="check-button" :is-check='selectAll' @click.native="totalButtonClick"></check-button>
                <span class="total">
                    全部
                </span>
            </div>
            <div class="totalPrice">
                合计:{{totalPrice}}
            </div>
            <div class='pay' @click="payClick">
                去结算:{{totalNum}}
            </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
    name: '',
    data() {
        return {
            goods: {
                type: Object,
                default(){
                    return {}
                }
            }
        }
    },
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters({
            list: 'cartList'
        }),
        totalPrice(){
            return '￥' + this.list.filter((item) => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.count * item.nowPrice
            },0).toFixed(2)
        },
        totalNum(){
            return this.list.filter((item) => {
                return item.checked
            }).length
        },
        selectAll(){
            //大于0的数取反得false
            if(this.list.length === 0) return false
            //第一种: filter
            // return !(this.list.filter((item) => !item.checked).length)
            //第二种: find
            return !this.list.find((item) => !item.checked)
            //第三种:普通遍历
            // for(let item of this.list){
            //     if(!item.checked) return false
            // }
            // return true
        },
    },
    methods: {
        totalButtonClick(){
            if(this.selectAll)
            {
                this.list.forEach(item => item.checked = false)
            }else{
                this.list.forEach(item => item.checked = true)
            }
        },
        payClick(){
            if(!this.selectAll){
                this.$toast.show('请选择购买的商品')
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        position: relative;
        bottom: 40px;
        background-color: rgb(250, 236, 236);
        display: flex;
        font-size: 14px;
        line-height: 40px;
    }
    .check-button {
        width: 20px;
        height: 20px;
        display: flex;
        margin: 10px 10px;
    }
    .left {
        width: 80px;
        display: flex;
    }
    .totalPrice {
        margin-left: 18px;
        flex: 1;
    }
    .pay {
        width: 90px;
        color: white;
        background-color: rgb(255, 0, 0);
        text-align: center;
    }
</style>
