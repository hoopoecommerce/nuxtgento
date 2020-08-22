<template>
  <div>
    <img
      v-for="image in mediaGalleryEntries"
      :key="image.id"
      :src="`/media/catalog/product${image.file}`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    mediaGalleryEntries() {
      return this.product.media_gallery_entries
    }
  }
}
</script>
