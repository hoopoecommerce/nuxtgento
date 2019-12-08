<template>
  <div>
    <apollo-query
      :query="require('~/queries/getCmsPage.graphql')"
      :variables="{ id: id, onServer: false }"
    >
      <template slot-scope="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <h1>{{ data.cmsPage.content_heading }}</h1>
          <div v-html="data.cmsPage.content"></div>
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

