<template>
  <nav class="nav">
    <div class="brand">
      <h1>Brand Name</h1>
    </div>
    <div class="nav-links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-links a {
  padding: 1rem;
  font-weight: 700;
}
.nav-links a:not(:last-child) {
  margin-right: 1rem;
}
a.router-link-exact-active {
  color: gray;
}
</style>
