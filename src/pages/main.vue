<template>
  <div class="main">
      <h1 class="title">Приветствую в тестовом задании)</h1>
      <router-link to="/repos">Искать репозитории</router-link>
  </div>
</template>

<script>
export default {
  name: "main"
}
</script>

<style scoped>
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      height: 100vh;
    }
</style>