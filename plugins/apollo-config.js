import { createHttpLink } from 'apollo-link-http'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
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
    defaultHttpLink: false
  }
}
