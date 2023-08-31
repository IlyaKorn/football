<template>
  <div class="teams wrapper">
    <h1 class="teams__title">Teams</h1>
    <form v-if="countries.length" class="leagues__form">
      <h2 class="teams__subtitle">Please, select a country:</h2>
      <Select
          :options="countries"
          valueType="name"
          @selected="getLeaguesByCountry($event.name)"
      />
      <ul class="teams__list">
        <Team
            v-for="item in team"
            :key="item.id"
            :league="item"
        />
      </ul>
    </form>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useIndexStore } from '@/store'

export default {
  name: 'Teams',

  computed: {
    ...mapState(useIndexStore, ['teams', 'countries'])
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/leagues.scss';
</style>