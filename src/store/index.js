import { createStore } from "vuex";
import message from "./message";
import count from "./count";
import user from "./user";

export default createStore({
  state() {
    return {
      msg: "store data",
      count: 1,
    };
  },
  getters: {
    reverseMsg(state) {
      return state.msg.split("").reverse().join("");
    },
  },
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  },
  actions: {
    // context =>  state, getters, commit(mutations), dispatch
    async fetchTodo({ commit }) {
      const todo = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());

      commit("updateMsg", todo.title);
    },
  },
  modules: {
    message,
    count,
    user,
  },
});
