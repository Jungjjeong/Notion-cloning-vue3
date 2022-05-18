const API_ADDRESS = "https://kdt-frontend.programmers.co.kr/documents/";

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async createWorkspace({ dispatch }, payload = {}) {
      const { parentId } = payload;
      await fetch(API_ADDRESS, {
        method: "POST",
        headers: {
          "x-username": "Jiyoung",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "",
          parent: parentId,
        }),
      }).then((res) => res.json());

      await dispatch("readWorkspaces");
    },
    async readWorkspaces({ commit }) {
      const workspaces = await fetch(API_ADDRESS, {
        method: "GET",
        headers: {
          "x-username": "Jiyoung",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      commit("assignState", {
        workspaces,
      });
    },
    readWorkspace() {},
    updateWorkspace() {},
    async deleteWorkspace({ dispatch }, payload) {
      const { id } = payload;
      await fetch(`${API_ADDRESS}${id}`, {
        method: "DELETE",
        headers: {
          "x-username": "Jiyoung",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      dispatch("readWorkspaces");
    },
  },
};
