<template>
  <component :is="type" :id="id" />
</template>

<script>
export default {
  components: {
    Category: () => ({
      component: import('~/components/magento/Category.vue')
    }),
    Index: () => ({
      component: import('~/components/Index.vue')
    }),
    Product: () => ({
      component: import('~/components/magento/Product.vue')
    }),
    cms_page: () => ({
      component: import('~/components/magento/CmsPage.vue')
    })
  },
  data() {
    return {
      type: 'index',
      id: ''
    }
  },
  asyncData({ route, app, error }) {
    const path = route.path.replace('/', '')
    if (!path) {
      return {
        type: 'index',
        id: ''
      }
    }
    return app.apolloProvider.defaultClient
      .query({
        query: require('~/queries/urlResolver.graphql'),
        variables: {
          urlKey: path
        }
      })
      .then(({ data }) => {
        const type = data.urlResolver.type.toLowerCase()
        const id = data.urlResolver.id.toString()
        return {
          id,
          type
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Page not found' })
      })
  }
}
</script>
