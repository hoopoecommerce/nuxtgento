<template>
  <apollo-query
    :query="require('~/queries/getCmsPage.graphql')"
    :variables="{ id: id, onServer: false }"
  >
    <template slot-scope="{ result: { loading, error, data }, isLoading }">
      <!-- Loading -->
      <BaseLoader v-if="isLoading" />
      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>
      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <h1>{{ data.cmsPage.content_heading }}</h1>
        <!-- eslint-disable-next-line -->
        <div v-html="data.cmsPage.content"></div>
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
