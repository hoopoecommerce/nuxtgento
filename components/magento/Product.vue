<template>
  <apollo-query
    :query="require('~/queries/getProductDetail.graphql')"
    :variables="{
      urlKey: $route.path.replace('/', '').replace('.html', ''),
      onServer: false
    }"
  >
    <template slot-scope="{ result: { loading, error, data }, isLoading }">
      <!-- Loading -->
      <BaseLoader v-if="isLoading" />
      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>
      <!-- Result -->
      <div
        v-else-if="data && data.productDetail.items[0]"
        class="result apollo"
      >
        <ProductDetails :product="data.productDetail.items[0]" />
      </div>
    </template>
  </apollo-query>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
