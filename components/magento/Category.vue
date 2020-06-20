<template>
  <div>
    <Breadcrumbs :id="id" />
    <CategoryList :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
