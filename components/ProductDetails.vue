<template>
  <div>
    <form class="flex flex-wrap">
      <section class="md:w-1/2">
        <Gallery :product="product"></Gallery>
      </section>
      <section class="md:w-1/2">
        <h1>
          {{ product.name }}
        </h1>
        <p>
          {{ product.price.regularPrice.amount.value }}
          {{ product.price.regularPrice.amount.currency }}
        </p>
      </section>
    </form>
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
