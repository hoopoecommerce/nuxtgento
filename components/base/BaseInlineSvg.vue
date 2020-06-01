<template>
  <!-- eslint-disable-next-line -->
  <div v-html="require(`~/assets/svg/${svg}?include`)"></div>
</template>

<script>
export default {
  props: {
    svg: {
      type: String,
      required: true
    }
  }
}
</script>
