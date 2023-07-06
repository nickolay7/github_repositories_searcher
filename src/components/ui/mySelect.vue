<template>
  <select
      class="limit"
      :value="modelValue"
      @change="onUpdate"
  >
    <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
    >{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: "mySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onUpdate(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  }
}
</script>

<style scoped>
.limit {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
}
</style>