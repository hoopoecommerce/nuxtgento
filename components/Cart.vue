<template>
  <div
    v-show="cartIsOpen"
    class="fixed h-full border-gray border-r w-full bg-white z-10 max-w-sm overflow-y-auto right-0"
  >
    <div
      class="bg-gray-light border-b border-gray flex items-center justify-between h-12"
    >
      <div class="pl-5 ml-0 mr-auto uppercase">Cart</div>
      <button class="w-12 h-12 p-3 mr-0" @click="toggleCart">
        <BaseIcon svg="multiply.svg" />
      </button>
    </div>
    <client-only>
      <div v-if="CartId">
        <apollo-query
          :query="require('~/queries/getCartDetails.graphql')"
          :variables="{ cartId: CartId }"
        >
          <template
            slot-scope="{ result: { loading, error, data }, isLoading }"
          >
            <!-- Loading -->
            <BaseLoader v-if="isLoading" />
            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>
            <!-- Result -->
            <div v-else-if="data">
              <div v-for="item in data.cart.items" :key="item.product.id">
                <img
                  :src="item.product.small_image.url"
                  :alt="item.product.small_image.label"
                  width="100"
                />
                {{ item.product.name }}
              </div>
            </div>
          </template>
        </apollo-query>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  apollo: {
    CartId: require('~/queries/getCartId.graphql')
  },
  computed: {
    cartIsOpen() {
      return this.$store.state.cartIsOpen
    }
  },
  methods: {
    toggleCart() {
      this.$store.commit('toggleCart')
    }
  }
}
</script>
