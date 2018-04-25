import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  state,
  mutations: {
    setPrivateKey(state, privateKey) {
      state.privateKey = privateKey
    }
  },
  actions: {
  }
})
