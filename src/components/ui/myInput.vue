<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="onUpdate"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    onUpdate(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  padding: 15px;
  border: 1px solid #A2A3A4;
}
</style>