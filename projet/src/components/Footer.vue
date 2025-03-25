<template>
  <footer>
    <p>© 2025 / projet vue js</p>
    <nav>
      <a href="#">A propos</a> |
      <a href="#">facebook</a> |
      <a href="#">X</a> |
      <a href="#">insta</a>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
  