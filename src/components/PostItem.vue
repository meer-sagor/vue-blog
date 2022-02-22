<template>
  <div class="posts">
    <div class="posts-content" v-for="post in posts" :key="post.id">
      <img class="posts-content__image" :src="post.image" alt="" />
      <h2 class="posts-content__title">{{ post.title }}</h2>
      <p class="posts-content__description">{{ post.description }}</p>
      {{post.id}}
      <div class="actions">
        <button @click="removePostHandler(post.id)">delete</button>
        <button>Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["post"],
  computed: mapState(["posts"]),
  methods: {
    removePostHandler(id) {
      this.$store.commit("removePost", id);
    },
  },
};
</script>

<style>
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
}
.posts-content {
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.actions button {
  font-size: inherit;
  cursor: pointer;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  border-radius: 0.3em;
  border: none;
}
</style>
