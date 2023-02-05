import Vue from "vue";

export const order = {
  namespaced: true,
  state: {
    orderFoods: []
  },
  actions: {
    addFood({ commit }, food) {
      commit('setFood', food);
    },
    updateFood({ commit }, index) {
      commit('updateAmount', index);
    },
  },
  mutations: {
    setFood(state, food) {
      state.orderFoods.push(food);
    },
    updateAmount(state, index) {
      let val = state.orderFoods[index];
      val.amount++;
      Vue.set(state.orderFoods, index, val)
    }
  }
}