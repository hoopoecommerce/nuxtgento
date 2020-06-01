<template>
  <section class="mx-auto text-center">
    <h2 class="text-xl uppercase mb-6">Shop by category</h2>
    <apollo-query
      :query="require('~/queries/getNavigationMenu.graphql')"
      :variables="{ id: rootCategoryId }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo flex justify-around">
          <ul class="flex">
            <li
              v-for="category in data.category.children"
              :key="category.id"
              class="m-3"
            >
              <NuxtLink :to="category.url_path + '.html'">
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </apollo-query>
  </section>
</template>

<script>
export default {
  computed: {
    rootCategoryId() {
      return 2
    }
  }
}
</script>
