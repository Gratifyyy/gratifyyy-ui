<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="IconName"/>
  </svg>
</template>

<script>
import '../../assets/images/js/iconfont';

export default {
  name: 'g-icon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    IconName() {
      return `#icon-${this.name}`;
    },
  },

};
</script>

<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
