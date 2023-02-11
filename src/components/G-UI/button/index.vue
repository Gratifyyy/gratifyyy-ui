<template>
  <button class="g-button" :class="styleClass">123</button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    type: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'success', 'warning', 'danger'].includes(value),
    },
  },
  computed: {
    styleClass() {
      return {
        // 如果 this.type 为true 则把状态传入styleClass
        [`g-button--${this.type}`]: this.type,
      };
    },
  },

};
</script>

<style scoped>
@import "./style.scss"
</style>
