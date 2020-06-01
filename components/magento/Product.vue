<template>
  <div>
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
          <product :product="data.productDetail.items[0]" />
        </div>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import Product from '~/components/Product.vue'

export default {
  components: {
    Product
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
