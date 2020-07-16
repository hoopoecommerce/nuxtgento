<template>
  <div>
    <slot name="label">
      <BaseLabel>{{ label }}</BaseLabel>
    </slot>
    <input
      :id="id"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    /**
     * Input id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    }
  }
}
</script>
