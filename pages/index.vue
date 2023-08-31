<template>
  <div class="main-page wrapper">
    <NuxtLink class="main-page__link" to="/leagues">
      <div class="main-page__card">
          <p class="main-page__title">Leagues</p>
      </div>
    </NuxtLink>

    <NuxtLink class="main-page__link" to="/teams">
      <div class="main-page__card">
          <p class="main-page__title">Teams</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      abraham: []
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/main-page.scss';
</style>