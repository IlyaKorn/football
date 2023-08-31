<template>
  <span class="icon" v-html="getIcon" />
</template>

<script>
import icons from "public/icons"
export default {
  name: 'Icon',

  props: {
    symbol: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  computed: {
    getIcon () {
      return icons[this.symbol]
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    display: flex;
    align-items: center;
  }
</style>