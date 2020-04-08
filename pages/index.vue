<template>
  <section class="container">
    <div>
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
          <div v-else-if="data" class="result apollo">
            <ul>
              <li v-for="category in data.category.children" :key="category.id">
                <NuxtLink :to="category.url_path + '.html'">{{
                  category.name
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </apollo-query>
    </div>
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
