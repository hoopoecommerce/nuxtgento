<template>
  <header
    class="flex items-center justify-between absolute w-full bg-gray-light border-gray border-b"
  >
    <button @click="toggleNavigation">
      <BaseInlineSvg svg="menu.svg" class="w-12 h-12 p-3" />
    </button>
    <nuxt-link to="/" alt="Hoopoe" class="mx-auto">
      <BaseInlineSvg svg="logo.svg" class="w-12 h-12 p-2" />
    </nuxt-link>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavigation() {
      this.$store.commit('toggleNavigation')
    }
  }
}
</script>
