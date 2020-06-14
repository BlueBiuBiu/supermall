import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

Vue.use(Vuex)
const state = {
    cartList: []
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store