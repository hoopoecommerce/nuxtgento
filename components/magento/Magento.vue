<template>
  <div>
    <LazyIndex v-if="type === 'index'" />
    <LazyCategory v-if="type === 'category'" :id="id" />
    <LazyProduct v-if="type === 'product'" :id="id" />
    <LazyCmsPage v-if="type === 'cms_page'" :id="id" />
  </div>
</template>

<script>
export default {
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
  },
  data() {
    return {
      type: 'index',
      id: ''
    }
  }
}
</script>
