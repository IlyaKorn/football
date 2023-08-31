<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script>
import { useIndexStore } from '~/store'
const indexStore = useIndexStore()
export default {
  name: 'Default',

  created() {
    indexStore.getCountries()
  }
}
</script>
