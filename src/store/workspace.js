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
    createWorkspace() {},
    async readWorkspaces({ commit }) {
      const workspaces = await fetch(
        "https://kdt-frontend.programmers.co.kr/documents/",
        {
          method: "GET",
          headers: {
            "x-username": "Jiyoung",
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      commit("assignState", {
        workspaces,
      });
    },
    readWorkspace() {},
    updateWorkspace() {},
    deleteWorkspace() {},
  },
};
