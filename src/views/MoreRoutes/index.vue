<template>
  <div>
    <g-button type="primary" disabled>primary</g-button>
    <g-button type="success" round>success</g-button>
    <g-button type="warning">warning</g-button>
    <g-button type="danger" @click="handleClick">danger</g-button>

    <g-icon name="wodexianxing"/>

  </div>

</template>

<script>
export default {
  methods: {
    handleClick() {
      // eslint-disable-next-line
      alert(11);
    },
  },
};
</script>

<style scoped>
*{
  height: 50px;
}
</style>
