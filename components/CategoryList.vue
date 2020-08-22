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
        <ul class="flex flex-wrap">
          <li
            v-for="product in data.products.items"
            :key="product.id"
            class="w-1/2 md:w-1/3"
          >
            <NuxtLink :to="'/' + product.url_key + '.html'">
              <img
                :key="product.media_gallery_entries[0].id"
                :src="
                  `/media/catalog/product${product.media_gallery_entries[0].file}`
                "
                alt=""
              />
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
