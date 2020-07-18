import { createHttpLink } from 'apollo-link-http'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import gql from 'graphql-tag'
import introspectionQueryResultData from '../fragmentTypes.json'

export default () => {
  const uri = 'http://localhost:3000/graphql'
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  })
  const link = createHttpLink({
    uri,
    useGETForQueries: true
  })
  const cache = new InMemoryCache({ fragmentMatcher })

  const resolvers = {
    Mutation: {
      setCartId: (root, { value }, { cache }) => {
        const data = {
          CartId: value
        }
        cache.writeData({ data })
        return null
      }
    }
  }

  const typeDefs = gql`
    type Query {
      CartId: String!
    }
  `

  const onCacheInit = cache => {
    const data = {
      CartId: null
    }
    cache.writeData({ data })
  }

  if (process.client) {
    persistCache({
      cache,
      storage: window.localStorage
    })
  }
  return {
    httpEndpoint: uri,
    link,
    cache,
    resolvers,
    typeDefs,
    onCacheInit,
    defaultHttpLink: false
  }
}
