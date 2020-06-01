<template>
  <apollo-query
    :query="require('~/queries/getBreadcrumbData.graphql')"
    :variables="{ category_id: id }"
  >
    <template slot-scope="{ result: { data } }">
      <template v-if="data" class="result apollo">
        <div class="text-sm py-2">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="px-2">/</span>
          <template v-for="(breadcrumb, index) in data.category.breadcrumbs">
            <nuxt-link
              :to="`/${breadcrumb.category_url_path}.html`"
              :key="index"
            >
              {{ breadcrumb.category_name }}
            </nuxt-link>
            <span class="px-2" :key="`seprator-${index}`">/</span>
          </template>
          <nuxt-link
            :to="`/${data.category.url_path}.html`"
            v-if="currentProduct"
          >
            {{ data.category.name }}
          </nuxt-link>
          <span v-else>
            {{ data.category.name }}
          </span>
          <span v-if="currentProduct">
            {{ currentProduct }}
          </span>
        </div>
      </template>
    </template>
  </apollo-query>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    currentProduct: {
      Type: String,
      default: null
    }
  }
}
</script>
