<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div v-html="product.description.html"></div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
