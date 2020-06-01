<template>
  <footer
    class="p-4 w-full border-t border-gray bg-gray-light text-gray-darker text-center"
  >
    <apollo-query :query="require('~/queries/getStoreConfigData.graphql')">
      <template slot-scope="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <small class="text-xs">{{ data.storeConfig.copyright }}</small>
        </div>
      </template>
    </apollo-query>
  </footer>
</template>
