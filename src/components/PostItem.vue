<template>
  <div v-if="posts.length == 0" class="not-found">
    <h1>No Post Found, create your own</h1>
  </div>
  <div class="posts">
    <div class="posts-content" v-for="post in posts" :key="post.id">
      <h2 class="posts-content__title">{{ post.title }}</h2>
      <p class="posts-content__description">{{ post.des }}</p>
      <div class="actions">
        <button @click="removePostHandler(post.id)">delete</button>
        <button @click="editPostHandler(post)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["posts"]),
  methods: {
    removePostHandler(id) {
      this.$store.commit("removePost", id);
    },
    editPostHandler(p) {
      this.$router.replace({ name: "Create" });
      this.$store.commit("editPost", p);
    },
  },
};
</script>

<style>
.not-found {
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.6em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-transform: capitalize;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 35rem));
  grid-gap: 2rem;
}
.posts-content {
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.posts-content__description {
  height: 20rem;
  overflow: auto;
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
  align-self: flex-end;
}
</style>
