<template>
  <div>
    <apollo-query
      :query="require('~/queries/getCategory.graphql')"
      :variables="{ id: id, pageSize: 30, currentPage: 1, onServer: false }"
    >
      <template slot-scope="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <h1>{{ data.category.name }}</h1>
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
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>
