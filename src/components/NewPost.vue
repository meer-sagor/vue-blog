<template>
  <form class="form" @submit.prevent="handleSubmit(inputValues)">
    <div class="form-group margin-bottom">
      <label for="title">Title</label>
      <input type="text" name="" id="title" v-model="inputValues.title" />
    </div>

    <div class="form-group">
      <label for="description">description</label>
      <textarea id="description" rows="10" v-model="inputValues.description" />
    </div>
    <div class="actions">
      <button type="submit">Add post</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      inputValues: {
        id: uuidv4(),
        title: "",
        description: "",
      },
      isDisable: true,
    };
  },
  methods: {
    handleSubmit(values) {
      this.$store.commit("addPost", values);
      this.$router.replace({ path: "/" });
    },
  },
};
</script>

<style scoped>
.form {
  border-radius: 0.5em;
  padding: 1.5rem;
  width: 45rem;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.margin-bottom {
  margin-bottom: 3rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
  text-transform: capitalize;
}

.form-group input,
.form-group textarea {
  font-size: inherit;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.3em;
  border: 1px solid rgb(47, 255, 57);
  resize: none;
}
.form-group input,
.form-group textarea:focus {
  outline: none;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
