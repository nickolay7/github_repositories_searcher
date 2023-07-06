<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
  .btn {
    padding: 5px 10px;
    border: 2px solid #A2A3A4;
  }
</style>