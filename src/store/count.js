export default {
  namespaced: true,
  state() {
    return {
      count: 1,
    };
  },
  getters: {},
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
    decreaseCount(state) {
      state.count -= 1;
    },
  },
  actions: {},
};
