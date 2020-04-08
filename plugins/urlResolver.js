export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    if (to.name === 'magento') {
      const path = to.path.replace(/^\//, '')
      const { data } = await app.apolloProvider.defaultClient.query({
        query: require('~/queries/urlResolver.graphql'),
        variables: {
          urlKey: path
        }
      })
      to.params.type = data.urlResolver.type.toLowerCase()
      to.params.id = data.urlResolver.id
      next()
    } else {
      next()
    }
  })
}
