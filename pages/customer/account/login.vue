<template>
  <div class="w-full max-w-xs m-auto">
    <ApolloMutation
      :mutation="require('~/queries/signIn.graphql')"
      :variables="{
        email,
        password
      }"
      @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <p v-if="error">{{ error.message }}</p>
        <h1 class="text-center text-3xl mb-5">Customer Login</h1>
        <form @submit.prevent="mutate()">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              id="password"
              v-model="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-6">
            <button
              class="bg-black text-white rounded font-bold py-2 px-4 w-full"
              type="submit"
              :disabled="loading"
            >
              Sign In
            </button>
          </div>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onDone({ data }) {
      await this.$apolloHelpers.onLogin(data.generateCustomerToken.token)
      await this.$apollo.query({
        query: require('~/queries/getCustomer.graphql')
      })
      this.$router.push('/customer/account')
    }
  }
}
</script>
