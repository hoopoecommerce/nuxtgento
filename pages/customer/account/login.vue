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
            <BaseInput
              id="email"
              v-model="email"
              type="text"
              placeholder="Email"
            >
              <template #label>
                Email
              </template>
            </BaseInput>
          </div>
          <div class="mb-6">
            <BaseInput
              id="password"
              v-model="password"
              type="password"
              placeholder="******************"
            >
              <template #label>
                Password
              </template>
            </BaseInput>
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
