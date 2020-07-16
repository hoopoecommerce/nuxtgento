<template>
  <div>
    <div
      class="bg-gray-light border-b border-gray flex items-center justify-between h-12"
    >
      <button
        v-if="rootCategoryId !== categoryId"
        class="w-12 h-12 p-3"
        @click="setCategoryId(rootCategoryId)"
      >
        <BaseIcon svg="chevron_left.svg" />
      </button>
      <div class="pl-5 ml-0 mr-auto uppercase">Main Menu</div>
      <button class="w-12 h-12 p-3 mr-0" @click="toggleNavigation">
        <BaseIcon svg="multiply.svg" />
      </button>
    </div>
    <apollo-query
      :query="require('~/queries/getNavigationMenu.graphql')"
      :variables="{ id: categoryId }"
    >
      <template slot-scope="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <BaseLoader v-if="isLoading" />
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <!-- Result -->
        <ul v-else-if="data">
          <template v-for="menuItem in data.category.children">
            <li v-if="menuItem.include_in_menu" :key="menuItem.id">
              <button
                v-if="menuItem.children_count > 0"
                class="pl-5 border-gray border-b w-full text-left flex justify-between items-center"
                @click="setCategoryId(menuItem.id)"
              >
                <div>{{ menuItem.name }}</div>
                <BaseIcon svg="chevron_right.svg" class="w-12 h-12 p-4" />
              </button>
              <nuxt-link
                v-else
                :to="`/${menuItem.url_path}.html`"
                class="pl-5 py-3 border-gray border-b block w-full"
                @click.native="toggleNavigation"
              >
                {{ menuItem.name }}
              </nuxt-link>
            </li>
          </template>
        </ul>
      </template>
    </apollo-query>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootCategoryId: 2,
      categoryId: 2
    }
  },
  methods: {
    setCategoryId(id) {
      this.categoryId = id
    },
    toggleNavigation() {
      this.$store.commit('toggleNavigation')
    }
  }
}
</script>
