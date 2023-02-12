<template>
  <button
    class="g-button"
    :disabled="disabled"
    :class="styleClass"
    @click="handleClick"
  >
    <span v-if='icon'>
      <g-icon :name='icon'/>
    </span>
    <slot/>
  </button>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    styleClass() {
      return {
        // 如果 this.type 为true 则把状态传入styleClass
        [`g-button--${this.type}`]: this.type,
        // 如果round为true 圆角样式传入styleClass
        'is-round': this.round,
        // 把禁用状态传入styleClass
        'is-disabled': this.disabled,
      };
    },
  },
  methods: {
    handleClick() {
      // 父组件按钮点击事件触发子组件点击事件，子组件emit派发click事件 父组件就会接收到并触发这个事件
      this.$emit('click');
    },
  },

};
</script>

<style scoped>
@import "./style.scss"
</style>
