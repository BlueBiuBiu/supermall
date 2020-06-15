import{
    ADD_COUNTER,ADD_GOODS
} from 'store/mutations/mutations-type'
export default {
    addToCart(context, payLoad){
       return new Promise((resolve, reject) => {
        let goods = context.state.cartList.find(item => item.iid === payLoad.iid)
        if(goods){
            //不要直接修改state的值，要通过mutations进行修改
            context.commit(ADD_COUNTER,goods)
            resolve('当前商品数量+1')
        }else{
            payLoad.count = 1
            context.commit(ADD_GOODS, payLoad)
            resolve('当前商品添加成功')
        }
       })
    }
}