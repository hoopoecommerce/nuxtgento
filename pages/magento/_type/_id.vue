<template>
  <div>
    <component :is="type" :id="id"></component>
  </div>
</template>

<script>
import loader from '~/components/Loader.vue'

export default {
  components: {
    Category: () => ({
      component: import('~/components/magento/Category.vue'),
      loading: loader
    }),
    Product: () => ({
      component: import('~/components/magento/Product.vue'),
      loading: loader
    }),
    cms_page: () => ({
      component: import('~/components/magento/CmsPage.vue'),
      loading: loader
    })
  },
  data() {
    return {
      type: this.$route.params.type.toLowerCase(),
      id: this.$route.params.id
    }
  }
}
</script>
