import Vue from 'vue'
import Vuex from 'vuex'
import {
  CHANGE_TOOK,

} from './mutation-types.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    took:true,
  },
  mutations: {
    [CHANGE_TOOK] (state,val) {
      // 变更状态
      state.took = val
    }
  },
  actions: {

  }
})
