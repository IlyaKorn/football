<template>
  <div class="header">
    <div class=" header__wrapper wrapper">
      <nav class="header__nav">
        <NuxtLink class="header__logo" to="/">
          <Icon symbol="logo" />
        </NuxtLink>
        <NuxtLink class="header__item" to="#">Leagues</NuxtLink>
        <NuxtLink class="header__item" to="#">Teams</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/header.scss';
</style>