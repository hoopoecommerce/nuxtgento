<template>
  <div>
    <h1>{{ product.name }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="product.description.html"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
