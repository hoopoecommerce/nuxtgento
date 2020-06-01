import Vue from 'vue'
const requireComponent = require.context(
  '~/components/base/',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace('./', '').replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})
