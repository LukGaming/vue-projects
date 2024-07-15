import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    updateCount(state, payload){
      state.count = payload;
    },
  },
  actions: {
    increment({commit, state}){
      console.log(state.count)
      commit("updateCount", state.count +=1 );
    },
    decrement({commit, state}){
      commit("updateCount", state.count -=1);
    },
  },

})
