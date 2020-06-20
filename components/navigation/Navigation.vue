<template>
  <aside
    v-show="navigationIsOpen"
    class="fixed h-full border-gray border-r w-full bg-white z-10 max-w-sm overflow-y-auto"
  >
    <CategoryTree />
  </aside>
</template>

<script>
export default {
  computed: {
    navigationIsOpen() {
      return this.$store.state.navigationIsOpen
    }
  }
}
</script>
