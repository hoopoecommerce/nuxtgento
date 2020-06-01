<template>
  <apollo-query
    :query="require('~/queries/getCategory.graphql')"
    :variables="{
      id: id,
      pageSize: 30,
      currentPage: 1,
      onServer: false,
      filters: {},
      sort: {
        relevance: 'ASC'
      }
    }"
  >
    <template slot-scope="{ result: { loading, error, data }, isLoading }">
      <!-- Loading -->
      <BaseLoader v-if="isLoading" />
      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>
      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <h2 class="text-xl uppercase mb-6 text-center">
          {{ data.category.name }}
        </h2>
        <ul>
          <li v-for="product in data.products.items" :key="product.id">
            <NuxtLink :to="'/' + product.url_key + '.html'">
              {{ product.name }}
            </NuxtLink>
          </li>
        </ul>
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
