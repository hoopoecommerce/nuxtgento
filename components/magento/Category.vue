<template>
  <div>
    <Breadcrumbs :id="id" />
    <CategoryList :id="id" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import CategoryList from '~/components/CategoryList'
export default {
  components: {
    Breadcrumbs,
    CategoryList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
