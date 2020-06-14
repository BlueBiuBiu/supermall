import {
    ADD_COUNTER,ADD_GOODS
} from './mutations-type'
export default {
    //mutations里面的方法尽量必交单一
    [ADD_COUNTER](state,payLoad){
        payLoad.count += 1
    },
    [ADD_GOODS](state,payLoad){
        payLoad.checked = true
        state.cartList.push(payLoad)
    }
}