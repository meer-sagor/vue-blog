import { createStore } from "vuex";
import { updateField, getField } from "vuex-map-fields";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    postObj: {
      title: "",
      des: "",
    },
    selectedPost: null,
    posts: [],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,

    addPost(state, payload) {
      const existingPostIndex = state.posts.findIndex(
        (item) => item.id === state.selectedPost?.id
      );
      const existingPostItem = state.posts[existingPostIndex];

      if (existingPostItem) {
        let updatedPostItem = {
          ...existingPostItem,
          title: payload.title,
          des: payload.des,
        };
        state.posts[existingPostIndex] = updatedPostItem;
      } else {
        state.posts.push(payload);
      }
      state.postObj = {};
    },
    editPost(state, payload) {
      const { id, title, des } = payload;
      state.postObj.title = title;
      state.postObj.des = des;
      state.selectedPost = payload;
    },
    removePost(state, payload) {
      const updateState = state.posts.filter((itemId) => itemId.id !== payload);
      state.posts = [...updateState];
    },
  },
  actions: {},
  modules: {},
});
