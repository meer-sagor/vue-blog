import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
    removePost(state, payload) {
      const updateState = state.posts.filter((itemId) => itemId.id !== payload);
      state.posts = [...updateState];
    },
  },
  actions: {},
  modules: {},
});
